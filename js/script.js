const app = new Vue({
    el: "#app",
    data: {
        contacts: [
            {
                nome: 'Ge',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Vuoi venire al cinema stasera?',
                        status: 'sent'
                    },
                    {
                        date: '15:33',
                        message: 'A vedere cosa?',
                        status: 'received'
                    },
                    {
                        date: '15:37',
                        message: 'Non so decidiamo sul momento',
                        status: 'sent'
                    },
                ]
            },
            {
                nome: 'Ale',
                avatar: '_2',
                visible: false,
                messages: [
                    {
                        date: '15:30',
                        message: 'Ehii, ci sei al compleanno di Luca',
                        status: 'received'
                    },
                    {
                        date: '15:33',
                        message: 'Sii certo',
                        status: 'sent'
                    },
                    {
                        date: '15:37',
                        message: 'Oh fantastico, non riesco a decidere cosa mettere',
                        status: 'received'
                    },
                    {
                        date: '15:33',
                        message: 'Ah guarda non ne ho idea, parliamo con gli altri e vediamo',
                        status: 'sent'
                    },
                ]
            },
            {
                nome: 'Peppe',
                avatar: '_3',
                visible: false,
                messages: [
                    {
                        date: '15:30',
                        message: 'Vuoi venire al cinema stasera?',
                        status: 'sent'
                    },
                    {
                        date: '15:33',
                        message: 'A vedere cosa?',
                        status: 'sent'
                    },
                    {
                        date: '15:37',
                        message: 'Non so decidiamo sul momento',
                        status: 'sent'
                    },
                ]
            },
            {
                nome: 'Ori',
                avatar: '_4',
                visible: false,
                messages: [
                    {
                        date: '15:30',
                        message: 'Vuoi venire al cinema stasera?',
                        status: 'sent'
                    },
                    {
                        date: '15:33',
                        message: 'A vedere cosa?',
                        status: 'sent'
                    },
                    {
                        date: '15:37',
                        message: 'Non so decidiamo sul momento',
                        status: 'sent'
                    },
                ]
            },
            {
                nome: 'Myxi',
                avatar: '_5',
                visible: false,
                messages: [
                    {
                        date: '15:30',
                        message: 'Vuoi venire al cinema stasera?',
                        status: 'sent'
                    },
                    {
                        date: '15:33',
                        message: 'A vedere cosa?',
                        status: 'sent'
                    },
                    {
                        date: '15:37',
                        message: 'Non so decidiamo sul momento',
                        status: 'sent'
                    },
                ]
            },
            {
                nome: 'Antonio',
                avatar: '_6',
                visible: false,
                messages: [
                    {
                        date: '15:30',
                        message: 'Vuoi venire al cinema stasera?',
                        status: 'sent'
                    },
                    {
                        date: '15:33',
                        message: 'A vedere cosa?',
                        status: 'sent'
                    },
                    {
                        date: '15:37',
                        message: 'Non so decidiamo sul momento',
                        status: 'sent'
                    },
                ]
            },
            {
                nome: 'Giorgia',
                avatar: '_7',
                visible: false,
                messages: [
                    {
                        date: '15:30',
                        message: 'Vuoi venire al cinema stasera?',
                        status: 'sent'
                    },
                    {
                        date: '15:33',
                        message: 'A vedere cosa?',
                        status: 'sent'
                    },
                    {
                        date: '15:37',
                        message: 'Non so decidiamo sul momento',
                        status: 'sent'
                    },
                ]
            },
            {
                nome: 'Luca',
                avatar: '_8',
                visible: false,
                messages: [
                    {
                        date: '15:30',
                        message: 'Vuoi venire al cinema stasera?',
                        status: 'sent'
                    },
                    {
                        date: '15:33',
                        message: 'A vedere cosa?',
                        status: 'sent'
                    },
                    {
                        date: '15:37',
                        message: 'Non so decidiamo sul momento',
                        status: 'sent'
                    },
                ]
            },
        ],
        currentChat: 0,
    },
    methods: {
        
    }
})