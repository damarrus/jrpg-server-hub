"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(socket, name, key) {
        this.socket = socket;
        this.key = key;
        this.name = name;
        this.campaign = null;
        this.battle = null;
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map