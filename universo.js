var Universo = (function() {

	'use strict'

	// construtor
	var Universo = function( fillColor ) {

		this.estrelas = []
		this.fillColor = fillColor

		var canvas = document.querySelector( 'canvas' )
		var context = canvas.getContext( '2d' )

		//
		canvas.width = document.body.clientWidth
		canvas.height = document.body.clientHeight

		// cor de fundo do <canvas>
		context.fillStyle = fillColor
		context.fillRect( 0, 0, 2050, 2050 )
	}

	// protótipo
	Universo.prototype = {
		// atributos
		estrelas: null,

		// métodos
		adicionaEstrela: function( estrela ) {
			this.estrelas.push( estrela )
		},
		bigBen: function() {
			var that = this

			var canvas = document.querySelector( 'canvas' )
			var context = canvas.getContext( '2d' )

			// reseta o canvas
			context.clearRect( 0, 0, canvas.width, canvas.height )

			// cor de fundo do <canvas>
			context.fillStyle = this.fillColor
			context.fillRect( 0, 0, 2050, 2050 )

			this.estrelas.forEach( function( estrela ) {

				estrela.desenha()

				estrela.planetas.forEach( function( planeta, index ) {
					planeta.orbitar()
				})
			})

			requestAnimationFrame( function() {
				that.bigBen()
			})
		}
	}

	return Universo
})()
