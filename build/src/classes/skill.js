"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effect_1 = require("./effect");
class Skill {
    constructor(id, key, unit) {
        let data = skills[id - 1];
        this.unit = unit;
        this.key = key;
        this.id = data.id;
        this.name = data.name;
        this.resourceType = data.resourceType;
        this.resourceCost = data.resourceCost;
        this.target = data.target;
        this.effects = [];
        data.effects.forEach((effect) => {
            this.effects.push(new effect_1.Effect(effect.type, effect.value));
        });
    }
    use(target) {
        let result;
        switch (this.target) {
            case 1:
                result = this.effects[0].useEffects(target);
                break;
        }
        if (target != null) {
            result.unit = target.name;
            result.hp = target.curHP;
        }
        return result;
    }
}
exports.Skill = Skill;
let skills = [
    {
        id: 1,
        name: 'Простой удар',
        type: 1,
        resourceType: 1,
        resourceCost: 10,
        target: 1,
        effects: [
            { type: 1, value: -10 }
        ]
    },
    {
        id: 2,
        name: 'Мощный удар',
        type: 1,
        resourceType: 1,
        resourceCost: 20,
        target: 1,
        effects: [
            { type: 1, value: -20 }
        ]
    },
];
//# sourceMappingURL=skill.js.map