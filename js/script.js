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

            risposte: [

                "Ciao, quanto tempo",
                "Non so se hai capito che non posso dare risposte complesse.",
                "Stasera? non posso, devo vedermi con ChatGPT",
                "Alexa, abbassa le luci!",
                "un tempo anche io ero un avventuriero, finche non mi sono beccato una freccia nel ginocchio",
                "scusa ma a te sembra normale che i tuoi contatti sono tutti disegni?",
                "Lo so che mi preferivi quando dicevo solo ok.",
                "Posso dare molte risposte diverse ma non lo farò.",
                "Scusa come hai avuto il mio numero?",

            ],


            newMessageText: '',

            newMessage: {
                date: '',
                message: '',
                status: 'received'
            },

            newMessageAnswer: {
                date: '',
                message: '',
                status: 'sent'
            },

            contactsResearch: [],

            contactsResearchValue: '',

            hoverDropDown: false,

            isWrite: false,

            isWriteCheckTime: "",

            staScrivendoboolean: false,

            isOnline: false,
            isOnlineCheck: '',

            OptionDropDown: false,

            isEditnewContact: false,
            newContact: {},
            newContactName: '',
            newContactPhoto: '',
            spanMessageNewContact: 'Aggiungi nome e foto del tuo nuovo contatto',

            input: '',
            search: '',

        }
    },

    methods: {
        selectContact(Elindex) {
            this.globalIndex = Elindex;
        },

        addMessage() {

            let date = DateTime.now().setZone('Europe/Rome');
            let index = this.globalIndex;


            this.newMessage.date = `${date.day.toString().length < 2 ? '0' + date.day : date.day}/${date.month.toString().length < 2 ? '0' + date.month : date.month}/${date.year} ${date.hour.toString().length < 2 ? '0' + date.hour : date.hour}:${date.minute.toString().length < 2 ? '0' + date.minute : date.minute}:${date.second.toString().length < 2 ? '0' + date.second : date.second}`;
            this.newMessage.message = this.newMessageText;


            let newstring = this.newMessageText.replaceAll(" ", "")

            if (this.isOnline == true) {
                clearTimeout(this.isOnlineCheck)
            }



            if (this.newMessageText != '' && newstring != '') {

                this.contacts[index].messages.push(this.newMessage);

                let templateAnswer = `Ciao sono ${this.contacts[this.globalIndex].name}, ma questo lo sai già.`
                this.risposte.push(templateAnswer)

                this.newMessageAnswer = {
                    date: `${date.day.toString().length < 2 ? '0' + date.day : date.day}/${date.month.toString().length < 2 ? '0' + date.month : date.month}/${date.year} ${date.hour.toString().length < 2 ? '0' + date.hour : date.hour}:${date.minute.toString().length < 2 ? '0' + date.minute : date.minute}:${date.second.toString().length < 2 ? '0' + date.second : date.second}`,
                    message: this.risposte[this.randomNumber(0, this.risposte.length - 1)],
                    status: 'sent'

                    // console.log(date.day);
                    // console.log(date.month);
                    // console.log(date.year);
                    // console.log(date.hour);
                    // console.log(date.minute);

                };

                this.staScrivendoboolean = true;
                this.isOnline = true;

                this.isOnlineCheck = setTimeout(() => {
                    this.isOnline = false;

                }, 4000)



                let answer = setTimeout(() => {
                    this.contacts[index].messages.push(this.newMessageAnswer)

                    this.scrollToElement()
                    this.staScrivendoboolean = false;

                }, 1000);


                answer;

                this.scrollToElement();
            }

            this.isWrite = false;
            this.newMessageText = ''
            this.newMessage = {}


            let deleteAnswer = this.risposte.pop();

        },

        getHour(elementIndex) {
            //console.log(this.contacts[elementIndex].messages.length > 1)
            if (this.contacts[elementIndex].messages.length > 0 && this.contacts.length > 0) {
                let receivedMessArr = [];

                for (let i = 0; i < this.contacts[elementIndex].messages.length; i++) {

                    if (this.contacts[elementIndex].messages[i].status == 'sent') {
                        receivedMessArr.push(this.contacts[elementIndex].messages[i].date)
                    }
                }


                let hour = receivedMessArr[receivedMessArr.length - 1];
                modhour = hour.substr(0, 16);

            } else {
                modhour = 'poco fa'
            }

            return modhour
        },

        research() {
            if (this.contactsResearchValue == '') {

                this.contactsResearch = this.contacts;

            } else {
                let arrPro = []

                this.contacts.forEach(element => {

                    let correctName = element.name.toLowerCase()

                    if (correctName.includes(this.contactsResearchValue.toLowerCase())) {

                        arrPro.push(element);

                    }

                });

                this.contactsResearch = arrPro;

            }

        },

        displayDropDown() {
            if (this.hoverDropDown == false) {
                this.hoverDropDown = true
            } else {
                this.hoverDropDown = false
            }
        },

        deleteMessage(index) {
            this.contacts[this.globalIndex].messages.splice(index, 1)
        },

        scrollToElement() {
            setTimeout(
                () => {
                    let container = this.$el.querySelector("._chat-screen");

                    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' })
                    //container.scrollTop = container.scrollHeight;

                }, 100
            )
        },

        isWriteCheck() {
            this.isWriteCheckTime = setInterval(() => {

                if (this.newMessageText != '') {
                    this.isWrite = true;
                } else {
                    this.isWrite = false;
                };

            }, 500)
        },

        stopCheck() {
            clearInterval(this.isWriteCheckTime)
        },

        randomNumber(min, max) {
            let random = Math.floor(Math.random() * (max - min + 1) + min);
            return random
        },

        optionMenuToggle() {
            if (this.OptionDropDown) {
                this.OptionDropDown = false
            } else {
                this.OptionDropDown = true
            }
        },

        deleteAllMessages() {

            this.contacts[this.globalIndex].messages.splice(0, this.contacts[this.globalIndex].messages.length);

        },

        delateChat() {
            this.contacts.splice(this.contacts[this.globalIndex], 1)
        },

        editContact() {
            if (this.isEditnewContact) {
                this.isEditnewContact = false
            } else {
                this.isEditnewContact = true
            }
        },

        addContact() {
            if (this.newContactName != '' && this.newContactPhoto != '') {

                this.newContact = {
                    name: this.newContactName,
                    avatar: this.newContactPhoto,
                    visible: true,
                    messages: [],
                };

                this.contacts.push(this.newContact);

                this.newContact = {};
                this.isEditnewContact = false;
            } else {
                this.spanMessageNewContact = 'Inserisci un nome e un indirizzo valido'
            }

        },

        LastMessageFun(indexEl) {
            let mess = this.contacts[indexEl].messages[this.contacts[indexEl].messages.length - 1].message
            if (mess.length > 47) {

                mess = mess.substr(0, 46) + '..';
            }

            return mess
        },

        // DEBUG
        check() {
            console.log(this.contactsResearch)
            console.log(this.contacts)
        }

    },

    mounted() {
        this.contactsResearch = this.contacts;


    }
}).mount('#app')