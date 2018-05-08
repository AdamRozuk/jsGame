
var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update,render: render});


function preload() {

    game.load.spritesheet('phaser', 'assets/ship5.png',97,110);
    game.load.image('bullet', 'assets/bullet.png');
    game.load.image('veggies', 'assets/player.png');
    game.load.image('chicken', 'assets/carrot.png');
    game.load.image('boom', 'assets/muzzleflash7.png');
    game.load.image('orbblue', 'assets/orb-blue.png');
    game.load.image('orbgreen', 'assets/orb-green.png');
    game.load.image('orbred', 'assets/orb-red.png');
    game.load.image('yellowball', 'assets/yellow_ball.png');
    game.load.image('turret', 'assets/turret.png');

}

var sprite;
var bullets;
var veggies;
var cursors;
var chicken;
var orbred;
var orbgreen;
var orbblue;
var yellowball;
var turret;
var turret2;
var ch;
var ch2;
var ch3;
var ch4;
var ch5;
var ch6;
var ch7;
var ch8;
var ch9;
var ch10;
var ch11;
var ch12;
var ch13;
var ch14;
var ch15;
var ch16;
var ch17;
var ch18;
var ch19;
var ch20;
var veg_num = 0;
var boom;
var bulletTime = 0;
var bullet;
var points = 0;
var marchewka =0;
var red =0;
var blue =0;
var green =0;
var yellow =0;
var grav_x=0;
var grav_y=0;
var counter=0;
var time_shot=0;
var time_shot2=0;
var bulett_shoted_yellow=0;
var tmp;

