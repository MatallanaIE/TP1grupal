//-------------------------COLORES Y MATERIALES------------------------//

const rojo = {
  esFuerte() {
    return true
  },
  getNombre() {
    return "rojo"
  }
}
const pardo = {
  esFuerte() {
    return false
  },
  getNombre() {
    return "pardo"
  }
}
const verde = {
  esFuerte() {
    return true
  },
  getNombre() {
    return "verde"
  }
}

const celeste = {
  esFuerte() {
    return false
  },
  getNombre() {
    return "celeste"
  }
}

const naranja = {
  esFuerte() {
    return true
  },
  getNombre() {
    return "naranja"
  }
}

const cobre = {
  esBrillante() {
    return true
  }
}

const vidrio = {
  esBrillante() {
    return true
  }
}

const madera = {
  esBrillante() {
    return false
  }
}
const cuero = {
  esBrillante() {
    return false
  }
}
const lino = {
  esBrillante() {
    return false
  }
}

//--------------------------------OBJETOS--------------------------------//

const remera = {
  getPeso() {
    return 800
  },
  getMaterial() {
    return lino
  },
  getColor() {
    return rojo
  },
  getNombre() {
    return "remera"
  }
}

const pelota = {
  getPeso() {
    return 1300
  },
  getMaterial() {
    return cuero
  },
  getColor() {
    return pardo
  },
  getNombre() {
    return "pelota"
  }
}

const biblioteca = {
  getPeso() {
    return 8000
  },
  getMaterial() {
    return lino
  },
  getColor() {
    return verde
  },
  getNombre() {
    return "biblioteca"
  }
}

const munieco = {
  peso: undefined,
  getPeso() {
    return this.peso
  },
  setPeso(valor) {
    this.peso = valor
  },
  getMaterial() {
    return vidrio
  },
  getColor() {
    return celeste
  },
  getNombre() {
    return "munieco"
  }
}

const placa = {
  peso: undefined,
  color: undefined,
  getPeso() {
    return this.peso 
  },
  setPeso(valor) {
    this.peso = valor
  },
  setColor(unColor) {
    this.color = unColor
  },
  getColor() {
    return this.color
  },
  getMaterial() {
    return cobre
  },
  getNombre() {
    return "placa"
  }
}

//------------------------OBJETOS EXTRA------------------------------//

const arito = {
  getPeso() {
    return 180
  },
  getMaterial() {
    return cobre
  },
  getColor() {
    return celeste
  },
  getNombre() {
    return "arito"
  }
}

const banquito = {
  getPeso() {
    return 1700
  },
  getMaterial() {
    return madera
  },
  getColor() {
    return naranja
  },
  setColor(unColor) {
    this.color = unColor
  },
  getNombre() {
    return "banquito"
  }
}

const cajita = {
  peso: 400,
  objetoDentro: undefined,
  ponerObjetoDentro(objeto) {
    this.peso = 400
    this.objetoDentro = objeto
    this.peso += objeto.getPeso()
  },
  getPeso() {
    return this.peso
  },
  getMaterial() {
    return cobre
  },
  getColor() {
    return rojo
  },
  getNombre() {
    return "cajita"
  }
}

//--------------------------------PERSONAS--------------------------------//

const Rosa = {
  leGusta(objeto) {
    return objeto.getPeso() <= 2000
  }
}

const Estefania = {
  leGusta(objeto) {
    return objeto.getColor().esFuerte()
  }
}

const Luisa = {
  leGusta(objeto) {
    return objeto.getMaterial().esBrillante()
  }
}

const Juan = {
  leGusta(objeto) {
    return !objeto.getColor().esFuerte() || (objeto.getPeso() <= 1800 && objeto.getPeso() >= 1200)
  }
}

//--------------------------------BOLICHITO--------------------------------//

