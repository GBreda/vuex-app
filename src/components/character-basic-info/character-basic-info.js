import { mapState } from 'vuex';

export default {
    name: 'character-basic-info',
    computed: {
        ...mapState(['info']),
    }
}