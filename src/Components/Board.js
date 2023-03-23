import Column from "./Status";

const Board = (props) => {
    return (
        <div className='row bg-light g-2'>
            {props.statuses.map(el =>
                <Column
                    key={el.id}
                    column={el}
                    cards={props.cards}
                />
            )}

        </div>
    )
}

export default Board;