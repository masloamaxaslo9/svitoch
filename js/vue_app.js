// Click for #mask reset all value;
let mask = new Vue({
   el: '#mask',
    methods: {
        onClickMask: function () {
            popap_vue.seen_text_p = true;
            popap_vue.title_popap = 'Увійти';
        }
    }
});
// Popap settings;
let popap_vue = new Vue({
    el: '#popap_vue',
    data: {
        title_popap: 'Увійти',
        message: 'imfkvd@gmail.com',
        seen_text_p: true,
        button_popap: 'Так'
    },
    methods: {
        yesFunc: function () {
            this.seen_text_p =  false;
            this.title_popap = 'Лист з посиланням для продовження реєстрації вже у вас на пошті';
            this.button_popap = 'Відкрити пошту';
        },
        noFunc: function () {
            this.message = 'Click on No';
        }
    }
});
