import { Effect } from "./effect";
import { Hero } from "./hero";
import { Enemy } from "./enemy";

export class Skill 
{
    unit: Hero | Enemy;
    key: number;
    id: number;
    name: string;
    resourceType: number;
    resourceCost: number;
    target: number;
    effects: Array<Effect>;
    constructor(id: number, key: number, unit: Hero | Enemy) 
    {
        let data = skills[id - 1]

        this.unit = unit;
        this.key = key;
        this.id = data.id;
        this.name = data.name;
        this.resourceType = data.resourceType;
        this.resourceCost = data.resourceCost;
        this.target = data.target;
        this.effects = [];
        data.effects.forEach((effect) => {
            this.effects.push(new Effect(effect.type, effect.value));
        });
    }

    use(target: Hero | Enemy | null) {
        let result: any;
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

let skills = [
    {
        id: 1,
        name: 'Простой удар',
        type: 1,
        resourceType: 1,
        resourceCost: 10,
        target: 1,
        effects: [
            {type: 1, value: -10}
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
            {type: 1, value: -20}
        ]
    },
];