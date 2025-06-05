let scuola = {
  
  persona: {

    studenti: [

      {
        nome: 'mario',
        età: 19,
        interessi: ['calcio', 'danza']
      },

      {
        nome: 'luca',
        età: 19,
        interessi: ['musica']
      },

      {
        nome: 'maria',
        età: 20,
        interessi: ['danza']
      },

      {
        nome: 'genoveffa',
        età: 21,
        interessi: ['lettura']
      }
    ],

    professori:[
      {
        nome: 'Gigi',
        età: 44
      },

       {
        nome: 'Luke',
        età: 31
      },

       {
        nome: 'Roberta',
        età: 52
      },

       {
        nome: 'Chiara',
        età: 40
      },
    ],

    fraseS: function(nome){
      let ok = scuola.persona

      for (i=0; i<ok.studenti.length;i++){
        if (nome === ok.studenti[i].nome){
          console.log( `Ciao, sono ${ok.studenti[i].nome}, ho ${ok.studenti[i].età} anni ed i miei interessi sono ${ok.studenti[i].interessi.join(', ')}`)
        }
      }
    },
    
  }
}

scuola.persona.fraseS('luca')

function Insegnante (nome, età, ruolo, genere, interessi){

  this.nome = nome,
  this.ruolo = ruolo,
  this.età = età
  this.genere = genere
  this.interessi = interessi

  this.saluto = function(){
    console.log(`Ciao, sono ${this.nome}, ho ${this.età} ed insegno ${this.ruolo}.`)
  }
}

const iinsegnante = new Insegnante ('maria', 29, 'matematica', 'F', ['danza', 'lettura'])
iinsegnante.saluto();
const pippo = new Insegnante ('Pippo', 34, 'italiano', 'M', [])
pippo.saluto();


class Persona {
  constructor (name, surname, età, interessi, genere){
    this.nome = name,
    this.cognome = surname,
    this.età = età,
    this.genere = genere
    this.interessi = interessi
  }

  saluta(){
    console.log(`Ciao, sono ${this.nome} ${this.cognome}, ho ${this.età} anni.`)
  }
}

const utente = new Persona ('mario', 'rossi', 44, [], 'M')
utente.saluta();

console.log('-')


class Impiegato extends Persona{
  constructor (name, surname, età, interessi, genere, lavoro){
    super(name, surname, età, interessi, genere)

    this.lavoro = lavoro
  }
    saluta(){
      console.log(`Ciao, sono ${this.nome} ${this.cognome}, ho ${this.età} anni e di lavoro faccio ${this.lavoro}`)
    }
  }


const impe = new Impiegato('gino', 'rossi', 55, [], 'M', 'manovale')
impe.saluta();


class Utente {
constructor (nome, nutente, età, console){
  
  this.nome = nome,
  this.nutente = nutente,
  this.età = età,
  this.console = console
}

display(){
  return `Benvenuto ${this.nome}, stai giocando su ${this.console}?`
}
}

class skill extends Utente {
  constructor(nome, nutente, età, console,trofe){
    super(nome, nutente, età, console)

    this.trofei = trofe;
  }
    diss(){
      return `Benvenuto ${this.nome}, hai ottenuto ${this.trofei} trofei`
    }
  }

  let Gibbo = new Utente('gabriele', 'gibbo', 19, 'PS4')
  console.log(Gibbo.display())
  Gibbo = new skill('gabriele', 'gibbo', 19, 'PS4', 18)
  console.log(Gibbo.diss())