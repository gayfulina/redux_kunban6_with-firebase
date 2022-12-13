import ModalKanban from "../UI/ModalKanban";
import { TextField} from "@mui/material";
import {useState} from "react";

const StatusesController = (props) => {
    const [newStatus, setNewStatus] = useState('ToDo')

    const addStatusHandler = () => {
        props.addStatus(newStatus)
        setNewStatus('')
    };


    return (
        <ModalKanban
            buttonOpen='Add Status'
            modalTitle='ADD NEW STATUS'
            addOnClose={addStatusHandler}
        >
            <TextField label="New Status"
                       variant="outlined"
                       type="text"
                       value={newStatus}
                       onChange={(e) => setNewStatus(e.target.value)}
                       fullWidth
                       className='my-4'
            />
        </ModalKanban>
    )
}

export default StatusesController;