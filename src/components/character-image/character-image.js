import { mapState } from 'vuex';

export default {
    name: 'character-image',
    computed: {
        ...mapState(['info']),
    }
}