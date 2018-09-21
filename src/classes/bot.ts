import { Battle } from "./battle";


export class Bot 
{
    battle: Battle;
    
    constructor(battle: Battle) 
    {
        this.battle = battle;
    }

    selectSkill() {
        return {skill_key: 1, target_id: 1};
    }


}