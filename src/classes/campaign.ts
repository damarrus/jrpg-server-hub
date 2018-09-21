import { Player } from "./player";
import { Hero } from "./hero";
import { Level } from "./level";

export class Campaign 
{
    player: Player;
    heroes: Array<Hero>;
    level: Level | null;

    constructor(player: Player, heroes_ids: Array<number>)
    {
        this.player = player;
        this.heroes = [];
        this.level = null;
        heroes_ids.forEach((hero_id) => {
            this.heroes.push(new Hero(hero_id));
        });
    }

    startLevel() {
        return this.level = new Level(1);
    }
}