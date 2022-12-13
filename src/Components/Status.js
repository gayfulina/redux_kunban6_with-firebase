import CardItem from "./CardItem";
import DeleteStatus from "./DeleteStatus";

const Column = (props) => {
    const {cards, statuses} = props;

    return (
        <div className='col-3 border-end'>
            <div className='d-flex justify-content-between align-items-center'>
                <h2>{statuses.title}</h2>
                <DeleteStatus id={statuses.id}/>
            </div>

            {cards
                .filter(el => el.status === statuses.title)
                .map(el => <CardItem card={el} key={el.id}/>
                )
            }
        </div>
    )
}

export default Column;