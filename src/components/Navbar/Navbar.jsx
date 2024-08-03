import styled from "styled-components";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <h2>UzSafety Network</h2>
      <div>
        <RiNotificationBadgeFill />
        <IoSettings />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
