import CardItem from "./CardItem";
import DeleteStatus from "./DeleteStatus";
import EditStatus from "./EditStatus";

const Column = (props) => {
    const {cards, column} = props;

    return (
        <div className='col-lg-3 border-end'>
            <h3 className='text-center'>{column.title}</h3>
            <div className='d-flex justify-content-between align-items-center'>
                <EditStatus column={column}/>
                <DeleteStatus id={column.id}/>
            </div>

            {cards
                .filter(el => el.status === column.status)
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