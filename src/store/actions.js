import axios from 'axios';

const characterInfo = ({ commit }, payload) => {
    axios
        .get(`https://rickandmortyapi.com/api/character/${payload}`)
        .then(response => {
            commit('BLOCK_BUTTON', true);
            commit('GET_CHARACTER', response.data);
        })
        .catch(error => console.log(error))
        .finally(() => commit('BLOCK_BUTTON', false))
}

export default {
    characterInfo,
}