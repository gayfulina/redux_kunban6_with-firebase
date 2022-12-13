import React from 'react';
import {Button} from "@mui/material";
import {connect} from "react-redux";
import {deleteCard} from "../redux/action";

const DeleteCard = (props) => {
    return (
        <div>
            <Button
                onClick={() => props.deleteCard(props.id)}
                size='large'
                color="error"
                variant='outlined'
                className='m-3'
            >
                ✕
            </Button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    deleteCard: (cardId) => dispatch(deleteCard(cardId))
})


export default connect(null, mapDispatchToProps)(DeleteCard);