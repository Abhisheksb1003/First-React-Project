import React, {useState} from 'react';
import UserList from './components/User/UserList';


import AddUser from './components/User/AddUser';


function App() {
  const [userlist,setuserlist]=useState([]);

  const adduserhandler=(uName,uAge)=>{
    setuserlist((prevUserList)=>{
      return [...prevUserList,{name:uName,age:uAge, id:Math.random().toString }];
    });
  }
  return (
    <div>
        <AddUser onAddUser={adduserhandler}/>
        <UserList users={userlist}/>
    </div>
  );
}

export default App;
