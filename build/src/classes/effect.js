"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Effect {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
    useEffects(target) {
        switch (this.type) {
            case 1:
                let hp;
                if (typeof this.value == 'number') {
                    hp = this.value;
                }
                else {
                    hp = Math.floor(Math.random() * (this.value[1] - this.value[0])) + this.value[0];
                }
                if (target != null) {
                    let changed_hp = target.changeHP(hp);
                    return { type: 'hp', data: changed_hp };
                }
                return false;
            default:
                return false;
        }
    }
}
exports.Effect = Effect;
//# sourceMappingURL=effect.js.map