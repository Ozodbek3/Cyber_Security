import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { IoLogInSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  ACCOUNT_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  REPORT_PAGE,
} from "../../constants/routes";
import { cookieData } from "../../utils/cookies";
import Logoimg from "../../Images/la.png";
import { WiDirectionRight } from "react-icons/wi";

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  z-index: 100;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 12%;
`;
const Nav_text = styled.h3`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  gap: 4px;
  &:hover {
    transition: 41ms ease-in-out;
    transform: scale(1.1);
  }
`;
const Logo = styled.h2`
  color: white;
  cursor: pointer;
  &:hover {
    transition: 41ms ease-in-out;
    transform: scale(1.1);
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Nav>
      <Logo onClick={() => navigate(HOME_PAGE)}>
        Uzsafety
        <img style={{ width: "2rem" }} src={Logoimg} alt="" />
      </Logo>

      <Nav_text>
        Yangiliklar
        <MdNotificationsActive size={24}></MdNotificationsActive>
      </Nav_text>
      <Nav_text>
        <Link to={"/report"}>Reklamaga shikoyat | personal yordam</Link>
      </Nav_text>
      <Nav_text
        onClick={
          cookieData("username").getValue() === ""
            ? () => navigate(LOGIN_PAGE)
            : () => navigate(ACCOUNT_PAGE)
        }
      >
        Akkaunt
        <IoLogInSharp></IoLogInSharp>
      </Nav_text>
    </Nav>
  );
};

export default Navbar;
