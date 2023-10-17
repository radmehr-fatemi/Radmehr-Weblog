import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//MUI
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useMutation } from '@apollo/client';

//URI
import { CREATE_COMMENT_INFO } from '../../graphql/mutations';

//function
import { commentValidation } from '../shared/validation';

const CommentField = ({ slug }) => {



    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const [createComment, { data, loading }] = useMutation(CREATE_COMMENT_INFO, {
        variables: { name, email, text, slug }
    });

    const commentHandler = () => {
        if (commentValidation(name, email, text)) {
            createComment()
            toast.info("نظر شما ثبت و در صف برسی قرار گرت", { position: 'top-center' })
        } else {
            toast.error("اعطلاعات وارد شده نا معتبر است", { position: 'top-center' })
        }
    }

    return <Grid container spacing={1.2} py={1} >

        <Grid item xs={12} >
            <Typography
                component="h3"
                variant='h6'
                fontWeight="700"
                color="#224Fcf"
            > نظر خود را ثبت کنید : </Typography>
        </Grid>

        <Grid item xs={12} >
            <TextField
                id="outlined-basic"
                label="نام کاربری"
                variant="outlined"
                fullWidth
                size='small'
                value={name}
                onChange={({ target: { value } }) => setName(value)}
            />
        </Grid>

        <Grid item xs={12} >
            <TextField
                id="outlined-basic"
                label="ایمیل"
                type='email'
                variant="outlined"
                fullWidth
                size='small'
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
            />
        </Grid>

        <Grid item xs={12} >
            <TextField
                id="outlined-basic"
                label="متن"
                variant="outlined"
                fullWidth
                size='small'
                multiline
                minRows={3}
                value={text}
                onChange={({ target: { value } }) => setText(value)}
            />
        </Grid>

        <Grid item xs={12} >
            <Button size='small' variant='contained' onClick={commentHandler} > ارسال </Button>
        </Grid>

        <ToastContainer style={{
            fontSize: ".8rem",
            textAlign: "right",
            top: ".6rem",
            fontWeight: "700",
            padding : "0 8px",
        }} />
    </Grid>
};

export default CommentField;