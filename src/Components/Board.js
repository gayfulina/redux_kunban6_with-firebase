import Column from "./Status";

const Board = (props) => {
    return (
        <div className='row'>
            {props.statuses.map(el =>
                <Column
                    key={el.id}
                    statuses={el}
                    cards={props.cards}
                />
            )}

        </div>
    )
}

export default Board;