"use client"
import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import { UserDetailsContext } from '@/context/UserDetailsContext';

export type UsersDetails={
  name:string;
  email:string;
  credits:number;

}
function provider({ children }:Readonly<{ children: React.ReactNode }>) {
  const {user}=useUser();
  const [userDetails, setUserDetails] = useState<any>();

  useEffect(() => {
    CreateNewUser();
  }, [user]);

  
  const CreateNewUser = async () => {
    const result =await axios.post('./api/users');
    console.log(result);
    setUserDetails(result.data);

  }

  return (
    <div>
      <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
      </UserDetailsContext.Provider>
    </div>
  )
}

export default provider
