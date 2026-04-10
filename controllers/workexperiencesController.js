// Databas SQL-frågor
const models = require("../models/workexperiencesModels");

/**
 * Hämtar alla arbetserfarenheter från databasen.
 *
 * @param {Object} req - HTTP request-objekt
 * @param {Object} res - HTTP response-objekt
 * @returns {Promise<void>}
 */

async function getAllWorkexperiences(req, res) {
    try {
        const rows = await models.getAllWorkexperiences();
        if (rows.length < 1) return res.status(404).json({ message: "No work experiences found", data: rows })
        return res.status(200).json({ message: "Resources loaded successfully", data: rows })

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error", data: "" })
    }
}

/**
 * Skapar en ny arbetserfarenhet i databasen.
 *
 * Validerar att alla fält är ifyllda innan sparning.
 *
 * @param {Object} req - HTTP request-objekt (innehåller data i body)
 * @param {Object} res - HTTP response-objekt
 * @returns {Promise<void>}
 */

async function createWorkexperience(req, res) {
    try {
        // Inputfält måste innehålla data (frontend)
        const { companyname, jobtitle, location, description } = req.body;
        if (!companyname || !jobtitle || !location || !description) {
            return res.status(400).json({
                message: "Bad request", errors: {
                    companyname: !companyname ? "Inputfält får inte vara tomt" : "",
                    jobtitle: !jobtitle ? "Inputfält får inte vara tomt" : "",
                    location: !location ? "Inputfält får inte vara tomt" : "",
                    description: !description ? "Inputfält får inte vara tomt" : ""
                }
            })
        }
        // Kontrollera om resurs skapades
        const result = await models.createWorkexperience({ companyname, jobtitle, location, description });
        if (result.affectedRows > 0) return res.status(201).json({ message: "Resource created succesfully", data: { id: result.insertId } })
        // Resurs kunde inte skapas
        return res.status(500).json({ message: "Failed to create resource" })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" })
    }
}

/**
 * Uppdaterar en existerande arbetserfarenhet i databasen.
 *
 * Kontrollerar att alla fält är ifyllda innan uppdatering.
 *
 * @param {Object} req - HTTP request-objekt (innehåller id och data)
 * @param {Object} res - HTTP response-objekt
 * @returns {Promise<void>}
 */

async function updateWorkexperience(req, res) {
    try {
        // Inputfält måste innehålla data (frontend)
        const { id } = req.params;
        const { companyname, jobtitle, location, description } = req.body;
        if (!companyname || !jobtitle || !location || !description) {
            return res.status(400).json({
                message: "Bad request", errors: {
                    companyname: !companyname ? "Inputfält får inte vara tomnt" : "",
                    jobtitle: !jobtitle ? "Inputfält får inte vara tomnt" : "",
                    location: !location ? "Inputfält får inte vara tomnt" : "",
                    description: !description ? "Inputfält får inte vara tomnt" : ""
                }
            })
        }
        // Kontrollera om resurs uppdaterades
        const result = await models.updateWorkexperience({ id, companyname, jobtitle, location, description });
        if (result.affectedRows > 0) return res.status(200).json({ message: "Resource updated succesfully", data: { id } })
        // Resurs kunde inte skapas
        return res.status(404).json({ message: "Failed to update resource" })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" })
    }
}

/**
 * Raderar en arbetserfarenhet från databasen baserat på id.
 *
 * @param {Object} req - HTTP request-objekt (innehåller id i params)
 * @param {Object} res - HTTP response-objekt
 * @returns {Promise<void>}
 */

async function deleteWorkexperience(req, res) {
    try {
        const { id } = req.params;
        const result = await models.deleteWorkexperience(id)
        if (result.affectedRows > 0) return res.status(200).json({ message: "Resource deleted succesfully ", data: { id } })
        return res.status(404).json({ message: "Failed to delete resource, not found" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = {
    getAllWorkexperiences,
    createWorkexperience,
    updateWorkexperience,
    deleteWorkexperience
}
