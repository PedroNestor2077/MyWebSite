import React,{useState} from "react"
import {Button,TextField,Switch,FormControlLabel} from "@material-ui/core"
import { TextareaAutosize } from '@material-ui/core';



function EmailForm(props){

  return(
    <form
      id="EmailForm"
      onSubmit={(event)=>{
        props.action(event)
      }}>
      <TextField 
        name="from_name" 
        label="Nome" 
        variant='filled'
        fullWidth 
        margin="normal"
      />
      <TextField 
        name="reply_to"
        id="lastName" 
        label="Email" 
        variant='filled'
        fullWidth 
        margin="normal"
      />
            
      <TextField 
        name="phone_number"
        id="CPF" 
        label="Telefone" 
        variant='filled' 
        fullWidth 
        margin="normal"
      />
       <TextareaAutosize 
        name='message'
        aria-label="minimum height" 
        rowsMin={5} 
        rowsMax={5} 
        placeholder="Mensagem" 
      />
      


      <Button 
        type="submit" 
        variant="contained" 
        color="primary"> 
        Enviar
      </Button>
    </form>
  );
};
export default EmailForm