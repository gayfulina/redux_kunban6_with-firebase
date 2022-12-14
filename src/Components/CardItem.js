import {Button, Card, CardContent, CardHeader} from "@mui/material";
import DeleteCard from "./DeleteCard";
import EditCard from "./EditCard";
import {connect} from "react-redux";
import {changePriority, changeStatus} from "../redux/action";

const CardItem = (props) => {
    const isLast = props.status === props.statuses[props.statuses.length - 1].status
    const isFirst = props.status === props.statuses[0].status


    return (
        <Card variant="outlined" className='text-center m-2'>
            <CardHeader
                title={props.card.title}
                subheader={props.card.status}
                className='border-bottom'
            />

            <CardContent>
                <p className='border-bottom pb-4'>{props.card.description}</p>

                <div className='d-flex justify-content-between align-items-center my-3'>
                    <Button variant='outlined' color='success'
                            onClick={() => props.changePriority(props.card.id, props.card.priority + 1)}
                    >
                        ↑
                    </Button>
                    <p>{props.card.priority}</p>
                    <Button variant='outlined' color='success'
                            onClick={() => props.changePriority(props.card.id, props.card.priority - 1)}
                    >
                        ↓
                    </Button>
                </div>

                <div className='d-flex justify-content-between align-items-center my-3'>
                    <Button variant='outlined' color='success'
                            onClick={() => props.changeStatus(props.card, props.status, 1)}
                    >
                        →
                    </Button>
                    <Button variant='outlined' color='success'
                            onClick={() => props.changeStatus(props.card, props.status, -1)}
                    >
                        ←
                    </Button>
                </div>

                <div className='d-flex justify-content-lg-between border-top'>
                    <EditCard card={props.card}/>
                    <DeleteCard id={props.card.id}/>
                </div>

            </CardContent>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    statuses: state.statuses,
})

const mapDispatchToProps = (dispatch) => ({
    changeStatus: (card, columns, value) => dispatch(changeStatus(card, columns, value)),
    changePriority: (cardId, value) => dispatch(changePriority(cardId, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
