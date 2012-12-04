var Planeta = (function() {

	'use strict'

	// construtor
	var Planeta = function( tamanho, orbita, cor, velocidade ) {
		var canvas = document.querySelector( 'canvas' )
		var context = canvas.getContext( '2d' )

		// desenha órbita
		var centerX = document.width / 2
		var centerY = document.height / 2
		context.beginPath()
		context.arc( centerX, centerY, orbita, 0, Math.PI * 2, true )
		context.closePath()
		// context.strokeStyle = 'rgb( 71, 91, 99 )'
		context.strokeStyle = 'rgb( 11, 40, 52 )'
		context.stroke()

		// desenha planeta
		context.beginPath()
		context.arc( centerX - orbita, centerY, tamanho, 0, Math.PI * 2, true )
		context.closePath()
		context.fillStyle = cor
		context.fill()
	}

	// protótipo
	Planeta.prototype = {

	}

	return Planeta

})()
