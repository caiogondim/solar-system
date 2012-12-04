var Estrela = (function() {

	'use strict'

	// contrutor
	var Estrela = function( radius, fillColor ) {

		this.planetas = []

		var canvas = document.querySelector( 'canvas' )
		var context = canvas.getContext( '2d' )

		// desenha a estrela
		var centerX = document.width / 2
		var centerY = document.height / 2
		context.beginPath()
		context.arc( centerX, centerY, radius, 0, Math.PI * 2, true )
		context.closePath()
		context.fillStyle = fillColor
		context.fill()
	}

	// protótipo
	Estrela.prototype = {
		adicionaPlaneta: function( planeta ) {
			this.planetas.push
		}
	}

	return Estrela
})()
