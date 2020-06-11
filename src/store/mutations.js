const GET_CHARACTER = (state, payload) => {
    state.info = payload;
}

const BLOCK_BUTTON = (state, payload) => {
    state.buttonStatus = payload;
}

export default {
    GET_CHARACTER,
    BLOCK_BUTTON
}