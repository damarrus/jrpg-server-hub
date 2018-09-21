"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enemy_1 = require("./enemy");
class Level {
    constructor(id) {
        let data = levels[id - 1];
        this.id = data.id;
        this.type = data.type;
        this.effects = data.effects;
        this.enemies = [];
        data.enemies.forEach((enemy_id) => {
            this.enemies.push(new enemy_1.Enemy(enemy_id));
        });
    }
}
exports.Level = Level;
let levels = [
    {
        id: 1,
        type: 1,
        enemies: [1, 2, 3],
        effects: 1
    }
];
//# sourceMappingURL=level.js.map