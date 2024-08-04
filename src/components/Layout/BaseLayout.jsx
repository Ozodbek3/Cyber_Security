import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";

const Container = styled("div")`
  height: 100vh;
  background-color: white;
`;

const ChildrenComponent = styled("div")`
  color: white;
`;

const BaseLayout = ({ children }) => {
  return (
    <Container>
      <Navbar></Navbar>
      <ChildrenComponent>{children}</ChildrenComponent>
      <Footer></Footer>
    </Container>
  );
};

export default BaseLayout;
