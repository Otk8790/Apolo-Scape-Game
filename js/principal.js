var juego = new Phaser.Game(800, 600, Phaser.CANVAS, "bloque_juego");
var contador = 0;

juego.state.add("Menu", Menu);
juego.state.add("Juego", Juego);
juego.state.add("Nivel2", Nivel2);
juego.state.add("Perdiste", Perdiste);
juego.state.add("Ganaste", Ganaste);

juego.state.start("Menu");