const app = new Vue({
    el: "#app",
    data: {
        contacts: [
            {
                id: 1,
                nome: 'Ge',
                avatar: '_1',
                visible: false,
                ultimoAccesso: 'Ultimo accesso oggi alle 15:37',
                messages: [
                    {
                        date: '15:30',
                        message: 'Vuoi venire al cinema stasera?',
                        status: 'sent',
                        showInfo: false 
                    },
                    {
                        date: '15:33',
                        message: 'A vedere cosa?',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '15:37',
                        message: 'Non so decidiamo sul momento',
                        status: 'sent',
                        showInfo: false
                    },
                ],
            },
            {
                id: 2,
                nome: 'Ale',
                avatar: '_2',
                visible: false,
                ultimoAccesso: 'Ultimo accesso oggi alle 15:33',
                messages: [
                    {
                        date: '15:30',
                        message: 'Ehii, ci sei al compleanno di Luca',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '15:33',
                        message: 'Sii certo',
                        status: 'sent',
                        showInfo: false
                    },
                    {
                        date: '15:37',
                        message: 'Oh fantastico, non riesco a decidere cosa mettere',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '15:33',
                        message: 'Ah guarda non ne ho idea, parliamo con gli altri e vediamo',
                        status: 'sent',
                        showInfo: false
                    },
                ],
            },
            {
                id: 3,
                nome: 'Peppe',
                avatar: '_3',
                visible: false,
                ultimoAccesso: 'Ultimo accesso oggi alle 13:37',
                messages: [
                    {
                        date: '12:30',
                        message: 'Che fai oggi?',
                        status: 'sent',
                        showInfo: false
                    },
                    {
                        date: '12:31',
                        message: 'Ti va di fare un aperitivo?',
                        status: 'sent',
                        showInfo: false
                    },
                    {
                        date: '13:37',
                        message: 'Fino alle 6 ho lezione, ma dopo ci sono',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '13:37',
                        message: 'Volevo provare il nuovo locale in centro',
                        status: 'received',
                        showInfo: false
                    },
                ],
            },
            {
                id: 4,
                nome: 'Papà',
                avatar: '_4',
                visible: false,
                ultimoAccesso: 'Ultimo accesso oggi alle 11:37',
                messages: [
                    {
                        date: '10:30',
                        message: 'Ricordati di stendere i panni',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '10:30',
                        message: 'E di fare la spesa',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '11:00',
                        message: 'Sono già stanca',
                        status: 'sent',
                        showInfo: false
                    },
                    {
                        date: '11:10',
                        message: 'Ed esci il cane',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '11:37',
                        message: 'Basta vado a vivere da sola',
                        status: 'sent',
                        showInfo: false
                    },
                ],
            },
            {
                id: 5,
                nome: 'Myxi',
                avatar: '_5',
                visible: false,
                ultimoAccesso: 'Ultimo accesso oggi alle 18:37',
                messages: [
                    {
                        date: '18:30',
                        message: 'Sono in libreria, ti serve qualcosa?',
                        status: 'sent',
                        showInfo: false
                    },
                    {
                        date: '18:33',
                        message: 'No grazie',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '18:37',
                        message: 'Anzi si, però ti raggiungo così vediamo insieme',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '18:37',
                        message: 'oks',
                        status: 'sent',
                        showInfo: false
                    },
                ],
            },
            {
                id: 6,
                nome: 'Ori',
                avatar: '_6',
                visible: false,
                ultimoAccesso: 'Ultimo accesso oggi alle 02:31',
                messages: [
                    {
                        date: '02:30',
                        message: 'Frse o bevuto un dpo troppod',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '02:30',
                        message: 'ehdisj',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '02:30',
                        message: 'ci edhiano?',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '02:30',
                        message: 'oooooooooo',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '02:31',
                        message: 'ooooooo',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '02:31',
                        message: 'tii ptefooo',
                        status: 'received',
                        showInfo: false
                    },
                ],
            },
            {
                id: 7,
                nome: 'Giorgia',
                avatar: '_7',
                visible: false,
                ultimoAccesso: 'Ultimo accesso oggi alle 13:22',
                messages: [
                    {
                        date: '13:20',
                        message: 'Mi vieni a prendere tu?',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '13:22',
                        message: 'Sisi, 20 minuti e sono da te',
                        status: 'sent',
                        showInfo: false
                    }
                ],
            },
            {
                id: 8,
                nome: 'Luca',
                avatar: '_8',
                visible: false,
                ultimoAccesso: 'Ultimo accesso oggi alle 17:33',
                messages: [
                    {
                        date: '17:30',
                        message: 'Sto prendendo i biglietti per il concerto, confermi che ci sei?',
                        status: 'sent',
                        showInfo: false
                    },
                    {
                        date: '17:33',
                        message: 'Si ovvio, non me lo perderei mai',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '17:33',
                        message: 'Ma chi siamo?',
                        status: 'received',
                        showInfo: false
                    },
                    {
                        date: '17:50',
                        message: 'Perfetto',
                        status: 'sent',
                        showInfo: false
                    },
                    {
                        date: '17:50',
                        message: 'Noi, Ori e Peppe',
                        status: 'sent',
                        showInfo: false
                    },
                ],
            },
        ],
        currentChat: 0,
        newmessage: '',
        search: '',
        currentContactId: 1,
    },
    methods: {
        deleteMessage(index){
            this.contacts[this.currentChat].messages.splice(index, 1)
            console.log(this.contacts[this.currentChat].messages)
        },
        changeChat(id){
            const index = this.contacts.findIndex((contact)=>{
                return contact.id === id
            })
            this.currentChat = index
            this.currentContactId = id
        },
        timeMessage(){
            const date = new Date();
            const newTime = date.toLocaleTimeString('it-IT', {
                hour: '2-digit',
                minute: '2-digit',
            });
            console.log(newTime);
            return newTime
        },
        getRandomInt(max) {
            return Math.floor(Math.random() * max);
        },
        getReply(){
            const possibleReply = ['va bene', 'sinceramente non mi va', 'siiiiii', 'ahahahaha', 'okok', 'no dai', 'domani sono impegnato'];
            index = this.getRandomInt(possibleReply.length - 1);
            console.log(index)
            const reply = {
                date: this.timeMessage(),
                message: possibleReply[index],
                status: 'received',
                showInfo: false
            };
            this.contacts[this.currentChat].messages.push(reply)
            this.contacts[this.currentChat].ultimoAccesso = 'Online'
            console.log(this.ultimoAccesso)
            setTimeout(this.changeUltimoAccesso, 3000)
        },
        changeUltimoAccesso(){
            this.contacts[this.currentChat].ultimoAccesso = `Ultimo accesso oggi alle: ${this.contacts[this.currentChat].messages.at(-1).date}`
            console.log(this.ultimoAccesso)
        },
        sendMessage(){
            if(this.newmessage.length > 0){
                const newMess = {
                    date: this.timeMessage(),
                    message: this.newmessage,
                    status: 'sent',
                    showInfo: false
                };
                this.contacts[this.currentChat].messages.push(newMess);
                console.log(this.contacts[this.currentChat].messages);
                this.newmessage = '';
                this.contacts[this.currentChat].ultimoAccesso = 'Sta scrivendo..'
                console.log(this.ultimoAccesso)
                setTimeout(this.getReply, 2000)
            }
        },
        showChatMobile(){
            console.log('aa')
            this.contacts[this.currentChat].visible = !this.contacts[this.currentChat].visible
        }
    },
    computed: {
        filteredContacts(){
            return this.contacts.filter((contact)=> contact.nome.toLowerCase().includes(this.search.toLowerCase()))
        },
    },
})