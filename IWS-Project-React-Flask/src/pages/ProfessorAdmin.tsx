import React from "react";
import Header from "../components/Header";
import PNRTable from "../components/PNRTable";
import ProfessorCourseCard from "../components/ProfessorCourseCard";

const ProfessorAdmin = (props: any) => {
  return (
    <>
      <Header title={props.title} />
      <ProfessorCourseCard />
      <PNRTable />
    </>
  );
};

export default ProfessorAdmin;
