import React from "react";
import Header from "../components/Header";
import UserLoginForm from "../components/UserLoginForm";

const UserLoginPage = (props:any) => {
    return(
        <>
        <Header title={props.title} />
        <UserLoginForm/>
        </>
    );
};

export default UserLoginPage;