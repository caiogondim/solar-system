var Universo = (function() {

	'use strict'

	// construtor
	var Universo = function( fillColor ) {

		this.estrelas = []

		var canvas = document.querySelector( 'canvas' )
		var context = canvas.getContext( '2d' )

		//
		canvas.width = document.width
		canvas.height = document.height

		// cor de fundo do <canvas>
		context.fillStyle = fillColor
		context.fillRect( 0, 0, 2050, 2050 )
	}

	// protótipo
	Universo.prototype = {
		adicionaEstrela: function( estrela ) {
			this.estrelas.push( estrela )
		}
	}

	return Universo
})()
