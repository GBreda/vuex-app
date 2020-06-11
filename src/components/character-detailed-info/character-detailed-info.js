import { mapState } from 'vuex';

export default {
    name: 'character-detailed-info',
    computed: {
        ...mapState(['info']),
    }
}