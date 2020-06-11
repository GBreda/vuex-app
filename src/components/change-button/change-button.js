import { mapActions, mapState } from 'vuex';

export default {
    name: 'change-button',
    methods: {
        changeCharacter() {
            this.characterInfo(this.randomNumber());
        },
        randomNumber() {
            const number = Math.round((Math.random() * 100));
            if (number > 0) return number;
        },
        ...mapActions(['characterInfo']),
    },
    computed: {
        ...mapState(['buttonStatus']),
    }
}