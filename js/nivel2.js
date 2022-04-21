var Nivel2 = {
    
    preload: function(){
        juego.load.image("fondo", "sprites/fondo2.png");
        juego.load.image("barra", "sprites/plataforma.png");
        juego.load.image("barra2", "sprites/plataforma2.png");
        juego.load.image("laser", "sprites/laser.png");
        juego.load.image("enemyBullet", "sprites/enemy-bullet.png");
        juego.load.image("puerta", "sprites/puerta2.png");
        juego.load.image("life", "sprites/vida.png");
        juego.load.spritesheet("portal", "sprites/portal2.png", 40, 55);
        juego.load.spritesheet("monedas", "sprites/coin.png", 32, 32);
        juego.load.spritesheet("malos", "sprites/enemigo2.png", 32, 32);
        juego.load.spritesheet("jugador", "sprites/personaje2.png", 32, 48);
        juego.load.audio("background", "audio/Ost_Game.mp3");
        juego.load.audio("laserJugador", "audio/laser.mp3");
        juego.load.audio("dinero", "audio/Dinero.mp3");
        juego.load.audio("ouch", "audio/Ouch.mp3");
        juego.load.audio("gameOver", "audio/Game_Over.mp3");
        juego.load.audio("monsterD", "audio/MonsterF.mp3");
        juego.load.audio("youWin", "audio/You_WinF.mp3");
        juego.load.audio("salto", "audio/jump1.mp3");
        juego.load.audio("cerrar", "audio/puerta2.mp3");
        juego.load.audio("Sportal", "audio/portal1.mp3");
    
    },
    
    create: function(){

        //Agregar fisicas a todo el tablero
        juego.physics.startSystem(Phaser.Physics.ARCADE);

        juego.world.setBounds(0, 0, 800, 1200);

        fondoJuego = juego.add.tileSprite(0, 0, 800, 1200,  "fondo");
        fondoJuego.fixedToCamera = true;

        music = juego.add.audio("background");
        music.play("", 0, 0.8, true);

        laserJugador = juego.add.audio("laserJugador");
        dinero = juego.add.audio("dinero");
        ouch = juego.add.audio("ouch");
        gameOver = juego.add.audio("gameOver");
        monsterD = juego.add.audio("monsterD");
        youWin = juego.add.audio("youWin");
        salto = juego.add.audio("salto");
        cerrar = juego.add.audio("cerrar");
        Sportal = juego.add.audio("Sportal");

        //Agregamos las plataformas
        plataformas = juego.add.group();
        plataformas.enableBody = true;

        plataformas2 = juego.add.group();
        plataformas2.enableBody = true;

        var piso = plataformas.create(0, juego.world.height - 32, "barra");
        piso.scale.setTo(2, 2);
        piso.body.immovable = true;

        //creamos las plataformas
        var barra1 = plataformas.create(450, 165, "barra");
        barra1.body.immovable = true;
        var animacion = juego.add.tween(barra1).to({x: 600}, 1200, Phaser.Easing.Linear.None, true, 0, 1000, true);

        var barra2 = plataformas.create(45, 1015, "barra");
        barra2.body.immovable = true;

        var barra25 = plataformas.create(0, 1015, "barra");
        barra25.body.immovable = true;

        var barra3 = plataformas.create(670, 940, "barra");
        barra3.body.immovable = true;
        var animacion = juego.add.tween(barra3).to({x: 720}, 800, Phaser.Easing.Linear.None, true, 0, 1000, true);

        var barra4 = plataformas.create(110, 800, "barra");
        barra4.body.immovable = true;

        var barra5 = plataformas.create(680, 690, "barra");
        barra5.body.immovable = true;
        var animacion = juego.add.tween(barra5).to({x: 720}, 800, Phaser.Easing.Linear.None, true, 0, 1000, true);

        var barra6 = plataformas.create(150, 545, "barra");
        barra6.body.immovable = true;

        var barra6 = plataformas.create(150, 545, "barra");
        barra6.body.immovable = true;

        var barra7 = plataformas.create(-150, 400, "barra");
        barra7.body.immovable = true;

        var barra75 = plataformas2.create(200, 250, "barra2");
        barra75.body.immovable = true;
        var animacion = juego.add.tween(barra75).to({x: 400}, 2500, Phaser.Easing.Linear.None, true, 0, 1000, true);

        //Agregamos el jugador
        jugador = juego.add.sprite(750, 1100, "jugador");
        juego.physics.arcade.enable(jugador, Phaser.Physics.ARCADE);
        jugador.body.bounce.y = 0.2;
        jugador.body.gravity.y = 395;
        jugador.body.collideWorldBounds = true;
        //Camara del jugador
        juego.camera.follow(jugador);

       //Le Creamos las animaciones
       jugador.animations.add("izquierda", [2, 1], 10, true);
       jugador.animations.add("derecha", [4, 5], 10, true);

        //Agregamos la puerta
        portal = juego.add.group();
        portal.enableBody = true;

        for (var i = 0; i < 1; i++){
            portal = portal.create(750 + i * 750, 100, "portal");
            portal.body.immovable = true;
            portal.enableBody = true;
            portal.physicsBodyType = Phaser.Physics.ARCADE;
            portal.animations.add("vuelta", [ 0, 1, 2, 3], 10, true);
            portal.play("vuelta");
        }

        puerta= juego.add.sprite(750, 1118, "puerta");
        puerta.enableBody = true;
        puerta.physicsBodyType = Phaser.Physics.ARCADE;
        cerrar.play();

        //creamos las balas
		balas = juego.add.group();
		balas.enableBody = true;
		balas.setBodyType = Phaser.Physics.ARCADE;
		balas.createMultiple(20, "laser");
		balas.setAll("anchor.x", -0.95);
		balas.setAll("anchor.y", -0.95);
		balas.setAll("checkWorldBounds", true);
        balas.setAll("outOfBoundsKill", true);

        //Creamos las balas enemigas
        balasEnemi = juego.add.group();
        balasEnemi.enableBody = true;
        balasEnemi.physicsBodyType = Phaser.Physics.ARCADE;
        balasEnemi.createMultiple(30, "enemyBullet");
        balasEnemi.setAll("anchor.x", 0.5);
        balasEnemi.setAll("anchor.y", 1);
        balasEnemi.setAll("outOfBoundsKill", true);
        balasEnemi.setAll("checkWorldBounds", true);
        
        //Agregamos el grupo de monedas
        monedas = juego.add.group();
        monedas.enableBody = true;
        monedas.physicsBodyType = Phaser.Physics.ARCADE;

        for (var i = 0; i < 10; i++){
            var moneda = monedas.create(100 + i * 5, 5, "monedas");

            //Colisiona con el mundo
            moneda.body.collideWorldBounds = true;

            //Gravedad random de phaser
            moneda.body.gravity.x = juego.rnd.integerInRange(-200, 200);
            moneda.body.bounce.setTo(0.5);
            //Le damos gravedad en y random de javascript
            moneda.body.gravity.y = 100 + Math.random() * 300;

            //Le damos para que rebote la moneda
            //moneda.body.bounce.setTo(0.8);
            moneda.animations.add("girar", [ 0, 1, 2, 3, 4, 5 ], 20, true);
            moneda.play("girar");
        }

        //Agregamos el grupo de enemigos
        malos = juego.add.group();
        malos.enableBody = true;
        malos.physicsBodyType = Phaser.Physics.ARCADE;

        timer2 = juego.time.events.loop(10000, this.crearEnemigo, this);

        //Puntaje
        textoScore = juego.add.text(20, 20, "Marcador: " + score, {font: "24px Arial", fill: "#FFF"});
        textoScore.fixedToCamera = true;

        //Vidas
        vidas = juego.add.group();
        txtVidas = juego.add.text(juego.world.width - 85, 10, "Vidas: ", {font: "24px Arial", fill: "#FFF"});
        vidas.fixedToCamera = true;
        txtVidas.fixedToCamera = true;

        for (var i = 0; i < 5; i++) 
        {
            var life = vidas.create(juego.world.width - 150 + (30 * i), 50, "life");
            life.anchor.setTo(0.5, 0.5);
            life.alpha = 0.6;
        
        }
        
        controles = juego.input.keyboard.createCursorKeys();
        botonDisparo = juego.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    recolectar: function(jugador, monedas){
        monedas.kill();

        score += 10;
        textoScore.text = "Marcador: " + score;
        contador += 1;
        dinero.play();
    },

    colision: function(bala, malos){
        bala.kill();
        malos.kill();

        score += 10;
        textoScore.text = "Marcador: " + score;
        contadorEnemi += 1;
        monsterD.play();
    },

    colisionEnemi: function(jugador, bala){
        bala.kill();

        vida = vidas.getFirstAlive();
        ouch.play();
        
        if (vida)
        {
            vida.kill();
        }

        if (vidas.countLiving() < 1){
            juego.state.start("Perdiste");
            music.stop();
            gameOver.play();
        }
    },

    colisionPortal: function(jugador, portal){
        portal.kill();
        Sportal.play();
        juego.state.start("Ganaste");
        music.stop();
        youWin.play();
    },

    crearEnemigo: function(){
        for (var i = 0; i < 1; i++){
            var malo = malos.create(300 + i * 15, 15, "malos");
            //Colisiona con el mundo
            malo.body.collideWorldBounds = true;
            //Gravedad random de phaser
            malo.body.gravity.x = juego.rnd.integerInRange(-50, 50);
            //Le damos gravedad en y random de javascript
            malo.body.gravity.y = 300 + Math.random() * 100;
            //Le damos para que rebote la estrella
            malo.body.bounce.setTo(0.4);
            malo.animations.add("volar", [ 0, 1, 2, 3 ], 10, true);
            malo.play("volar");
        }
    },


    update: function(){
        
        fondoJuego.tilePosition.x += 0.5;
        
        //Agregamos las colisiones entre objetos
        juego.physics.arcade.collide(monedas, plataformas);
        juego.physics.arcade.collide(monedas, plataformas2);
        juego.physics.arcade.collide(jugador, plataformas);
        juego.physics.arcade.collide(jugador, plataformas2);
        juego.physics.arcade.collide(monedas, malos);
        juego.physics.arcade.collide(malos, plataformas);
        juego.physics.arcade.collide(malos, plataformas2);
        juego.physics.arcade.collide(malos, malos);
        juego.physics.arcade.collide(monedas, monedas);
        juego.physics.arcade.collide(monedas, puerta);
        juego.physics.arcade.collide(jugador, portal, this.colisionPortal, null, this);
        juego.physics.arcade.overlap(jugador, monedas, this.recolectar, null, this);
        juego.physics.arcade.overlap(balas, malos, this.colision, null, this);
        juego.physics.arcade.overlap(balasEnemi, jugador, this.colisionEnemi, null, this);

        //Declaramos que el jugador no se mueve solo
        jugador.body.velocity.x = 0;

        //comportamiento de los movimientos
        if(controles.left.isDown){
            jugador.body.velocity.x= -150;
            jugador.animations.play("izquierda");
        }
        else if(controles.right.isDown){
            jugador.body.velocity.x = 150;
            jugador.animations.play("derecha");
        }
        else{
            jugador.animations.stop();
            jugador.frame = 3;
        }
        if (controles.up.isDown && jugador.body.touching.down){
            jugador.body.velocity.y = -350;
            salto.play();

        }

        var bala;
        if(botonDisparo.isDown){
		    if(juego.time.now > tiempoEntreBalas){
                bala = balas.getFirstExists(false);
                laserJugador.play();
            }
        
            if(bala){
            //Nos da la posicion de la nave, para disparar desde ella
            bala.reset(jugador.x, jugador.y);
            //Velocidad y direccion de la bala
            if(jugador.frame < 5){
                bala.body.velocity.x = -400;
            }
            if(jugador.frame > 3){
                bala.body.velocity.x = 400;
            }
            
            //El tiempo se da en milisegundos
            tiempoEntreBalas = juego.time.now + 420;
            }
        }

        if (juego.time.now > tempBala){
            fuegoEnemi();
        }
    },
};

function fuegoEnemi() {
    balaEnemi = balasEnemi.getFirstExists(false);
    malosVivos.length=0;
    malos.forEachAlive(function(malos){
        malosVivos.push(malos);
    });
    
    if (balaEnemi && malosVivos.length > 0)
    {
        var random=juego.rnd.integerInRange(0,malosVivos.length-1);
        var disparo=malosVivos[random];
        balaEnemi.reset(disparo.body.x, disparo.body.y);
        juego.physics.arcade.moveToObject(balaEnemi,jugador,120);
        tempBala = juego.time.now + 1500;
    }

}