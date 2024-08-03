import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "react-feather";
import { RxCross2 } from "react-icons/rx";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: ${({ theme }) => theme.secondary};
`;

const Minidiv = styled("div")`
  display: flex;
  position: fixed;
  background-color: blue;
  transition: top 0.3s ease, left 0.3s ease, height 0.3s ease, width 0.3s ease, border-radius 0.3s ease;
`;

const Circle = styled("div")`
  position: fixed;
  cursor: pointer;
  top: 86%;
  left: 90.5%;
  z-index: 1000;
  color: white;
  border-radius: 50%;
  background-color: blue;
`;

const HomeContainer = ({ theme }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState("7vh");
  const [height, setHeight] = useState("7vh");

  const Change = () => {
    if (!open) {
      setOpen(true);
      setHeight("90vh");
      setWidth("30vw");
    } else {
      setOpen(false);
      setHeight("7vh");
      setWidth("7vh");
    }
  };

  const calculateTop = () => {
    if (!open) return "85%";
    return `calc(86% - 90vh + 7vh)`;
  };

  const calculateLeft = () => {
    if (!open) return "90%";
    return `calc(91% - 30vw + 7vh)`;
  };

  return (
    <Container>
      <Circle>
        {open === false ? (
          <Search onClick={Change} size={35} />
        ) : (
          <RxCross2 onClick={Change} size={35} color="white" />
        )}
      </Circle>
      <Minidiv
        style={{
          width: width,
          height: height,
          top: calculateTop(),
          left: calculateLeft(),
          borderRadius: open ? "2rem" : "50%",
        }}
      />
    </Container>
  );
};

export default HomeContainer;
