import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import {keyframes} from "styled-components";
import inkognit from "../../utils/detective.png"
import { Search } from "react-feather";
import { RxCross2 } from "react-icons/rx";
import AOS from 'aos';
import 'aos/dist/aos.css';
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
const Section1 = styled.div`
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

const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`
const Section2_UpperPart = styled.div`
  display: flex;
  justify-content: center;
  height: 50%;
  width: 100%;
`
const DikPic = styled.img`
  
`
const Sec2_text = styled.h1`
  
`
const SafeUz = styled.div`
  height: 100vh;
  width: 100%;
  
`
const Section3 = styled.div`
  width: 100%;
  height: 100vh;
`
const HomeContainer = () => {
  useEffect(() => {
    AOS.init();
  }, [])
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
      <SafeUz>

      </SafeUz>
      <Section1>
        <Sec1_photo data-aos="fade-up" data-aos-duration="2000"></Sec1_photo>
        <TextCon>
            <Sec1_text data-aos="fade-up" data-aos-duration="2000">
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
            
            <Sec1_text data-aos="fade-up" data-aos-duration="2000">
              <h1>
                Biz siz kabi insonlar dunyo boylab qonun buzarlarni qolga olish, ularga odam aldashga halal berishga saytimizni yaratdik
              </h1>
            </Sec1_text>
        </TextCon>
      </Section1>
      <Section2>
        <Section2_UpperPart>
          <DikPic src={inkognit} data-aos="fade-up" data-aos-duration="2000"/>
        </Section2_UpperPart>
        <Sec2_text data-aos="fade-up" data-aos-duration="2000">Ehtiyot boling!</Sec2_text>
        <Sec2_text data-aos="fade-up" data-aos-duration="2000">Internetda shaxsiy malumotlaringizni ishlatishni kamaytiring!</Sec2_text> <br />
        <Sec2_text data-aos="fade-up" data-aos-duration="2000">Sizning malumotlaringizdan qonunbuzarlar o'z foydasiga foylanishadi!</Sec2_text> <br />
        <Sec2_text data-aos="fade-up" data-aos-duration="2000">Agar siznig malumotlaringiz internetga qoyib yuborilishi bilan topsa qilishsa biz yoki militsiya hodimlari bilan aloqaga chiqing!</Sec2_text> <br />
        <Sec2_text data-aos="fade-up" data-aos-duration="2000">Kim yozayotganini tekshiring! Hamma ham sizga do'st emas!</Sec2_text>
        
      </Section2>

      <Section3>3</Section3>
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
