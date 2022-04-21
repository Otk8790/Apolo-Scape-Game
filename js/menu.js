var Menu = {

    preload: function(){
        juego.stage.backgroundColor = "#FFF";
        juego.load.image("fondo", "sprites/menu.png");
        juego.load.image("boton", "sprites/start1.png");
        juego.load.audio("background", "audio/Ost_MenuF.mp3");
    },

    create: function(){
        fondo = juego.add.tileSprite(0, 0, 800, 600, "fondo");
        var botonIniciar = juego.add.button(juego.world.centerX - -20, 500, "boton", this.iniciarJuego, this);
        botonIniciar.anchor.setTo(0.5);


        background = juego.add.audio("background");
        background.play("", 0, 0.5, true);
    },

    update: function(){

    },

    iniciarJuego: function(){
        this.state.start("Juego");
        background.stop();
    },
};