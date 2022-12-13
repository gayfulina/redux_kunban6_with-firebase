import {Button, Card, CardContent, CardHeader} from "@mui/material";
import DeleteCard from "./DeleteCard";
import EditCard from "./EditCard";

const CardItem = (props) => {


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
                    <Button variant='outlined'>
                        ↑
                    </Button>
                    <p>{props.card.priority}</p>
                    <Button variant='outlined'>
                        ↓
                    </Button>
                </div>

                <div className='d-flex justify-content-between align-items-center my-3'>
                    <Button variant='outlined'>→</Button>
                    <Button variant='outlined'>←</Button>
                </div>

                <div className='d-flex border-top'>
                    <EditCard card={props.card}/>
                    <DeleteCard id={props.card.id}/>
                </div>

            </CardContent>
        </Card>
    )
}

export default CardItem;
