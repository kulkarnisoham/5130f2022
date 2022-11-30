import { defaultMaxListeners } from "events";
import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import StudentCourseCard from "../components/StudentCourseCard";
import UserProfileCard from "../components/UserProfileCard";

const ProfessorProfilePage = (props: any) => {
  return (
    <>
      <Header title="Professors Profile and Courses Offered" />
      <Container>
        <UserProfileCard />
        <StudentCourseCard />
      </Container>
    </>
  );
};

export default ProfessorProfilePage;
