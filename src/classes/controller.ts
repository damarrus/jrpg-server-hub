import { Socket } from 'dgram';
import { Player } from './player';
import { Campaign } from './campaign';
import { Battle } from './battle';

export class Controller {
    players: Array<Player>;
    constructor() {
        this.players = [];
    }
    
    addPlayer(socket: Socket, name: string) {
        //let player: Player = new Player(socket, name, 1);
    }

    test(name: string) {
        console.log(name);
    }

    startCampaign(player: Player, heroes_ids: Array<number>) {
        let campaign = new Campaign(player, heroes_ids);
        player.campaign = campaign;
        return true;
    }

    nextLevel(player: Player) {
        if (player.campaign != null) {
            return player.campaign.startLevel();
        } else {
            return false;
        }
    }

    startBattle(player: Player) {
        if (player.campaign != null && player.campaign.level != null) {
            let battle = new Battle(player.campaign, player.campaign.level);
            player.battle = battle;
           
        } else {
            return false;
        }
    }

    useSkillBattle(player: Player, skill_key: number, target_id: number) {
        
        if (player.battle != null) {
            let result = [player.battle.useSkill(skill_key, target_id)];
            if (player.battle.isBotTurn()) {
                result.push(player.battle.useSkillBot());
            }
            return result;
        }
    }
}
 