function create() {
    
    points = 0;
    grav_y=0;
    grav_x=0;
    veg_num =0;
    
    game.scale.pageAlignHorizontally = true;
    

    veggies = game.add.group();
    veggies.enableBody = true;
    veggies.physicsBodyType = Phaser.Physics.ARCADE;

    turret = game.add.group();
    turret.enableBody = true;
    turret.physicsBodyType = Phaser.Physics.ARCADE;


    var t1 = game.add.sprite(0,100, 'turret');
    game.physics.enable(t1, Phaser.Physics.ARCADE);


    var t2 = game.add.sprite(800,132, 'turret');
    game.physics.enable(t1, Phaser.Physics.ARCADE);
    t2.angle = 180;         

    game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);
    
    


    for (var i = 0; i < 20; i++)
    {   
        var rand_x=Math.random() * 800;
        if(rand_x>775){rand_x=775;}
        else if(rand_x<25){rand_x=25;}

        var rand_y=Math.random() * 390;
        if(rand_y>680){rand_y=680;}

        var rand_time_shot=Math.random()*5;
        var c = veggies.create(rand_x, Math.random() * 390, 'veggies');
        c.name = 'veg' + i;        
        veg_num ++;

        //c.body.moves = flase;
        //c.body.immovable = true;
    }

    
    game.add.tween(veggies).to( { x: -60 }, 1000, Phaser.Easing.Linear.None, true, 0, -1, true);

    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    for (var i = 0; i < 4; i++)
    {
        var b = bullets.create(0, 0, 'bullet');
        b.name = 'bullet' + i;
        b.exists = false;
        b.checkWorldBounds = true;
        b.events.onOutOfBounds.add(resetBullet, this);
    }



    sprite = game.add.sprite(400, 555, 'phaser');
    game.physics.enable(sprite, Phaser.Physics.ARCADE);
    sprite.scale.setTo(0.5);
    sprite.body.collideWorldBounds = true;
    sprite.body.setSize(57,70,20,8);
    sprite.body.bounce.set(0.2);


    anim = sprite.animations.add('fly');


    sprite.animations.add('anima',[0,1,2,3],18,true);
    sprite.animations.add('anima_stop',[0],1,true);
    
    //sprite.animations.play('fly', 10, true);
    //
    
    ch = game.add.group();
    ch.enableBody = true;
    ch.physicsBodyType = Phaser.Physics.ARCADE;

    ch2 = game.add.group();
    ch2.enableBody = true;
    ch2.physicsBodyType = Phaser.Physics.ARCADE;

    ch3 = game.add.group();
    ch3.enableBody = true;
    ch3.physicsBodyType = Phaser.Physics.ARCADE;

    ch4 = game.add.group();
    ch4.enableBody = true;
    ch4.physicsBodyType = Phaser.Physics.ARCADE;

    ch5 = game.add.group();
    ch5.enableBody = true;
    ch5.physicsBodyType = Phaser.Physics.ARCADE;

    ch6 = game.add.group();
    ch6.enableBody = true;
    ch6.physicsBodyType = Phaser.Physics.ARCADE;

    ch7 = game.add.group();
    ch7.enableBody = true;
    ch7.physicsBodyType = Phaser.Physics.ARCADE;

    ch8 = game.add.group();
    ch8.enableBody = true;
    ch8.physicsBodyType = Phaser.Physics.ARCADE;

    ch9 = game.add.group();
    ch9.enableBody = true;
    ch9.physicsBodyType = Phaser.Physics.ARCADE;

    ch10 = game.add.group();
    ch10.enableBody = true;
    ch10.physicsBodyType = Phaser.Physics.ARCADE;

    ch11 = game.add.group();
    ch11.enableBody = true;
    ch11.physicsBodyType = Phaser.Physics.ARCADE;

    ch12 = game.add.group();
    ch12.enableBody = true;
    ch12.physicsBodyType = Phaser.Physics.ARCADE;

    ch13 = game.add.group();
    ch13.enableBody = true;
    ch13.physicsBodyType = Phaser.Physics.ARCADE;
        
    ch14 = game.add.group();
    ch14.enableBody = true;
    ch14.physicsBodyType = Phaser.Physics.ARCADE;

    ch15 = game.add.group();
    ch15.enableBody = true;
    ch15.physicsBodyType = Phaser.Physics.ARCADE;

    ch16 = game.add.group();
    ch16.enableBody = true;
    ch16.physicsBodyType = Phaser.Physics.ARCADE;

    ch17 = game.add.group();
    ch17.enableBody = true;
    ch17.physicsBodyType = Phaser.Physics.ARCADE;
    
    ch18 = game.add.group();
    ch18.enableBody = true;
    ch18.physicsBodyType = Phaser.Physics.ARCADE;
    
    ch19 = game.add.group();
    ch19.enableBody = true;
    ch19.physicsBodyType = Phaser.Physics.ARCADE;

    ch20 = game.add.group();
    ch20.enableBody = true;
    ch20.physicsBodyType = Phaser.Physics.ARCADE;
    


    //game.physics.enable(chicken, Phaser.Physics.ARCADE);
    //chicken.physicsBodyType = Phaser.Physics.ARCADE;

    cursors = game.input.keyboard.createCursorKeys();
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);

    winString ='You win, Congratulation :)\nYour points: ';
    loseString ='You broke a ship :/\nYour points: ';
    

    gameoverText = game.add.text(game.world.centerX, 70,loseString + points,
        { font: "40px Arial", fill: "#ffff", align: "center"});
    gameOverPointsText = game.add.text(game.world.centerX, 70,winString + points,
        { font: "40px Arial", fill: "#ffff", align: "center"});

    restartText = game.add.text(game.world.centerX, 500,"Click on the screen to restart a game ...",
        { font: "40px Arial", fill: "#ffff", align: "center"});

   
    gameoverText.anchor.setTo(0.5, 0.5);
    gameOverPointsText.anchor.setTo(0.5, 0.5);
    restartText.anchor.setTo(0.5, 0.5);
    gameoverText.visible = false;
    gameOverPointsText.visible = false;
    restartText.visible = false;

    scoreString = 'Score : ';
    scoreText = game.add.text(10, 10, scoreString + points, { font: '34px Arial', fill: '#fff' });

    function updateCounter() {
    counter++;
    }

}

