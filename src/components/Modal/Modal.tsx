import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface IModalProps {

}

const Modal = () => {
    // TODO read documentation about what Transition is doing

    return (
        <div>
            <Dialog
                open={false}
                keepMounted

                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary">
                        Disagree
          </Button>
                    <Button color="primary">
                        Agree
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}


export default Modal;