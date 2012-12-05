var universo = new Universo( 'rgb( 5, 32, 42 )' )

var sol = new Estrela( 25, 'rgb( 165, 121, 0 )' )
universo.adicionaEstrela( sol )

// Planetas
// --------

var mercurio = new Planeta( 5, 70, 'rgb( 188, 56, 0 )', .022 )
sol.adicionaPlaneta( mercurio )

var venus = new Planeta( 6, 110, 'rgb( 207, 30, 30 )', .021 )
sol.adicionaPlaneta( venus )

var terra = new Planeta( 10, 150, 'rgb( 34, 115, 207 )', .02 )
sol.adicionaPlaneta( terra )

var marte = new Planeta( 10, 190, 'rgb( 196, 26, 115 )', .019 )
sol.adicionaPlaneta( marte )

var jupiter = new Planeta( 12, 230, 'rgb( 41, 146, 134 )', .018 )
sol.adicionaPlaneta( jupiter )

var saturno = new Planeta( 11, 270, 'rgb( 88, 86, 191 )', .017 )
sol.adicionaPlaneta( saturno )

var urano = new Planeta( 8, 310, 'rgb( 115, 140, 0 )', .016 )
sol.adicionaPlaneta( urano )

var netuno = new Planeta( 9, 350, 'rgb( 188, 56, 0 )', .015 )
sol.adicionaPlaneta( netuno )

var plutao = new Planeta( 5, 390, 'rgb( 196, 26, 115 )', .01 )
sol.adicionaPlaneta( plutao )

// Inicia o universo
// -----------------

universo.bigBen()
