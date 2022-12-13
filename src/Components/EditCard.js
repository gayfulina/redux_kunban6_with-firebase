import React, {useState} from 'react';
import ModalKanban from "../UI/ModalKanban";
import {updateCard} from "../redux/action";
import {connect} from "react-redux";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

const EditCard = (props) => {
    const [newTitle, setNewTitle] = useState(props.card.title);
    const [newDescription, setNewDescription] = useState(props.card.description)
    const [newStatus, setNewStatus] = useState(props.card.status)
    const [newPriority, setNewPriority] = useState(props.card.priority)


    const editCardHandler = () => {
        props.updateCard(props.card.id, {
            title: newTitle,
            description: newDescription,
            status: newStatus,
            priority: newPriority
        })
    };

    return (
            <ModalKanban
                buttonOpen='Update'
                modalTitle='EDIT CARD'
                addOnClose={editCardHandler}
            >

                <TextField label="New Title"
                           variant="outlined"
                           type="text"
                           value={newTitle}
                           onChange={(e) => setNewTitle(e.target.value)}
                           fullWidth
                           className='my-4'

                />

                <TextField label="New Description"
                           variant="outlined"
                           type="text"
                           value={newDescription}
                           onChange={(e) => setNewDescription(e.target.value)}
                           fullWidth
                />

                <FormControl fullWidth className='my-4'>
                    <InputLabel id="priority-select-label">New Priority</InputLabel>
                    <Select
                        labelId="priority-select-label"
                        label="New Priority"
                        value={newPriority}
                        onChange={(e) => setNewPriority(e.target.value)}
                    >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                    </Select>
                </FormControl>


                <FormControl fullWidth className='my-4'>
                    <InputLabel id="status-select-label">New Status</InputLabel>
                    <Select
                        labelId="status-select-label"
                        label="New Status"
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                    >
                        <MenuItem value="ToDo">ToDo</MenuItem>
                        <MenuItem value="InProgress">InProgress</MenuItem>
                        <MenuItem value="InReview">InReview</MenuItem>
                        <MenuItem value="QA">QA</MenuItem>
                        <MenuItem value="Done">Done</MenuItem>
                    </Select>
                </FormControl>



            </ModalKanban>
    );
};

const mapDispatchToProps = (dispatch) => ({
    updateCard: (cardId, updatedCard) => dispatch(updateCard(cardId, updatedCard))
})


export default connect(null, mapDispatchToProps)(EditCard);