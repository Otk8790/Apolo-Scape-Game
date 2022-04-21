var Perdiste = {

	preload: function(){
	juego.load.image("perdiste", "sprites/perdiste.png");

	},

	create: function(){
	//Vamos a dejar nuestra pantalla de color rojo para indicar que perdimos
		var perdiste = this.add.button(juego.width/2, juego.height/2, "perdiste", this.iniciarJuego, this);
		perdiste.anchor.setTo(0.5);
	},

	iniciarJuego: function(){
		this.state.start("Menu");
	}
};