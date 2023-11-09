import React, { useState,useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModule from '../UI/ErrorModule';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props)=>{
    const nameinputref=useRef();
    const ageinputref=useRef();
    const collegeinputref=useRef();

  
    const [error,seterror]=useState()

    const adduserhandler=(event)=>{
        event.preventDefault();
        const enteredname=nameinputref.current.value;
        const enteredage=ageinputref.current.value;
        const enteredcollege=collegeinputref.current.value;
        if(enteredname.trim().length===0 || enteredage.trim().length===0 || enteredcollege.trim().length===0){
            seterror({
                title:'Invalid input',
                message:'Please enter a valid name and age(non-empty values) & collegename'
            });
            return;
        }
        if(+enteredage<1){
            seterror({
                title:'Invalid Age',
                message:'Please Enter a Valid Age (>0)'
            });
            return;
        }
        props.onAddUser(enteredname,enteredage,enteredcollege);
       nameinputref.current.value='';
       ageinputref.current.value='';
       collegeinputref.current.value='';
    };

   
    const errorhandler=()=>{
        seterror(null);
    }

    return (

        <Wrapper>
        {error && <ErrorModule title={error.title} message={error.message} onConfirm={errorhandler}/>}
        <Card className={classes.input}>
        <form onSubmit={adduserhandler}>
            <label htmlFor="username">UserName</label>
            <input id="username" type="text" 
            ref={nameinputref}
            />
            <label htmlFor="age">Age (Years) </label>
            <input id="age" type="number" 
            ref={ageinputref}
            />
             <label htmlFor="College Name">College Name </label>
            <input id="clgname" type="text" 
            ref={collegeinputref}
            />
            <Button type="submit">Add User</Button>
        </form>
      
        
        </Card>
        </Wrapper>
    );
};

export default AddUser;