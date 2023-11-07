import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModule from '../UI/ErrorModule';

const AddUser = (props)=>{
    const [enterusername,setusername] =useState('');
    const [enterage,setage] =useState('');
    const [error,seterror]=useState()

    const adduserhandler=(event)=>{
        event.preventDefault();
        if(enterusername.trim().length===0 || enterage.trim().length===0){
            seterror({
                title:'Invalid input',
                message:'Please enter a valid name and age(non-empty values)'
            });
            return;
        }
        if(+enterage<1){
            seterror({
                title:'Invalid Age',
                message:'Please Enter a Valid Age (>0)'
            });
            return;
        }
        props.onAddUser(enterusername,enterage);
        setusername('');
        setage('');
    };

    const usernamechangehandler=(event)=>{
        setusername(event.target.value)
    };

    const agechangehandler=(event)=>{
        setage(event.target.value)
    }

    const errorhandler=()=>{
        seterror(null);
    }

    return (
        <div>
        {error && <ErrorModule title={error.title} message={error.message} onConfirm={errorhandler}/>}
        <Card className={classes.input}>
        <form onSubmit={adduserhandler}>
            <label htmlFor="username">UserName</label>
            <input id="username" type="text" value={enterusername} onChange={usernamechangehandler}/>
            <label htmlFor="age">Age (Years) </label>
            <input id="age" type="number" value={enterage} onChange={agechangehandler}/>
            <Button type="submit">Add User</Button>
        </form>
      
        
        </Card>
        </div>
    );
};

export default AddUser;