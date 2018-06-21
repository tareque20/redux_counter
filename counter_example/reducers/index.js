import { INCREMENT, DECREMENT } from '../constants/types.js';

export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state <= 0 ? 0 : state - 1;
        default:
            return state;
    }
}
