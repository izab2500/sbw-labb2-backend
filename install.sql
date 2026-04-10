-- Använd databasen cv, skapa om den inte finns
CREATE DATABASE IF NOT EXISTS cv
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci;

USE cv;

DROP TABLE IF EXISTS workexperience;

CREATE TABLE workexperience (
    id INT AUTO_INCREMENT PRIMARY KEY,
    companyname VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    jobtitle VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
    location VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
    description TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
);


INSERT INTO workexperience (companyname, jobtitle, location, description) VALUES
('ZA Restaurang AB', 'Restaurangägare', 'Stockholm', 'Drev restaurang'),
('Nordic Build AB', 'Delägare', 'Oslo', 'Ansvarde för byggprojekt'),
('International School', 'Matematiklärare', 'Barcelona', 'Undervisade i matematik'),
('Malmö Gymnasium', 'Statistiklärare', 'Malmö', 'Undervisade i statistik'),
('Green Energy AB', 'Projektledare', 'Helsingfors', 'Ledde energiprojekt'),
('Finance Group AB', 'Analytiker', 'Stockholm', 'Analyserade data'),
('Logistik Sverige AB', 'Logistikkoordinator', 'Uppsala', 'Planerade transporter'),
('City Hotel AB', 'Hotellchef', 'Göteborg', 'Ansvarade för drift'),
('Healthcare AB', 'Sjuksköterska', 'Lund', 'Hanterade patienter'),
('Retail Group AB', 'Butikschef', 'Västerås', 'Ledde butik');