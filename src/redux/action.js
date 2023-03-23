import axios from 'axios';

export function getCards() {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `https://kanban-bb570-default-rtdb.firebaseio.com/cards.json`
        })
            .then(res => {
                const data = res.data;
                const cards = [];

                for (const key in data) {
                    cards.push({
                        id: key,
                        title: data[key].title,
                        description: data[key].description,
                        status: data[key].status,
                        priority: data[key].priority
                    })
                }

                dispatch({
                    type: 'GET_CARDS',
                    payload: cards
                })
            })
            .catch(err => console.log(err, 'GET CARDS ERROR'))
    }
}

export function getStatuses() {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `https://kanban-bb570-default-rtdb.firebaseio.com/statuses.json`
        })
            .then(res => {
                const data = res.data;
                const statuses = [];

                for (const key in data) {
                    statuses.push({
                        id: key,
                        status: data[key].status
                    })
                }

                dispatch({
                    type: 'GET_STATUSES',
                    payload: statuses
                })
            })
            .catch(err => console.log(err, 'GET STATUSES ERROR'))
    }
}


export function addCard(card) {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `https://kanban-bb570-default-rtdb.firebaseio.com/cards.json`,
            data: card
        })
            .then(res => dispatch(getCards()))
            .catch(err => console.log(err, "POST CARDS ERROR"))
    }

}

export function addStatuses(statuses) {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `https://kanban-bb570-default-rtdb.firebaseio.com/statuses.json`,
            data: statuses
        })
            .then(res => dispatch(getStatuses()))
            .catch(err => console.log(err, 'POST STATUSES ERROR'))
    }
}

export function deleteCard(cardId) {
    return (dispatch) => {
        axios({
            method: 'DELETE',
            url: `https://kanban-bb570-default-rtdb.firebaseio.com/cards/${cardId}.json`,
        })
            .then(res => dispatch(getCards()))
            .catch(err => console.log(err, 'DELETE CARD ERROR'))
    }
}

export function deleteStatus(statusId) {
    return (dispatch) => {
        axios({
            method: 'DELETE',
            url: `https://kanban-bb570-default-rtdb.firebaseio.com/statuses/${statusId}.json`,
        })
            .then(res => dispatch(getStatuses()))
            .catch(err => console.log(err, 'DELETE  STATUS ERROR'))
    }
}

export function updateCard(cardId, updatedCard) {
    return (dispatch) => {
        axios({
            method: 'PATCH',
            url: `https://kanban-bb570-default-rtdb.firebaseio.com/cards/${cardId}.json`,
            data: updatedCard
        })
            .then(res => dispatch(getCards()))
            .catch(err => console.log(err, 'UPDATE CARD ERROR'))
    }
}

export function updateStatus(statusId, updatedStatus) {
    return (dispatch) => {
        axios({
            method: 'PATCH',
            url: `https://kanban-bb570-default-rtdb.firebaseio.com/statuses/${statusId}.json`,
            data: updatedStatus
        })
            .then(res => dispatch(getStatuses()))
            .catch(err => console.log(err, 'UPDATE STATUS ERROR'))
    }
}

export function changeStatus(card, columns, value) {
    const statuses = columns.map(el => el.status);
    const status =  statuses[statuses.indexOf(card.status) + value];
    return (dispatch) => {
        axios({
            method: 'PATCH',
            url: `https://kanban-bb570-default-rtdb.firebaseio.com/cards/${card.id}.json`,
            data: {status}
        })
            .then(res => dispatch(getCards()))
            .catch(err => console.log(err, 'ERROR'))
    }
}

export function changePriority(cardId, value) {
    return (dispatch) => {
        axios({
            method: 'PATCH',
            url: `https://kanban-bb570-default-rtdb.firebaseio.com/cards/${cardId}.json`,
            data: {priority: value}
        })
            .then(res => dispatch(getCards()))
            .catch(err => console.log(err, 'UPDATE PRIORITY ERROR'))
    }
}
