import { Controller } from "./classes/controller";
import { Socket } from "dgram";
import { Player } from "./classes/player";

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const _ = require('lodash');

let controller = new Controller();
controller.test('asdf');

io.on('connection', function(socket: Socket){
    console.log('connect');
    let player: Player;
    //c.auth(socket); // Авторизация

    socket.on('tester', function(data){
        console.log(data);
        socket.emit('tester', 'fck yeah!');
    });

    socket.on('campaign.start', function(data) {
        console.log('campaign.start');
        player = new Player(socket, 'atata', 1); // TODO
        controller.startCampaign(player, data.heroes);
        socket.emit('campaign.data', 123);
    });

    socket.on('campaign.level_next', function() {
        console.log('campaign.level_next');
        let result = controller.nextLevel(player);
        socket.emit('campaign.level_data', 123); // TODO
    });

    socket.on('campaign.level_start', function() {
        console.log('campaign.level_start');
        controller.startBattle(player);
    });

    socket.on('battle.use_skill', function(data) { // {"skill_id":"1", "target_id":"0"}
        console.log('battle.use_skill');
        let result = controller.useSkillBattle(player, data.skill_id, data.target_id);
        console.log(result);
    });

    // socket.on('startcampaign', function() {
    //     //c.startcampaign(socket.player);
    //     socket.emit('heroes', heroes);
    // });

    // socket.on('startBattle', function() {
    //     c.startcampaign(socket.player);
    // });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});
