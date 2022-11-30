import React from "react";
import Header from "../components/Header";
import PnsCard from "../components/PnsCard";

const HomePage = (props:any) => {
    return(
        <>
        <Header title={props.title}></Header>
        <PnsCard/>
        </>
    );
};

export default HomePage;