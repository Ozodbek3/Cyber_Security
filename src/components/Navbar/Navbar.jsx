import styled from "styled-components"
import { IoMdSettings } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { IoLogInSharp } from "react-icons/io5";
const Nav = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: sticky;
    top: 0px;
    height: 12%;
    background-color: ${({theme}) => theme.nav.background};
`
const Nav_text = styled.h3`
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
    gap: 4px;
    &:hover{
        transition: 41ms ease-in-out;
        transform: scale(1.1);
    }
`
const Logo = styled.h2`
    color: white;
    cursor: pointer;
    &:hover{
        transition: 41ms ease-in-out;
        transform: scale(1.1);
    }
`

const Navbar = () => {
    return(
        <Nav>
            <Logo>Uzsafety</Logo>
            <Nav_text>
                Yangiliklar
                <MdNotificationsActive size={24}></MdNotificationsActive>
            </Nav_text>
            <Nav_text>
                Sozlamalar
                <IoMdSettings size={24}></IoMdSettings>
            </Nav_text>
            <Nav_text>
                Akkauntga kirish
                <IoLogInSharp></IoLogInSharp>
            </Nav_text>
        </Nav>
    )
}

export default Navbar;
