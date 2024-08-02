import styled from "styled-components";

const Container = styled("div")`
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
`;

const ChildrenComponent = styled("div")`
  width: 100%;
  height: 100%;
  top: 8vh;
  background-color: ${({ theme }) => theme.primary};
`;

const BaseLayout = ({ children, theme, toggleTheme }) => {
  return (
    <Container>
      <ChildrenComponent>{children}</ChildrenComponent>
    </Container>
  );
};

export default BaseLayout;
