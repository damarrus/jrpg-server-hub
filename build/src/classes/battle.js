"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enemy_1 = require("./enemy");
const bot_1 = require("./bot");
class Battle {
    constructor(campaign, level) {
        this.heroes = campaign.heroes;
        this.enemies = level.enemies;
        this.effects = level.effects;
        this.turn_queue = [];
        this.bot = new bot_1.Bot(this);
        this.heroes.forEach((hero) => { this.turn_queue.push(hero); });
        this.enemies.forEach((enemy) => { this.turn_queue.push(enemy); });
        this.turn_queue.sort(this.initiativeSort);
    }
    useSkill(skill_key, target_id) {
        let target = null;
        if (target_id != 0) {
            if (target_id <= 3) {
                target = this.heroes[target_id - 1];
            }
            else {
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
        let change_initiative = 0;
        this.turn_queue.forEach((unit, i) => {
            if (i == 0) {
                change_initiative = unit.curInit;
                unit.curInit = unit.maxInit;
            }
            else {
                unit.curInit -= change_initiative;
            }
        });
        this.turn_queue.sort(this.initiativeSort);
    }
    initiativeSort(a, b) {
        if (a.curInit > b.curInit) {
            return 1;
        }
        else if (a.curInit < b.curInit) {
            return -1;
        }
        else {
            return 1;
        }
    }
    isBotTurn() {
        return this.turn_queue[0] instanceof enemy_1.Enemy;
    }
}
exports.Battle = Battle;
//# sourceMappingURL=battle.js.map