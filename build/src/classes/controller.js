"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const campaign_1 = require("./campaign");
const battle_1 = require("./battle");
class Controller {
    constructor() {
        this.players = [];
    }
    addPlayer(socket, name) {
        //let player: Player = new Player(socket, name, 1);
    }
    test(name) {
        console.log(name);
    }
    startCampaign(player, heroes_ids) {
        let campaign = new campaign_1.Campaign(player, heroes_ids);
        player.campaign = campaign;
        return true;
    }
    nextLevel(player) {
        if (player.campaign != null) {
            return player.campaign.startLevel();
        }
        else {
            return false;
        }
    }
    startBattle(player) {
        if (player.campaign != null && player.campaign.level != null) {
            let battle = new battle_1.Battle(player.campaign, player.campaign.level);
            player.battle = battle;
        }
        else {
            return false;
        }
    }
    useSkillBattle(player, skill_key, target_id) {
        if (player.battle != null) {
            let result = [player.battle.useSkill(skill_key, target_id)];
            if (player.battle.isBotTurn()) {
                result.push(player.battle.useSkillBot());
            }
            return result;
        }
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map