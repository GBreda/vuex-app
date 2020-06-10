import CharacterImage from './components/character-image/CharacterImage.vue';
import CharacterBasicInfo from './components/character-basic-info/CharacterBasicInfo.vue';
import CharacterDetailedInfo from './components/character-detailed-info/CharacterDetailedInfo.vue';
import ChangeButton from './components/change-button/change-button.vue';

export default {
    name: 'App',
    components: {
        'character-image': CharacterImage,
        'character-basic-info': CharacterBasicInfo,
        'character-detailed-info': CharacterDetailedInfo,
        'change-button': ChangeButton,
    },
}