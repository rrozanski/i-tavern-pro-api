const express = require("express");
const body_parser = require('body-parser');
const cors = require('cors');
const joi = require('joi');
const uuid = require('uuid/v4');
const app = express();

const heroSchema = joi.object().keys({
    id: joi.string().alphanum().required(),
    name: joi.string().max(100).required(),
    gender: joi.string().required(),
    race: joi.string().required(),
    class: joi.string().required(),
    abilities: {
        dexterity: joi.number().integer().min(1).max(20).required(),
        strength: joi.number().integer().min(1).max(20).required(),
        wisdom: joi.number().integer().min(1).max(20).required()
    }
});

let heroes = [
    {
        id: '1',
        name: 'Horven Runehouse',
        gender: 'MALE',
        race: 'DWARF',
        class: 'FIGHTER',
        abilities: {
            dexterity: 10,
            strength: 20,
            wisdom: 1
        }
    },
    {
        id: '2',
        name: 'Janthyra Hawklight',
        gender: 'FEMALE',
        race: 'HUMAN',
        class: 'ROGUE',
        abilities: {
            dexterity: 20,
            strength: 10,
            wisdom: 5
        }
    },
    {
        id: '3',
        name: 'Shaster Dragonsoultouched',
        gender: 'MALE',
        race: 'ELF',
        class: 'WIZARD',
        abilities: {
            dexterity: 5,
            strength: 2,
            wisdom: 20
        }
    }
];

const quests = [
    {
        id: 1,
        description: 'Save the dragon from the villagers.',
        status: 'AVAILABLE'
    },
    {
        id: 2,
        description: 'Kill all rats in the cellar.',
        status: 'IN_PROGRESS'
    },
    {
        id: 3,
        description: 'Negotiate peace with barbarians.',
        status: 'COMPLETED'
    },
];

app.use(cors());
app.use(body_parser.json());

app.listen(3000, () => {
    console.log("Server running at: http://localhost:3000");
});

app.get("/heroes", (req, res) => {
    res.json(heroes);
});

app.get("/quests", (req, res) => {
    res.json(quests);
});

app.post("/hero", (req, res) => {
    const hero = req.body;
    const result = joi.validate(hero, heroSchema);

    if (result.error) {
        res.sendStatus(500);
    }

    heroes.push(hero);

    res.status(200).send(hero);
});

app.delete("/hero/:id", (req, res) => {
    const hero = heroes.find((item) => item.id === req.params.id);

    if (!hero) {
        res.sendStatus(404);
    }

    heroes = heroes.filter((item) => item.id !== hero.id);

    res.json(hero);
});
