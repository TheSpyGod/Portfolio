CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    description VARCHAR
);

-- Tworzenie tabeli zamówień (relacja z użytkownikami)
CREATE TABLE certifications (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    description VARCHAR,
    img VARCHAR
);

-- Przykładowe dane (opcjonalnie)
INSERT INTO projects (title, description) VALUES ('CarSim', 'A 2D sim game');
INSERT INTO certifications (title, description) VALUES ('Technicians certificate', 'Allows me to work as a Technician');
