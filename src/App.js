import {connect} from "react-redux";
import {addStatuses, getCards, getStatuses} from "./redux/action";
import {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import CardController from "./Components/CardController";
import StatusesController from "./Components/StatusesController";
import Board from "./Components/Board";


function App(props) {

    useEffect(() => {
        props.getCardsToProps()
        props.getStatusesToProps()
    }, [])

    // const addCard = (newTitle, newDescription, newStatus, newPriority) => {
    //     const newCard = {
    //         title: newTitle,
    //         description: newDescription,
    //         status: newStatus,
    //         priority: newPriority
    //     }
    //     props.addCard(newCard)
    // }

    const addStatus = (newTitle) => {
        const newStatus = {
            title: newTitle
        }
        props.addStatuses(newStatus)
    }

    return (
        <div className="container">
            <h1>{props.title}</h1>

            <hr/>
            <CardController/>
            <StatusesController addStatus={addStatus}/>
            <hr/>

            <Board
                statuses={props.statuses}
                cards={props.cards}
            />


        </div>
    );
}

const mapStateToProps = (state) => ({
    title: state.title,
    statuses: state.statuses,
    cards: state.cards
})

const mapDispatchToProps = (dispatch) => ({
    getStatusesToProps: () => dispatch(getStatuses()),
    getCardsToProps: () => dispatch(getCards()),
    addStatuses: (statuses) => dispatch(addStatuses(statuses))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
