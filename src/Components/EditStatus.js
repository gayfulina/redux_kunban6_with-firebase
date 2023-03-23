import {useState} from "react";
import ModalKanban from "../UI/ModalKanban";
import {updateStatus} from "../redux/action";
import {connect} from "react-redux";
import {TextField} from "@mui/material";

const EditStatus = (props) => {
    const [newStatus, setNewStatus] = useState(props.column.status)

    const editStatusHandler = () => {
        props.updateStatus(props.column.id, {
           status: newStatus
        })
    };


    return (
        <ModalKanban
            buttonOpen='Update Status'
            modalTitle='EDIT STATUS'
            addOnClose={editStatusHandler}
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
    );
};

const mapDispatchToProps = (dispatch) => ({
    updateStatus: (statusId, updatedStatus) => dispatch(updateStatus(statusId, updatedStatus))
})

export default connect(null, mapDispatchToProps)(EditStatus);