function update() {

  

    //  As we don't need to exchange any velocities or motion we can the 'overlap' check instead of 'collide'
    game.physics.arcade.overlap(bullets, veggies, collisionHandler, null, this);
    game.physics.arcade.collide(sprite, veggies, collisionHandler_ship_veg , null, this);
    game.physics.arcade.collide(sprite, ch, collisionHandler_ship_ch , null, this);
    game.physics.arcade.collide(sprite, ch2, collisionHandler_ship_ch2 , null, this);
    game.physics.arcade.collide(sprite, ch3, collisionHandler_ship_ch3 , null, this);
    game.physics.arcade.collide(sprite, ch4, collisionHandler_ship_ch4 , null, this);
    game.physics.arcade.collide(sprite, ch5, collisionHandler_ship_ch5 , null, this);
    game.physics.arcade.collide(sprite, ch6, collisionHandler_ship_ch6 , null, this);
    game.physics.arcade.collide(sprite, ch7, collisionHandler_ship_ch7 , null, this);
    game.physics.arcade.collide(sprite, ch8, collisionHandler_ship_ch8 , null, this);
    game.physics.arcade.collide(sprite, ch9, collisionHandler_ship_ch9 , null, this);
    game.physics.arcade.collide(sprite, ch10, collisionHandler_ship_ch10 , null, this);
    game.physics.arcade.collide(sprite, ch11, collisionHandler_ship_ch11 , null, this);
    game.physics.arcade.collide(sprite, ch12, collisionHandler_ship_ch12 , null, this);
    game.physics.arcade.collide(sprite, ch13, collisionHandler_ship_ch13 , null, this);
    game.physics.arcade.collide(sprite, ch14, collisionHandler_ship_ch14 , null, this);
    game.physics.arcade.collide(sprite, ch15, collisionHandler_ship_ch15 , null, this);
    game.physics.arcade.collide(sprite, ch16, collisionHandler_ship_ch16 , null, this);
    game.physics.arcade.collide(sprite, ch17, collisionHandler_ship_ch17 , null, this);
    game.physics.arcade.collide(sprite, ch18, collisionHandler_ship_ch18 , null, this);
    game.physics.arcade.collide(sprite, ch19, collisionHandler_ship_ch19 , null, this);
    game.physics.arcade.collide(sprite, ch20, collisionHandler_ship_ch20 , null, this);

     //pointsText = game.add.text(game.world.centerX, 80,points,
    //  { font: "20px Arial", fill: "#ffff", align: "center"});
    //  


    sprite.body.velocity.x = grav_x;
    sprite.body.velocity.y = grav_y;

    if (cursors.left.isDown)
    {
        sprite.angle += -0.25;
        sprite.body.velocity.x = -300;
        sprite.animations.stop('anima_stop');
        sprite.animations.play('anima');
    }
    else if (cursors.right.isDown)
    {
        sprite.angle += 0.25;
        sprite.body.velocity.x = +300;
        sprite.animations.stop('anima_stop');
        sprite.animations.play('anima');
    }
    else if (cursors.up.isDown)
    {
        sprite.angle = 0;
        sprite.body.velocity.y = -300;
        sprite.animations.stop('anima_stop');
        sprite.animations.play('anima');
    }
    else if (cursors.down.isDown)
    {
        sprite.angle = 0;
        sprite.body.velocity.y = +300;
        sprite.animations.stop('anima_stop');
        sprite.animations.play('anima');
    }
    else{
        sprite.angle = 0;
        sprite.animations.stop('anima');
        sprite.animations.play('anima_stop');

    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
        fireBullet();
    }

    if (game.input.activePointer.withinGame)
    {
        game.input.enabled = true;
        game.stage.backgroundColor = '#2d2d2d';
    }
    else
    {
        game.input.enabled = false;
        game.stage.backgroundColor = '#731111';                
}
    
    if(game.time.now===time_shot){
        tmp=true;
        enemy_shoting(tmp);
    }
    if(game.time.now===time_shot2){
        tmp=false;
        enemy_shoting(tmp);
    }

}

