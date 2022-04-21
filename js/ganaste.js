var Ganaste = {

	preload: function(){
	juego.load.image("ganaste", "sprites/ganaste2.png");

	},

	create: function(){
	//Vamos a dejar nuestra pantalla de color rojo para indicar que perdimos
		var ganaste = this.add.button(juego.width/2, juego.height/2, "ganaste", this.iniciarJuego, this);
		ganaste.anchor.setTo(0.5);
	},

	iniciarJuego: function(){
		this.state.start("Menu");
	}
};