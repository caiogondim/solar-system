var Planeta = (function() {

	'use strict'

	// construtor
	var Planeta = function( tamanho, orbita, cor, velocidade ) {

		//
		this.tamanho = tamanho
		this.orbita = orbita
		this.cor = cor
		this.velocidade = velocidade
		this.angulo = 0
	}

	// protótipo
	Planeta.prototype = {

		orbitar: function() {
			this.x = this.estrela.x + this.orbita - Math.cos( this.angulo ) * this.orbita
			this.y = this.estrela.y + Math.sin( this.angulo ) * this.orbita

			this.angulo += this.velocidade

			var canvas = document.querySelector( 'canvas' )
			var context = canvas.getContext( '2d' )

			// desenha órbita
			context.beginPath()
			context.arc( this.estrela.x, this.estrela.y, this.orbita, 0, Math.PI * 2, true )
			context.closePath()
			// context.strokeStyle = 'rgb( 71, 91, 99 )'
			context.strokeStyle = 'rgb( 11, 40, 52 )'
			context.stroke()

			// desenha planeta
			context.beginPath()
			context.arc( this.x - this.orbita, this.y, this.tamanho, 0, Math.PI * 2, true )
			context.closePath()
			context.fillStyle = this.cor
			context.fill()
		}
	}

	return Planeta

})()
