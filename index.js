//-------------------------COSAS-PARA-QUE-FUNCIONE-TODO------------------------//
//Propuesta
const rojo={
  esFuerte(){
    return true
  },
  nombre(){
    return "rojo"
  }
}
const pardo={
  esFuerte(){
    return false
  },
  nombre(){
    return "pardo"
  }
}
const verde={
  esFuerte(){
    return true
  },
  nombre(){
    return "verde"
  }
} 

const celeste = {
  esFuerte(){
    return false
  },
  nombre(){
    return "celeste"
  }
}

const naranja = {
  esFuerte(){
    return true
  },
  nombre(){
    return "naranja"
  }
}

const cobre={
  esBrillante(){
    return true
  }
}

const vidrio = {
  esBrillante(){
    return true
  }
}

const madera = {
  esBrillante(){
    return false
  }
}
const cuero = {
  esBrillante(){
    return false
  }
}
const lino = {
  esBrillante(){
    return false
  }
}

//--------------------------------OBJETOS--------------------------------//

const remera = {
  peso(){
    return 800
  },
  material(){
    return lino
  },
  color(){
    return rojo 
  },
  nombre(){
    return "remera"
  }
}

const pelota = {
  peso(){
    return 1300
  },
  material(){
    return cuero
  },
  color(){
    return pardo 
  },
  nombre(){
    return "pelota"
  }
}

const biblioteca = {
  peso(){
    return 8000
  },
  material(){
    return lino
  },
  color(){
    return verde 
  },
  nombre(){
    return "biblioteca"
  }
}
//munieco.peso(40)
const munieco = {
  peso:undefined,
  peso(){
    return peso
  },
  peso(valor){
    this.peso=valor
  },
  material(){
    return vidrio
  },
  color(){
    return celeste 
  },
  nombre(){
    return "munieco"
  }
}

const placa = {
  peso:undefined,
  peso(){
    return peso
  },
  peso(valor){
    this.peso=valor
  },
  color:undefined,
  cambiarColor(unColor) {
    this.color = unColor
  },
  material(){
    return cobre
  },
  nombre(){
    return "placa"
  }
}

//---------Agrego OBJETOS EXTRA **thom**---------------//

const arito = {
  peso(){
    return 180
  },
  material(){
    return cobre
  },
  color(){
    return celeste 
  },
  nombre(){
    return "arito"
  }
}

const banquito = {
  peso(){
    return 1700
  },
  material(){
    return madera
  },
  color(){
    return naranja 
  },
  cambiarColor(unColor) {
    this.color = unColor
  },
  nombre(){
    return "banquito"
  }
}

const cajita = {
  objetoDentro : undefined,
  ponerObjetoDentro(objeto) {
    this.objetoDentro = objeto
    this.peso += objeto.peso
    },
  peso(){
    return 400
  },
  material(){
    return cobre
  },
  color(){
    return rojo 
  },
  nombre(){
    return "cajita"
  }
}

//--------------------------------PERSONAS--------------------------------//

const Rosa  = {
  leGusta(objeto) {
    return objeto.peso() <= 2000 
  }
}

const Estefania  = {
  leGusta(objeto) {
    return objeto.color().esFuerte() 
  }
}

const Luisa  = {
  leGusta(objeto) {
    return objeto.material().esBrillante()
  }
}

const Juan  = {
  leGusta(objeto) {
    return !objeto.color().esFuerte() || (objeto.peso()<=1800 && objeto.peso()>=1200)
  }
}

//--------------------------------BOLICHITO--------------------------------//

const bolichito={
  mostrador:undefined,
  vidriera:undefined,
  cargarMostrador(objeto){
    this.mostrador=objeto
  },
  cargarVidriera(objeto){
    this.vidriera=objeto
  },
  verObjetoEnMostrador(){
    return this.mostrador
  },
  verObjetoEnVidriera(){
    return this.vidriera
  },
  esBrillante(){
    return this.mostrador.material().esBrillante() && 
    this.vidriera.material().esBrillante()
  },
  esMonocromatico(){
    return this.mostrador.color() == this.vidriera.color()
  },
  estaDesequilibrado(){
    return this.mostrador.peso() > this.vidriera.peso()
  },
  tieneAlgoDeColor(color){
    return this.mostrador.color()==color || this.vidriera.color()==color
  },

  
  puedeMejorar(){
    return this.esMonocromatico() || this.estaDesequilibrado()
  },



 puedeOfrecerleAlgoA(persona){

   return persona.leGusta(this.mostrador) || persona.leGusta (this.vidriera)
     
  
 }
}

//--------------------------------pruebas--------------------------------//

console.log(`la remera es color: ${remera.color().nombre()}`)
console.log(` `)
console.log(`a rosa le gusta la remera? ${Rosa.leGusta(remera)}`)
console.log(`a rosa le gusta la pelota? ${Rosa.leGusta(pelota)}`)
console.log(`a rosa le gusta la biblioteca? ${Rosa.leGusta(biblioteca)}`)
console.log(` `)
console.log(`a estefania le gusta la remera? ${Estefania.leGusta(remera)}`)
console.log(`a estefania le gusta la pelota? ${Estefania.leGusta(pelota)}`)
console.log(` `)
console.log(`a Luisa le gusta la pelota? ${Luisa.leGusta(pelota)}`)
console.log(`a Luisa le gusta la remera? ${Luisa.leGusta(remera)}`)
console.log(`a Luisa le gusta el munieco? ${Luisa.leGusta(munieco)}`)
console.log(` `)
console.log(`a juan le gusta la biblioteca? ${Juan.leGusta(biblioteca)}`)
console.log(`a juan le gusta la pelota? ${Juan.leGusta(pelota)}`)
console.log(` `)
bolichito.cargarMostrador(remera)
bolichito.cargarVidriera(pelota)
console.log(`dentro de la vidriera del bolichito hay: ${bolichito.verObjetoEnVidriera().nombre()} `)
console.log(`dentro del mostrador del bolichito hay: ${bolichito.verObjetoEnMostrador().nombre()} `)
console.log(`brillan las 2 cosas del bolichito? ${bolichito.esBrillante()}`)
console.log(`son monocromatico?: ${bolichito.esMonocromatico()}`)
console.log(`tiene algo de color verde?: ${bolichito.tieneAlgoDeColor(verde)}`)
console.log(`tiene algo de color rojo?: ${bolichito.tieneAlgoDeColor(rojo)}`)
console.log(`esta desequilibrado?: ${bolichito.estaDesequilibrado()}`)
console.log(`puede mejorar:? ${bolichito.puedeMejorar()}`)
console.log(`puede ofrecerle algo a Rosa? ${bolichito.puedeOfrecerleAlgoA(Rosa)}`)
console.log(`puede ofrecerle algo a Luisa? ${bolichito.puedeOfrecerleAlgoA(Luisa)}`)

console.log(`aaaaaa `)