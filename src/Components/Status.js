import CardItem from "./CardItem";
import DeleteStatus from "./DeleteStatus";
import EditStatus from "./EditStatus";

const Column = (props) => {
    const {cards, status} = props;

    return (
        <div className='col-lg-3 border-end'>
            <h3 className='text-center'>{status.title}</h3>
            <div className='d-flex justify-content-between align-items-center'>
                <EditStatus statuses={status}/>
                <DeleteStatus id={status.id}/>
            </div>

            {cards
                .filter(el => el.status === status.title)
                .sort((a, b) => b.priority - a.priority)
                .map(el => <CardItem
                        card={el}
                        key={el.id}
                    />
                )
            }
        </div>
    )
}

export default Column;