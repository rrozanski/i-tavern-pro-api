# iTavern PRO API

Sample API prepared for Vue workshop.

## Setup

1. Download API from repository:

   ```
   git clone git@github.com:rrozanski/i-tavern-pro-api.git
   ```
   or
   ```
   git clone https://github.com/rrozanski/i-tavern-pro-api.git
   ```
2. Install dependencies:

   ```
   npm install
   ```
3. Run API:

   ```
   node .\index.js
   ```

## Available endpoints

```
GET http://localhost:3000/heroes

payload:
--------
{
  id: string;
  name: string;,
  gender: string;,
  race: string;,
  class: string;
  abilities: {
    dexterity: number;
    strength: number;,
    wisdom: number;
  };
}
```

```
DELETE http://localhost:3000/hero/{id}
```

```
POST http://localhost:3000/hero
```

```
GET http://localhost:3000/quests
```
