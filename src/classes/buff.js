const C = require('../config.js');
const buffs = require('../data/buffs.js');

module.exports = class Buff 
{
    constructor(id) 
    {
        var data = buffs[id - 1];

        this.id = data.id;
        this.name = data.name;
        this.type = data.type;
        this.effects = data.effects;
    }

    useEffects(target) {
    
        this.effects.forEach(function(effect) {
            switch (effect.type) {
                case C.EFFECT_HP:
                
                    var hp;
                    if (effect.data.length == 1) {
                        hp = effect.data[0];
                    } else {
                        Math.floor(Math.random() * (effect.data[1] - effect.data[0])) + effect.data[0];
                    }
                    
                    return {type: 'hp', data: target.changeHP(hp)};
                default:
                    return false;
            }
        });
    }
}