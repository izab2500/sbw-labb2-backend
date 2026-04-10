const db = require("../config/db");

/**
 * Hämtar alla arbetserfarenheter från databasen.
 *
 * @returns {Promise<Object[]>} En array med arbetserfarenheter
 */

async function getAllWorkexperiences() {
    const sql = 'SELECT * FROM `workexperience`';
    const [rows] = await db.execute(sql);
    return rows;
}

/**
 * Skapar en ny arbetserfarenhet i databasen.
 *
 * @param {Object} obj - Objekt med data för arbetserfarenhet
 * @param {string} obj.companyname - Företagsnamn
 * @param {string} obj.jobtitle - Jobbtitel
 * @param {string} obj.location - Plats
 * @param {string} obj.description - Beskrivning
 * @returns {Promise<Object>} Resultat från databasen 
 */

async function createWorkexperience(obj) {
    const { companyname, jobtitle, location, description } = obj;
    const sql = 'INSERT INTO `workexperience`(`companyname`, `jobtitle`, `location`, `description`) VALUES (?, ?, ?, ?)';
    const values = [companyname, jobtitle, location, description];
    const [results] = await db.execute(sql, values);
    return results;
}

/**
 * Uppdaterar en arbetserfarenhet i databas.
 *
 * @param {Object} obj - Objekt med uppdaterad data
 * @param {number|string} obj.id - ID för resursen
 * @param {string} obj.companyname - Företagsnamn
 * @param {string} obj.jobtitle - Jobbtitel
 * @param {string} obj.location - Plats
 * @param {string} obj.description - Beskrivning
 * @returns {Promise<Object>} Resultat från databasen
 */

async function updateWorkexperience(obj) {
    const { id, companyname, jobtitle, location, description } = obj;
    const sql = 'UPDATE `workexperience` SET `companyname` = ?, `jobtitle` = ?, `location` = ?, `description` = ? WHERE `id` = ? LIMIT 1';
    const values = [companyname, jobtitle, location, description, id];
    const [results] = await db.execute(sql, values);
    return results;
}

/**
 * Raderar en arbetserfarenhet från databasen.
 *
 * @param {number|string} id - Id för resursen som ska raderas
 * @returns {Promise<Object>} Resultat från databasen
 */

async function deleteWorkexperience(id) {
    const sql = 'DELETE FROM `workexperience` WHERE `id` = ? LIMIT 1';
    const values = [id];
    const [results] = await db.execute(sql, values);
    return results;
}

module.exports = {
    getAllWorkexperiences,
    createWorkexperience,
    updateWorkexperience,
    deleteWorkexperience
}