import { Skill } from "./skill";
import { Hero } from "./hero";
import { Enemy } from "./enemy";

export class Unit 
{
    key: number | null;
    id: number;
    name: string;
    resourceType: number;
    maxResource: number;
    curResource: number;
    maxHP: number;
    curHP: number;
    initiative: number;
    armor: number;
    level: number;
    critChance: number;
    critRate: number;
    skills: Array<Skill>;
    maxInit: number;
    curInit: number;

    constructor(id: number, type: number) 
    {
        let data;
        if (type == 1) {
            data = heroes[id - 1];
        } else {
            data = enemies[id - 1];
        }

        this.key = null;
        this.id = data.id;
        this.name = data.name;
        this.resourceType = data.resourceType;
        this.maxResource = data.maxResource;
        this.curResource = data.curResource;
        this.maxHP = data.maxHP;
        this.curHP = data.maxHP;
        this.initiative = data.initiative;
        this.maxInit = Math.round(100 / this.initiative * 100) / 100;
        this.curInit = this.maxInit;
        this.armor = data.armor;
        this.level = 1;
        this.critChance = data.critChance;
        this.critRate = data.critRate;

        this.skills = [];
        data.skills.forEach((skill_id, skill_key) => {
            this.skills.push(new Skill(skill_id, skill_key, this));
        });
    }

    useSkill(skill_key: number, target: Hero | Enemy | null) {
        let skill = this.skills[skill_key - 1];
        return skill.use(target);
    }

    changeHP(hp: number) {
        let changed_hp: number = hp;
        if (hp < 0) {
            changed_hp += this.armor;
        } 

        this.curHP += changed_hp;
        return changed_hp;
    }
}

let heroes = [
    {
        id: 1,
        name: 'Царь',
        resourceType: 1,
        maxResource: 100,
        curResource: 100,
        maxHP: 100,
        skills: [1, 2],
        initiative: 20,
        armor: 1,
        critChance: 0,
        critRate: 0
    },
    {
        id: 2,
        name: 'Васёк',
        resourceType: 1,
        maxResource: 100,
        curResource: 100,
        maxHP: 70,
        skills: [1, 2],
        initiative: 30,
        armor: 1,
        critChance: 0,
        critRate: 0
    },
    {
        id: 3,
        name: 'Баба Дизель',
        resourceType: 1,
        maxResource: 100,
        curResource: 100,
        maxHP: 150,
        skills: [1, 2],
        initiative: 10,
        armor: 1,
        critChance: 0,
        critRate: 0
    },
];

let enemies = [
    {
        id: 1,
        name: 'Упырь',
        resourceType: 1,
        maxResource: 100,
        curResource: 100,
        maxHP: 100,
        skills: [1, 2],
        initiative: 25,
        armor: 1,
        critChance: 0,
        critRate: 0
    },
    {
        id: 2,
        name: 'Леший',
        resourceType: 1,
        maxResource: 100,
        curResource: 100,
        maxHP: 70,
        skills: [1, 2],
        initiative: 15,
        armor: 1,
        critChance: 0,
        critRate: 0
    },
    {
        id: 3,
        name: 'Злая лягушка',
        resourceType: 1,
        maxResource: 100,
        curResource: 100,
        maxHP: 150,
        skills: [1, 2],
        initiative: 5,
        armor: 1,
        critChance: 0,
        critRate: 0
    },
];