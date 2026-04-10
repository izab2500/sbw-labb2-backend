# ☄️ API DOCS 

Nedan följer information om hur du installerar och använder API:et för att utföra CRUD-operationer.

## 📃 Installation

1. Klona repositoryt

- git clone https://github.com/izab2500/sbw-labb2-backend.git

2. Installera beroenden (npm packet)

- npm install 

3. Skapa databas och tabell (MySQL)

- Logga in i MySQL:

 mysql -u root 

- Kör installationsfilen

source install.sql;

 Detta skapar databasen **cv** och tabellen **workexperience**


## 🌐 API-endpoints

| Metod | Endpoint                   | Beskrivning
--------|----------------------------|-------------------------------
|GET    | /api/v1/workexperiences    | Hämtar alla arbetserfarnheter |
|POST   | /api/v1/workexperiences    | Skapar en ny arbetserfarenhet |
|PUT    | /api/v1/workexperiences/:id| Uppdaterar en arbetserfarenhet|
|DELETE |/api/v1/workexperiences/:id | Raderar en arbetserfarenhet   |

## 🧩 JSON-format

API:et returnerar svar i JSON-format:

```json
{
  "message": "beskrivande meddelande",
  "data": "resultat eller tomt värde"
}

{
  "message":"beskrivande meddelande",
  "errors": "{Felmeddelande}"
}
```

Förklaring:

- message: innehåller någon form av information (t.ex. "Resource created successfully")

- data: innehåller resursdata, id för resur eller en tom sträng. 

- errors: objekt med felmeddelanden för serversidevalidering (POST eller PUT)

## 👀 Videodemostration

[Gå till video](https://youtu.be/y0kRM8FtMr0)

