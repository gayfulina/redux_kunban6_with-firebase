import Column from "./Status";

const Board = (props) => {
    return (
        <div className='row bg-light'>
            {props.statuses.map(el =>
                <Column
                    key={el.id}
                    status={el}
                    cards={props.cards}
                />
            )}

        </div>
    )
}

export default Board;