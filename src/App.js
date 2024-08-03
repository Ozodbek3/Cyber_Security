import styled, { ThemeProvider } from "styled-components";
import RoutesContainer from "./components/routes";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled("div")``;

const App = ({ routes }) => {
  return (
    <Container>
      <RoutesContainer routes={routes} />
      <ToastContainer />
    </Container>
  );
};

export default App;