function enemy_shoting(tmp){
    if(yellow===0){
        if(tmp===true){
            ch13 = game.add.sprite(50, 116, 'yellowball');
        }
        else if(tmp===false){
            ch13 = game.add.sprite(750,116, 'yellowball');
        }
        game.physics.enable(ch13, Phaser.Physics.ARCADE);
        game.physics.arcade.moveToObject(ch13,sprite,250);
        ch13.checkWorldBounds = true;        
        ch13.events.onOutOfBounds.add(resetChicken, this); 
        yellow++;
    }
    else if(yellow===1){
        if(tmp===true){
            ch14 = game.add.sprite(50, 116, 'yellowball');
        }
        else if(tmp===false){
            ch14 = game.add.sprite(750,116, 'yellowball');
        }
        game.physics.enable(ch14, Phaser.Physics.ARCADE);
        game.physics.arcade.moveToObject(ch14,sprite,250);
        ch14.checkWorldBounds = true;        
        ch14.events.onOutOfBounds.add(resetChicken, this);
        yellow++;
    }
    else if(yellow===2){
            if(tmp===true){
            ch15 = game.add.sprite(50, 116,'yellowball');
        }
        else if(tmp===false){
            ch15 = game.add.sprite(750,116, 'yellowball');
        }
        game.physics.enable(ch15, Phaser.Physics.ARCADE);
        game.physics.arcade.moveToObject(ch15,sprite,250);
        ch15.checkWorldBounds = true;        
        ch15.events.onOutOfBounds.add(resetChicken, this);
        yellow++;
    }
        else if(yellow===3){
            if(tmp===true){
            ch16 = game.add.sprite(50, 116,'yellowball');
        }
        else if(tmp===false){
            ch16 = game.add.sprite(750,116, 'yellowball');
        }
        game.physics.enable(ch16, Phaser.Physics.ARCADE);
        game.physics.arcade.moveToObject(ch16,sprite,250);
        ch16.checkWorldBounds = true;        
        ch16.events.onOutOfBounds.add(resetChicken, this);
        yellow++;
    }
        else if(yellow===4){
                if(tmp===true){
        ch17 = game.add.sprite(50, 116, 'yellowball');
        }
        else if(tmp===false){
            ch17 = game.add.sprite(750,116, 'yellowball');
        }
        game.physics.enable(ch17, Phaser.Physics.ARCADE);
        game.physics.arcade.moveToObject(ch17,sprite,250);
        ch17.checkWorldBounds = true;        
        ch17.events.onOutOfBounds.add(resetChicken, this);
        yellow++;
    }
        else if(yellow===5){
                    if(tmp===true){
        ch18 = game.add.sprite(50, 116, 'yellowball');
        }
        else if(tmp===false){
            ch18 = game.add.sprite(750,116, 'yellowball');
        }
        game.physics.enable(ch18, Phaser.Physics.ARCADE);
        game.physics.arcade.moveToObject(ch18,sprite,250);
        ch18.checkWorldBounds = true;        
        ch18.events.onOutOfBounds.add(resetChicken, this);
        yellow++;
    }
        else if(yellow===6){
                    if(tmp===true){
        ch19 = game.add.sprite(50, 116,'yellowball');
        }
        else if(tmp===false){
            ch19 = game.add.sprite(750,116, 'yellowball');
        }
        game.physics.enable(ch19, Phaser.Physics.ARCADE);
        game.physics.arcade.moveToObject(ch19,sprite,250);
        ch19.checkWorldBounds = true;        
        ch19.events.onOutOfBounds.add(resetChicken, this);
        yellow++;
    }
        else if(yellow===7){
                    if(tmp===true){
        ch20 = game.add.sprite(50, 116, 'yellowball');
        }
        else if(tmp===false){
            ch20 = game.add.sprite(750,116, 'yellowball');
        }
        game.physics.enable(ch20, Phaser.Physics.ARCADE);
        game.physics.arcade.moveToObject(ch20,sprite,250);
        ch20.checkWorldBounds = true;        
        ch20.events.onOutOfBounds.add(resetChicken, this);
        yellow=0;
    }
}

