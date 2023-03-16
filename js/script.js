var DateTime = luxon.DateTime;
const { createApp } = Vue

  createApp({
    data() {
      return {
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],

        globalIndex: 0,

        newMessageText: '',
        
        newMessage:{
            date: '',
            message: '',
            status: 'received'
        },

        newMessageAnswer:{
            date: '',
            message: '',
            status: 'sent'
        },

        
      }
    },

    methods:{
        selectContact(Elindex){
            this.globalIndex = Elindex;
        },

        addMessage(){
            
            let date = DateTime.now().setZone('Europe/Rome');
            
            //console.log(date.minute.toString().length)
            
            this.newMessage.date = `${date.day.toString().length <2 ? '0' + date.day : date.day}/${date.month.toString().length <2 ? '0' + date.month : date.month}/${date.year} ${date.hour.toString().length <2 ? '0' + date.hour : date.hour}:${date.minute.toString().length <2 ? '0' + date.minute : date.minute}:${date.second.toString().length <2 ? '0' + date.second : date.second}`;
            this.newMessage.message = this.newMessageText;
            //console.log(this.newMessage);
            //console.log(this.contacts[this.globalIndex]);

            if(this.newMessageText != ''){
                this.contacts[this.globalIndex].messages.push(this.newMessage)
            }
            
            this.newMessageText = ''
            this.newMessage={}
            this.newMessageAnswer = {
                date: `${date.day.toString().length <2 ? '0' + date.day : date.day}/${date.month.toString().length <2 ? '0' + date.month : date.month}/${date.year} ${date.hour.toString().length <2 ? '0' + date.hour : date.hour}:${date.minute.toString().length <2 ? '0' + date.minute : date.minute}:${date.second.toString().length <2 ? '0' + date.second : date.second}`,
                message: 'ok',
                status: 'sent'
            }
            // console.log(date.day);
            // console.log(date.month);
            // console.log(date.year);
            // console.log(date.hour);
            // console.log(date.minute);


            let answer= setTimeout(() => {
                this.contacts[this.globalIndex].messages.push(this.newMessageAnswer)
            }, 1000);

            answer;
            
            //this.newMessage={}
;
        },

        getHour(elementIndex){
            let receivedMessArr = [];
            
            for (let i=0; i<this.contacts[elementIndex].messages.length; i++){

                if(this.contacts[elementIndex].messages[i].status == 'sent'){
                    receivedMessArr.push(this.contacts[elementIndex].messages[i].date)
                }
            }

            
            let hour = receivedMessArr[receivedMessArr.length-1];
            modhour = hour.substr(10, 6);
            
            //console.log(modhour)
            return modhour
        }

    }
  }).mount('#app')