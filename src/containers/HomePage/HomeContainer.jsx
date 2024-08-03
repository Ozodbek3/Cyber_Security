import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {keyframes} from "styled-components";
import { Search } from "react-feather";
import { RxCross2 } from "react-icons/rx";
import Double from "../../utils/world.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1D3557;
`;
const Invisible = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
`;
const Closed = styled("div")`
  position: absolute;
  width: 1rem;
  height: 1rem;
  left: 200vw;
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Minidiv = styled("div")`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: blue;
  z-index: 900;
  transition: top 0.3s ease, left 0.3s ease, height 0.3s ease, width 0.3s ease,
    border-radius 0.3s ease;
`;
const Response = styled("div")`
  width: 90%;
  height: 70%;
  margin-left: 5%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Buttons = styled("div")`
  display: flex;
  width: 90%;
  height: 20%;
  margin-left: 5%;
  background-color: white;
`;
const Button = styled("div")`
  width: 25%;
  height: 30%;
  margin: 0 2%;
  background-color: red;
`;
const TextCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  width: 50%;
`
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
const Sec1_text = styled.div`

  height: 60%;
  width: 70%;
  color: white;
  `;
  const GlobeAnimation = keyframes`
    from{
      background-position: 0 0;
    }
    to{
      background-position: 100% 100%;
    }
  `
const Sec1_photo = styled.div`
  position: relative;
  height: 80%;
  width: 50%;
  border: 4px solid black;
  border-radius: 100%;
  background-size: cover;
  animation: rotate 20s linear infinite, ${GlobeAnimation} 10s linear infinite;
  background-image: url(${Double});
`;

const HomeContainer = () => {

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

  const invisible = () => {
    setOpen(false);
    setHeight("7vh");
    setWidth("7vh");
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
      <Invisible onClick={invisible} />
      <Section>
        <Sec1_photo></Sec1_photo>
        <TextCon>
            <Sec1_text>
              <h1>
                Sizni kimdir internetda xavfaga solmoqdami?
              </h1>
              <h1>
                Balki sizdan pull og'irlashmoqchimi?
              </h1>
              <h1>
                Reklamadan norozi yoki reklama yolg'on gapirayaptimi?
              </h1>
            </Sec1_text>
            
            <Sec1_text>
              <h1>
                Biz siz kabi insonlar dunyo boylab qonun buzarlarni qolga olish, ularga odam aldashga halal berishga saytimizni yaratdik
              </h1>
            </Sec1_text>
        </TextCon>
      </Section>

      <Section>2</Section>

      <Section>3</Section>
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
      >
        {open === false ? <Closed /> : <Response></Response>}
        {open === false ? (
          <Closed />
        ) : (
          <Buttons>
            <Button></Button>
            <Button></Button>
          </Buttons>
        )}
      </Minidiv>
    </Container>
  );
};

export default HomeContainer;