function fireBullet () {

    if (game.time.now > bulletTime)
    {
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            bullet.reset(sprite.x +20, sprite.y -15);
            bullet.body.velocity.y = -380;
            bulletTime = game.time.now + 150;
            bulett_shoted_yellow++;
            if(bulett_shoted_yellow>=2){
               time_shot = game.time.now +200;
               bulett_shoted_yellow=0; 
            }
        }
    }

}

//  Called if the bullet goes out of the screen
function resetBullet (bullet) {
    bullet.kill();
}

function resetChicken (chicken) {
    time_shot = game.time.now +200;
    chicken.kill();
}
//  Called if the bullet hits one of the veg sprites
function collisionHandler (bullet, veg) {
    time_shot2 = game.time.now +250;
    bullet.kill();
    if(veg.kill()){
        //var ch = chicken.create('chicken');
        //var ch = game.add.sprite(200, 200, 'chicken');
        veg_num --;

        //var ch = chickens.create(rand_xo, rand_xo, 'chicken');
        var rand_xo=Math.random() * 800;
        if(rand_xo>775){rand_xo=775;}
        else if(rand_xo<25){rand_xo=25;}

        var x = Math.random() * 20;
        
        if(x<8)
        {
            if(marchewka===0){
        ch = game.add.sprite(rand_xo, Math.random() * 200, 'chicken');
        game.physics.enable(ch, Phaser.Physics.ARCADE);
        ch.body.velocity.y = +150;
        ch.checkWorldBounds = true;        
        ch.events.onOutOfBounds.add(resetChicken, this);
        marchewka++;
            }
            else if(marchewka===1){
        ch2 = game.add.sprite(rand_xo, Math.random() * 200, 'chicken');
        game.physics.enable(ch2, Phaser.Physics.ARCADE);
        ch2.body.velocity.y = +150;
        ch2.checkWorldBounds = true;        
        ch2.events.onOutOfBounds.add(resetChicken, this);
        marchewka++;
            }
             else if(marchewka===2){
        ch3 = game.add.sprite(rand_xo, Math.random() * 200, 'chicken');
        game.physics.enable(ch3, Phaser.Physics.ARCADE);
        ch3.body.velocity.y = +150;
        ch3.checkWorldBounds = true;        
        ch3.events.onOutOfBounds.add(resetChicken, this); 
        marchewka++;
            }
            else if(marchewka===3){
        ch4 = game.add.sprite(rand_xo, Math.random() * 200, 'chicken');
        game.physics.enable(ch4, Phaser.Physics.ARCADE);
        ch4.body.velocity.y = +150;
        ch4.checkWorldBounds = true;        
        ch4.events.onOutOfBounds.add(resetChicken, this); 
        marchewka=0;
            }
        }

        else if(x>=8 && x<10)
        {
            if(green===0){
        ch5 = game.add.sprite(rand_xo, Math.random() * 200, 'orbgreen');
        game.physics.enable(ch5, Phaser.Physics.ARCADE);
        ch5.body.velocity.y = +150;
        ch5.checkWorldBounds = true;        
        ch5.events.onOutOfBounds.add(resetChicken, this);
        green++; 
            }
            else if(green===1){
        ch6 = game.add.sprite(rand_xo, Math.random() * 200, 'orbgreen');
        game.physics.enable(ch6, Phaser.Physics.ARCADE);
        ch6.body.velocity.y = +150;
        ch6.checkWorldBounds = true;        
        ch6.events.onOutOfBounds.add(resetChicken, this);
        green=0; 
            }
        }

        else if(x>=10 && x<12)
        {
            if(blue===0){
        ch7 = game.add.sprite(rand_xo, Math.random() * 200, 'orbblue');
        game.physics.enable(ch7, Phaser.Physics.ARCADE);
        ch7.body.velocity.y = +150;
        ch7.checkWorldBounds = true;        
        ch7.events.onOutOfBounds.add(resetChicken, this);
        blue++;
            }
            else if(blue===1){
        ch8 = game.add.sprite(rand_xo, Math.random() * 200, 'orbblue');
        game.physics.enable(ch8, Phaser.Physics.ARCADE);
        ch8.body.velocity.y = +150;
        ch8.checkWorldBounds = true;        
        ch8.events.onOutOfBounds.add(resetChicken, this);
        blue=0;        
            }
        }
        else
        {
            if(red===0){
        ch9 = game.add.sprite(rand_xo, Math.random() * 200, 'orbred');
        game.physics.enable(ch9, Phaser.Physics.ARCADE);
        ch9.body.velocity.y = +150;
        ch9.checkWorldBounds = true;        
        ch9.events.onOutOfBounds.add(resetChicken, this);
        ch9.body.setSize(16,16,3,3);
        red++; 
            }
            else if(red===1){
        ch10 = game.add.sprite(rand_xo, Math.random() * 200, 'orbred');
        game.physics.enable(ch10, Phaser.Physics.ARCADE);
        ch10.body.velocity.y = +150;
        ch10.checkWorldBounds = true;        
        ch10.events.onOutOfBounds.add(resetChicken, this); 
        ch10.body.setSize(16,16,3,3);
        red++;  
        }
            else if(red===2){
        ch11 = game.add.sprite(rand_xo, Math.random() * 200, 'orbred');
        game.physics.enable(ch11, Phaser.Physics.ARCADE);
        ch11.body.velocity.y = +150;
        ch11.checkWorldBounds = true;        
        ch11.events.onOutOfBounds.add(resetChicken, this);
        ch11.body.setSize(16,16,3,3);
        red++;  
            }
            else if(red===3){
        ch12 = game.add.sprite(rand_xo, Math.random() * 200, 'orbred');
        game.physics.enable(ch12, Phaser.Physics.ARCADE);
        ch12.body.velocity.y = +150;
        ch12.checkWorldBounds = true;        
        ch12.events.onOutOfBounds.add(resetChicken, this); 
        ch12.body.setSize(16,16,3,3);
        red=0;  
            }
    }

        if(veg_num==0){
        //alert("You win bro :)\nYour points: "+points);
        gameOverPointsText.visible = true;
        restartText.visible = true;
        veg_num--;
        game.input.onTap.addOnce(restart,this);
        
    }

    }
}

