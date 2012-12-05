var Estrela = (function() {

	'use strict'

	// contrutor
	var Estrela = function( radius, fillColor ) {

		this.planetas = []
		this.radius = radius
		this.fillColor = fillColor

		this.x = document.width / 2
		this.y = document.height / 2

		this.desenha()
	}

	// protótipo
	Estrela.prototype = {
		adicionaPlaneta: function( planeta ) {
			this.planetas.push( planeta )
			planeta.estrela = this
		},
		desenha: function() {
			var canvas = document.querySelector( 'canvas' )
			var context = canvas.getContext( '2d' )

			context.beginPath()
			context.arc( this.x, this.y, this.radius, 0, Math.PI * 2, true )
			context.closePath()
			context.fillStyle = this.fillColor
			context.fill()
		}
	}

	return Estrela
})()
