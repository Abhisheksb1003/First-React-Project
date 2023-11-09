import React, {useState,Fragment} from 'react';
import UserList from './components/User/UserList';


import AddUser from './components/User/AddUser';


function App() {
  const [userlist,setuserlist]=useState([]);

  const adduserhandler=(uName,uAge,uCollege)=>{
    setuserlist((prevUserList)=>{
      return [...prevUserList,{name:uName,age:uAge,college:uCollege, id:Math.random().toString }];
    });
  }
  return (

    <Fragment>
        <AddUser onAddUser={adduserhandler}/>
        <UserList users={userlist}/>
    </Fragment>
  );
}

export default App;
