import { Hero } from "./hero";
import { Enemy } from "./enemy";
import { Unit } from "./unit";
import { Campaign } from "./campaign";
import { Level } from "./level";
import { Bot } from "./bot";

export class Battle 
{
    heroes: Array<Hero>;
    enemies: Array<Enemy>;
    effects: number;
    turn_queue: Array<Unit>;
    bot: Bot;

    constructor(campaign: Campaign, level: Level) 
    {
        this.heroes = campaign.heroes;
        this.enemies = level.enemies;
        this.effects = level.effects;
        this.turn_queue = [];
        this.bot = new Bot(this);

        this.heroes.forEach((hero) => {this.turn_queue.push(hero);});
        this.enemies.forEach((enemy) => {this.turn_queue.push(enemy);});

        this.turn_queue.sort(this.initiativeSort);
    }

    useSkill(skill_key: number, target_id: number) 
    {
        let target: Hero | Enemy | null = null;
        if (target_id != 0) {
            if (target_id <= 3) {
                target = this.heroes[target_id - 1];
            } else {
                target = this.enemies[target_id - 4];
            }
        }
        
        let result = this.turn_queue[0].useSkill(skill_key, target);

        this.nextTurn();
        return result;
    }

    useSkillBot() {
        let skill_target = this.bot.selectSkill();
        let result = this.useSkill(skill_target.skill_key, skill_target.target_id);
        return result;
    }

    nextTurn() {
        let change_initiative: number = 0;
        this.turn_queue.forEach((unit: Unit, i: number) => {
            if (i == 0) {
                change_initiative = unit.curInit;
                unit.curInit = unit.maxInit;
            } else {
                unit.curInit -= change_initiative;
            }
        });

        this.turn_queue.sort(this.initiativeSort);
    }

    initiativeSort(a: Unit, b: Unit) {
        if (a.curInit > b.curInit) {
            return 1;
        } else if (a.curInit < b.curInit) {
            return -1;
        } else {
            return 1;
        }
    }

    isBotTurn() {
        return this.turn_queue[0] instanceof Enemy;
    }
}

