const C = require('../config.js');

module.exports = [
    {
        id: 1,
        name: 'Простой удар',
        type: 1,
        resourceType: 1,
        resourceCost: 10,
        target: C.TARGET_ENEMY,
        buffs: [1]
    },
    {
        id: 2,
        name: 'Мощный удар',
        type: 1,
        resourceType: 1,
        resourceCost: 20,
        target: C.TARGET_ENEMY,
        buffs: [2]
    },
];