const bolichito = {
  mostrador: undefined,
  vidriera: undefined,
  cargarMostrador(objeto) {
    this.mostrador = objeto
  },
  cargarVidriera(objeto) {
    this.vidriera = objeto
  },
  verObjetoEnMostrador() {
    return this.mostrador
  },
  verObjetoEnVidriera() {
    return this.vidriera
  },
  esBrillante() {
    return this.mostrador.getMaterial().esBrillante() &&
      this.vidriera.getMaterial().esBrillante()
  },
  esMonocromatico() {
    return this.mostrador.getColor() == this.vidriera.getColor()
  },
  estaDesequilibrado() {
    return this.mostrador.getPeso() > this.vidriera.getPeso()
  },
  tieneAlgoDeColor(color) {
    return this.mostrador.getColor() == color || this.vidriera.getColor() == color
  },


  puedeMejorar() {
    return this.esMonocromatico() || this.estaDesequilibrado()
  },



  puedeOfrecerleAlgoA(persona) {

    return persona.leGusta(this.mostrador) || persona.leGusta(this.vidriera)


  }
}

//--------------------------------pruebas--------------------------------//

console.log(pelota.getMaterial().esBrillante())
console.log(pelota.getColor().esFuerte())
console.log(`la remera es color: ${remera.getColor().getNombre()}`)
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
console.log(`dentro de la vidriera del bolichito hay: ${bolichito.verObjetoEnVidriera().getNombre()} `)
console.log(`dentro del mostrador del bolichito hay: ${bolichito.verObjetoEnMostrador().getNombre()} `)
console.log(`brillan las 2 cosas del bolichito? ${bolichito.esBrillante()}`)
console.log(`son monocromatico?: ${bolichito.esMonocromatico()}`)
console.log(`tiene algo de color verde?: ${bolichito.tieneAlgoDeColor(verde)}`)
console.log(`tiene algo de color rojo?: ${bolichito.tieneAlgoDeColor(rojo)}`)
console.log(`esta desequilibrado?: ${bolichito.estaDesequilibrado()}`)
console.log(`puede mejorar:? ${bolichito.puedeMejorar()}`)
console.log(`puede ofrecerle algo a Rosa? ${bolichito.puedeOfrecerleAlgoA(Rosa)}`)
console.log(`puede ofrecerle algo a Luisa? ${bolichito.puedeOfrecerleAlgoA(Luisa)}`)
console.log(` `)

placa.setColor(rojo)
bolichito.cargarMostrador(remera)
bolichito.cargarVidriera(placa)
console.log(`dentro de la vidriera del bolichito hay: ${bolichito.verObjetoEnVidriera().getNombre()} `)
console.log(`dentro del mostrador del bolichito hay: ${bolichito.verObjetoEnMostrador().getNombre()} `)
console.log(`son monocromatico?: ${bolichito.esMonocromatico()}`)

console.log(` `)

cajita.ponerObjetoDentro(remera)
bolichito.cargarVidriera(remera)
bolichito.cargarMostrador(cajita)
console.log(`dentro de la vidriera del bolichito hay: ${bolichito.verObjetoEnVidriera().getNombre()} `)
console.log(`dentro del mostrador del bolichito hay: ${bolichito.verObjetoEnMostrador().getNombre()} `)
console.log(`peso cajita ${cajita.getPeso()}`)
console.log(`esta desequilibrado?: ${bolichito.estaDesequilibrado()}`)



console.log(` `)

cajita.ponerObjetoDentro(pelota)
bolichito.cargarVidriera(pelota)
bolichito.cargarMostrador(cajita)
console.log(`dentro de la vidriera del bolichito hay: ${bolichito.verObjetoEnVidriera().getNombre()} `)
console.log(`dentro del mostrador del bolichito hay: ${bolichito.verObjetoEnMostrador().getNombre()} `)
console.log(`peso cajita ${cajita.getPeso()}`)
console.log(`esta desequilibrado?: ${bolichito.estaDesequilibrado()}`)


console.log(` `)
console.log(`-------------------------------- `)
placa.setPeso(100)
munieco.setPeso(999)
bolichito.cargarVidriera(munieco)
bolichito.cargarMostrador(placa)
console.log(`dentro de la vidriera del bolichito hay: ${bolichito.verObjetoEnVidriera().getNombre()} `)
console.log(`dentro del mostrador del bolichito hay: ${bolichito.verObjetoEnMostrador().getNombre()} `)
console.log(`esta desequilibrado?: ${bolichito.estaDesequilibrado()}`)
console.log(`la placa pesa: ${placa.getPeso()}`)
console.log(`el minieco pesa: ${munieco.getPeso()}`)

