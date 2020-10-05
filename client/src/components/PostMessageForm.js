import React from 'react';
import { TextField, withStyles, Button } from '@material-ui/core';
import ButterToast, { Cinamo } from 'butter-toast';
import { AssignmentTurnedIn } from '@material-ui/icons';
import { connect } from 'react-redux';
import useForm from './useForm';
import * as actions from '../actions/postMessage';

const initialFieldValues = {
    title: '',
    message: ''
}

const handleSubnmit = e => {
    e.preventDefault()
    console.log("clicked")
}

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        },
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    postBtn: {
        width: "50%"
    }
})

const PostMessageForm = (props) => {
    return (
        <form autoComplete="off" onSubmit={handleSubnmit} >
            <TextField 
                name="title"
                variant="outlined"
                label="Title"
                fullWidth
            />
            <TextField 
                name="message"
                variant="outlined"
                label="Message"
                fullWidth
                multiline
                rows={4}
            />
            <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
            >Submit</Button>
        </form>
    )
}

const mapStateToProps = state => ({
    postMessageList: state.postMessage.list
})

const mapActionsToProps = {
    createPostMessage: actions.create
}

export default connect()(withStyles(styles)(PostMessageForm));