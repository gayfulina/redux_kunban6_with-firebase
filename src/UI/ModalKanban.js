import {Box, Button, Modal} from "@mui/material";
import {useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalKanban = (props) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)
    const handleClose = () => setOpen(false);

    const onCloseModal = () => {
        props.addOnClose()
        handleClose()
    }


    return (
        <>
                <Button
                    onClick={handleOpen}
                    size='large'
                    color='primary'
                    variant='outlined'
                    className='m-3'
                >
                    {props.buttonOpen}
                </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2>{props.modalTitle}</h2>
                    <section>
                        {props.children}

                        <Button
                            onClick={onCloseModal}
                            variant="contained"
                            size="large"
                            color="success"
                        >
                            {props.buttonOpen}
                        </Button>
                    </section>
                </Box>
            </Modal>
        </>
    )
}

export default ModalKanban;
