import React from "react";
import Header from "../components/Header";
import UserRegistrationForm from "../components/UserRegistrationForm";

const UserRegistrationPage = (props:any) => {
    return(
        <>
        <Header title={props.title} />
        <UserRegistrationForm/>
        </>
    );
};

export default UserRegistrationPage;