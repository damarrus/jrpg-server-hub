const C = require('../config.js');

module.exports = [
    {
        id: 1,
        name: 'Урон',
        type: 1,
        effects: [
            {type:  C.EFFECT_HP, data: [-10]}
        ]
    },
    {
        id: 2,
        name: 'Урон',
        type: 1,
        effects: [
            {type: C.EFFECT_HP, data: [-20]}
        ]
    },
];