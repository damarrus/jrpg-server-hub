import { Socket } from "dgram";
import { Campaign } from "./campaign";
import { Battle } from "./battle";

export class Player 
{
    socket: Socket;
    key: number;
    name: string;
    campaign: Campaign | null;
    battle: Battle | null;
    
    constructor(socket: Socket, name: string, key: number) 
    {
        this.socket = socket;
        this.key = key;
        this.name = name;
        this.campaign = null;
        this.battle = null;
    }
}