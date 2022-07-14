/* Milestone 1 (DAY 1)
Replica della grafica con la possibilità di avere messaggi 
scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando 
due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for,
 visualizzare nome e immagine di ogni contatto
Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, 
visualizzare tutti i messaggi relativi al contatto attivo all’interno
 del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e 
digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, 
l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono 
visualizzati solo i contatti il cui nome contiene le lettere 
inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono 
  solo Marco e Martina) */

  console.log('js ok',Vue)

  const app = new Vue(
    {
      el: '#root',
      data:{
        user: {
          name: 'MMDita',
          avatar: '_io',
        },
      contacts: [
        {
          name: 'Marco',
          avatar: '_1',
        },
        {
          name: 'Giorgia',
          avatar: '_2',
        },
        {
          name: 'Fabrizio',
          avatar: '_3',
        },
        {
          name: 'Gabriele',
          avatar: '_4',
        },
        {
          name: 'Gianluca',
          avatar: '_5',
        },
        {
          name: 'Andrei',
          avatar: '_6',
        },
        {
          name: 'Federico',
          avatar: '_7',
        },
        {
          name: 'Alfredo',
          avatar: '_8',
        },
    ]
},
  methods:{
    getContacts(index){
    return 'img/avatar' + this.contacts[index].avatar + '.jpg';
},
    
getUser() {
      return 'img/avatar' + this.user.avatar+ '.jpg';
  },

  }
})