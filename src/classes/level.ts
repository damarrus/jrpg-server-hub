import { Enemy } from "./enemy";
import { Bot } from "./bot";

export class Level 
{
    id: number;
    type: number;
    effects: number;
    enemies: Array<Enemy>;

    constructor(id: number) 
    {
        let data = levels[id - 1];

        this.id = data.id;
        this.type = data.type;
        this.effects = data.effects;
        this.enemies = [];
        data.enemies.forEach((enemy_id: number) => {
            this.enemies.push(new Enemy(enemy_id));
        });
    }
}

let levels = [
    {
        id: 1, 
        type: 1, 
        enemies: [1, 2, 3],
        effects: 1
    }
];