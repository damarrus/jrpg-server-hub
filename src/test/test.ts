var should = require('should');
var io = require('socket.io-client');

var socketURL = 'http://localhost:3000';

var options ={
  transports: ['websocket'],
  'force new connection': true
};

var chatUser1 = {'name':'Tom'};

describe("Chat Server",function(){

});

it('Should broadcast new user to all users', function(done: any){
    var client = io.connect(socketURL, options);
  
    client.on('connect', function(data: any){
        client.emit('campaign.start', {heroes: [1, 2, 3]});
    });

    client.on('campaign.data', function(data: any){
        client.emit('campaign.level_next');
    });

    client.on('campaign.level_data', function(data: any){
        console.log(data);
        client.emit('campaign.level_start');
        setTimeout(() => {
            client.emit('battle.use_skill', {skill_id: 1, target_id: 4});
            done();
        }, 500);
        
    });

    client.on('campaign.level_data', function(data: any){
        console.log(data);
        
        
    });
  
});