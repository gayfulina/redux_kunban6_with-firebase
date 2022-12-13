import React from 'react';
import {Button} from "@mui/material";
import {connect} from "react-redux";
import {deleteStatus} from "../redux/action";

const DeleteStatus = (props) => {
    return (
        <div>
            <Button
                onClick={() => props.deleteStatus(props.id)}
                size='large'
                color="error"
                className='m-3'
            >
                ✕
            </Button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    deleteStatus : (cardId) => dispatch(deleteStatus(cardId))
})


export default connect(null, mapDispatchToProps)(DeleteStatus);