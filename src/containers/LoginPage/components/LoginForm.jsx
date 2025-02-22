import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { cookieData } from "../../../utils/cookies";
import * as ROUTES from "../../../constants/routes";
import { parol } from "./emails";

// Styled Components
const LoginFormContainer = styled.div`
  display: flex;
  border: 2px solid;
  border-radius: 2px;
  flex-direction: column;
  border-radius: 5px;
  padding: 30px;
  width: 25vw;
  height: 35vh;
  border-radius: 3rem;
`;
const Login = styled.div``;
const LoginFormTitle = styled.h2`
  margin-bottom: 35px;
  margin-left: 2.6rem;
`;
const LoginFormInput = styled.input`
  padding: 10px;
  border-radius: 2rem;
  margin-left: 10%;
  margin-bottom: 20px;
  width: 70%;
  font-size: 16px;
`;
const LoginFormButton = styled.button`
  cursor: pointer;
  margin-left: 10%;
  width: 8rem;
  height: 2.5rem;
  border: none;
  border-radius: 2rem;
  color: white;
  background-color: rgb(80, 241, 86);
  &:hover {
    transition: 0.3s;
    background-color: rgb(73, 177, 77);
  }
`;
const PhoneNum = styled.h4`
  color: #b58a8a;
  cursor: pointer;
  &&:hover {
    text-decoration: underline;
  }
`;
const RegisterType = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PhoneInput = styled.input`
  position: relative;
  top: 2rem;
  padding: 10px;
  border-radius: 2rem;
  margin-left: 10%;
  margin-bottom: 20px;
  width: 70%;
  font-size: 20px;
`;
const LoginPhone = styled.div``;
const LoginPhoneButton = styled.button`
  position: relative;
  top: 3rem;
  left: 2.5rem;
  cursor: pointer;
  width: 6rem;  
  height: 2.5rem;
  border: none;
  border-radius: 2rem;
  color: white;
  background-color: rgb(76, 175, 80);
  box-shadow: 14px -9px teal;
  &:hover {
    transition: 0.3s;
    background-color: rgb(62, 142, 65);
  }
`;
const Email = styled.h4`
  position: relative;
  left: 12rem;
  cursor: pointer;
  &&:hover {
    text-decoration: underline;
  }
`;

// Main Component
const LoginForm = () => {
  const [formState, setFormState] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const FormChange = () => {
    setFormState((prevState) => (prevState === 0 ? 1 : 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = parol.find(
      (user) => (user.login === email && user.pwd === password) || user.PhoneNumber === PhoneNumber
    );

    if (user) {
      cookieData("token").setValue("some-auth-token");
      cookieData("email").setValue(user.login)
      cookieData("username").setValue(user.username);
      cookieData("password").setValue(user.pwd);
      cookieData("PhoneNumber").setValue(user.PhoneNumber);
      navigate(ROUTES.HOME_PAGE);
      window.location.reload();
      toast.success("Successfully logged in");
    } else {
      toast.error("Please enter a valid email and password");
    }
  };
  // Function to use CookieData

  // const [email, setEmail] = useState('');

  // const [username, setUsername] = useState('')

  // const [lastName, setLastName] = useState('');
  
  // const [phoneNumber, setPhoneNumber] = useState('')
  
  // const [password, setPassword] = useState('')

  // useEffect(() => {
  //   const storedEmail = cookieData("email").getValue();  
  //   const storedUsername = cookieData("username").getValue();
  //   const storedlastName = cookieData("lastName").getValue();
  //   const storedPassword = cookieData("password").getValue();
  //   const storedPhoneNumber = cookieData("PhoneNumber").getValue();
  //   if (storedEmail && storedUsername && storedlastName && storedPassword && storedPhoneNumber) {
  //     setEmail(storedEmail);
  //     setUsername(storedUsername);
  //     setLastName(storedlastName);
  //     setPassword(storedPassword);
  //     setPhoneNumber(storedPhoneNumber);
  //   }
  // }, []);

  return (
    <LoginFormContainer>
      {formState === 0 ? (
        <Login>
          <LoginFormTitle>Login</LoginFormTitle>
          <form onSubmit={handleSubmit}>
            <LoginFormInput
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <LoginFormInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <RegisterType>
              <LoginFormButton type="submit">Login</LoginFormButton>
              <PhoneNum onClick={FormChange}>Continue with ph. number</PhoneNum>
            </RegisterType>
          </form>
        </Login>
      ) : (
        <LoginPhone>
          <LoginFormTitle>Login</LoginFormTitle>
          <PhoneInput
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+998 / Enter phone number"
            type="text"
          />
          <LoginPhoneButton type="submit" onClick={handleSubmit}>Login</LoginPhoneButton>
          <Email onClick={FormChange}>Continue with email</Email>
        </LoginPhone>
      )}
    </LoginFormContainer>
  );
};

export default LoginForm;
