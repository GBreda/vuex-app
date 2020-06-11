import CharacterImage from './components/character-image/CharacterImage.vue';
import CharacterBasicInfo from './components/character-basic-info/CharacterBasicInfo.vue';
import CharacterDetailedInfo from './components/character-detailed-info/CharacterDetailedInfo.vue';
import ChangeButton from './components/change-button/change-button.vue';
import { mapActions } from 'vuex';

 export default {
    name: 'App',
    components: {
        'character-image': CharacterImage,
        'character-basic-info': CharacterBasicInfo,
        'character-detailed-info': CharacterDetailedInfo,
        'change-button': ChangeButton,
    },
    mounted() {
        this.characterInfo(this.randomNumber);
    },
    methods: {
        ...mapActions(['characterInfo']),
    },
    computed: {
        randomNumber() {
            const number = Math.round((Math.random() * 100));
            if (number > 0) return number;
        },
    },
}