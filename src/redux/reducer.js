const initialState = {
    cards: [],
    statuses: [],
    priorities: [
        {priority: 1},
        {priority: 2},
        {priority: 3},
        {priority: 4},
        {priority: 5},
    ],
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