function collisionHandler_ship_veg (sprite, veg) {
    sprite.kill();
    veg.kill();
    boomm = game.add.sprite(80, 0, 'boom');
    boomm.scale.setTo(5);
    shipLost();
    }

function collisionHandler_ship_ch(sprite, ch){
    //ch.events.onOutOfBounds.add(resetChicken, this); 
    //mozna wtedy przesuwac kurczaka , mozliwe wykorzystanie do :
    //przesuniety obiekt leci w przeciwnym kierunku do przesuwania , moze niszczyc wrogie statki
    resetChicken(ch);
    points++;
    scoreText.text = scoreString + points;
    gameOverPointsText.text= winString + points;
    gameoverText.text=loseString + points;
}

function collisionHandler_ship_ch2(sprite, ch2){

    ch2.kill();
    points++;
    scoreText.text = scoreString + points;
    gameOverPointsText.text= winString + points;
    gameoverText.text=loseString + points;
}
function collisionHandler_ship_ch3(sprite, ch3){
    time_shot = game.time.now +200;
    ch3.kill();
    points++;
    scoreText.text = scoreString + points;
    gameOverPointsText.text= winString + points;
    gameoverText.text=loseString + points;
}
function collisionHandler_ship_ch4(sprite, ch4){
    time_shot = game.time.now +200;
    ch4.kill();
    points++;
    scoreText.text = scoreString + points;
    gameOverPointsText.text= winString + points;
    gameoverText.text=loseString + points;
}
function collisionHandler_ship_ch5(sprite, ch5){
    ch5.kill();
    grav_y+=70;
    time_shot = game.time.now +250;
    //game.physics.arcade.gravity.y = 25;
    points+=10;
    scoreText.text = scoreString + points;
    gameOverPointsText.text= winString + points;
    gameoverText.text=loseString + points;
}
function collisionHandler_ship_ch6(sprite, ch6){
    ch6.kill();
    grav_y+=70;
    time_shot = game.time.now +200;
    //game.physics.arcade.gravity.y = 25;
    points+=10;
    scoreText.text = scoreString + points;
    gameOverPointsText.text= winString + points;
    gameoverText.text=loseString + points;
}
function collisionHandler_ship_ch7(sprite, ch7){
    ch7.kill();
    grav_x+=70;
    time_shot = game.time.now +250;
    points+=10;
    scoreText.text = scoreString + points;
    gameOverPointsText.text= winString + points;
    gameoverText.text=loseString + points;
}
function collisionHandler_ship_ch8(sprite, ch8){
    ch8.kill();
    grav_x+=70;
    points+=10;
    scoreText.text = scoreString + points;
    gameOverPointsText.text= winString + points;
    gameoverText.text=loseString + points;
    time_shot = game.time.now +250;
}
function collisionHandler_ship_ch9(sprite, ch9){
    ch9.kill();
    sprite.kill();
    boomm = game.add.sprite(80, 0, 'boom');
    boomm.scale.setTo(5);
    shipLost();
}
function collisionHandler_ship_ch10(sprite, ch10){
    ch10.kill();
    sprite.kill();
    boomm = game.add.sprite(80, 0, 'boom');
    boomm.scale.setTo(5);
    shipLost();
}
function collisionHandler_ship_ch11(sprite, ch11){
    ch11.kill();
    sprite.kill();
    boomm = game.add.sprite(80, 0, 'boom');
    boomm.scale.setTo(5);
    shipLost();
}
function collisionHandler_ship_ch12(sprite, ch12){
    ch12.kill();
    sprite.kill();
    boomm = game.add.sprite(80, 0, 'boom');
    boomm.scale.setTo(5);
    shipLost();
}
function collisionHandler_ship_ch13(sprite, ch13){
    ch13.kill();
    sprite.kill();
    boomm = game.add.sprite(80, 0, 'boom');
    boomm.scale.setTo(5);
    shipLost();
}
function collisionHandler_ship_ch14(sprite, ch14){
    ch14.kill();
    sprite.kill();
    boomm = game.add.sprite(80, 0, 'boom');
    boomm.scale.setTo(5);
    shipLost();
}
function collisionHandler_ship_ch15(sprite, ch15){
    ch15.kill();
    sprite.kill();
    boomm = game.add.sprite(80, 0, 'boom');
    boomm.scale.setTo(5);
    shipLost();
}
function collisionHandler_ship_ch16(sprite, ch16){
    ch16.kill();
    sprite.kill();
    boomm = game.add.sprite(80, 0, 'boom');
    boomm.scale.setTo(5);
    shipLost();
}
function collisionHandler_ship_ch17(sprite, ch17){
    ch17.kill();
    sprite.kill();
    boomm = game.add.sprite(80, 0, 'boom');
    boomm.scale.setTo(5);
    shipLost();
}
function collisionHandler_ship_ch18(sprite, ch18){
    ch18.kill();
    sprite.kill();
    boomm = game.add.sprite(80, 0, 'boom');
    boomm.scale.setTo(5);
    shipLost();
}
function collisionHandler_ship_ch19(sprite, ch19){
    ch19.kill();
    sprite.kill();
    boomm = game.add.sprite(80, 0, 'boom');
    boomm.scale.setTo(5);
    shipLost();
}
function collisionHandler_ship_ch20(sprite, ch20){
    ch20.kill();
    sprite.kill();
    boomm = game.add.sprite(80, 0, 'boom');
    boomm.scale.setTo(5);
    shipLost();
}


function shipLost() {
gameoverText.visible = true;
restartText.visible = true;
game.input.onTap.addOnce(restart,this);
}

function restart() {
    game.state.restart();
}


function render() {

   /* game.debug.body(sprite);
    game.debug.body(ch9);
    game.debug.body(ch10);
    game.debug.body(ch11);
    game.debug.body(ch12);
    game.debug.body(ch13);
    game.debug.body(ch14);
    game.debug.body(ch15);
    game.debug.body(ch16);
    game.debug.body(ch17);
    game.debug.body(ch18);
    game.debug.body(ch19);
    game.debug.body(ch20);
    */
    
    
}
