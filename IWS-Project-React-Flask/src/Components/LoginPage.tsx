import { stringify } from "querystring";
import React,{ useEffect, useState } from "react";

export const LoginPage: any = () => {
    const [userEmail, setUserEmail] = useState(['']);
    
    useEffect(()=>{
        fetch('/api').then(response => {
            if (response.ok){
                setUserEmail(Object(response))
            }
        })
    },[])
    
    return (
        <>
        <form action="">
            <input type="text" />
            <p>{userEmail}</p>
        </form>
        </>
    )
}