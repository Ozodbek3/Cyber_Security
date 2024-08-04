import styled from "styled-components";
import LoginForm from "../components/LoginForm";

import {
  AtSign,
  UserPlus,
  UploadCloud,
  Edit3,
  LogIn,
  Mail,
} from "react-feather";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 110;
  background-image:url('https://www.ceo-review.com/wp-content/uploads/2020/11/cyber.jpg');
`;
const Logincontainer = styled("div")``;

const LoginContainer = () => {
  return (
    <Container>
      <Logincontainer>
        <LoginForm />
      </Logincontainer>
    </Container>
  );
};

export default LoginContainer;
