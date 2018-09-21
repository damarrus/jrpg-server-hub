"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_1 = require("./hero");
const level_1 = require("./level");
class Campaign {
    constructor(player, heroes_ids) {
        this.player = player;
        this.heroes = [];
        this.level = null;
        heroes_ids.forEach((hero_id) => {
            this.heroes.push(new hero_1.Hero(hero_id));
        });
    }
    startLevel() {
        return this.level = new level_1.Level(1);
    }
}
exports.Campaign = Campaign;
//# sourceMappingURL=campaign.js.map