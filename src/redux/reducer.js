const initialState = {
    cards: [],
    statuses: [],
    priorities: [],
    title: 'Kanban board'
}

const kanban = (state = initialState, action) => {

    switch (action.type) {
        case "GET_CARDS":
            return {
                ...state,
                cards: action.payload
            }

        case "GET_STATUSES":
            return {
                ...state,
                statuses: action.payload
            }

        default:
            return state
    }
}

export default kanban;