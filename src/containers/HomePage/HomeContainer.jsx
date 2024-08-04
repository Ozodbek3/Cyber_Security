import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { Search } from "react-feather";
import { RxCross2 } from "react-icons/rx";
import Double from "../../Images/world.png";
import inkognit from "../../Images/detective.png"
import fish from "../../Images/phishing.png"
import https from "../../Images/https.png"
import Uz from "../../Images/logo.png"
import malware from "../../Images/malware.webp"
import defender from "../../Images/metadefender.webp"
import virus from "../../Images/virustotal.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { data } from "./components/responses";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1d3557;
  `;

const Invisible = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  `;
const fishAnim = keyframes`
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
  }
`

const Closed = styled.div`
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

const Minidiv = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: blue;
  z-index: 900;
  transition: top 0.3s ease, left 0.3s ease, height 0.3s ease, width 0.3s ease,
    border-radius 0.3s ease;
`;

const Response = styled.div`
  width: 90%;
  height: 70%;
  padding-top: 2%;
  margin-left: 5%;
  font-size: 1.5rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 90%;
  height: 20%;
  margin-left: 5%;
  background-color: white;
`;

const Button = styled.div`
  width: 25%;
  height: 30%;
  margin: 0 2%;
  background-color: red;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  text-align: center;
`;

const TextCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  width: 50%;
`;

const Circle = styled.div`
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
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
`;

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
  position: relative;
  animation: 2s infinite ${fishAnim} ease-in-out;
`
const Sec2_text = styled.div`
  
`
const SafeUz = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  
  `
const Fishing = styled.img`
  position: relative;
  animation: 2s infinite ${fishAnim} ease-in-out;
`
const Section3 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
`
const Section4 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
`
const Logomiz = styled.div`
  height: 70%;
  width: 40%;
  background-size: cover;
  background-image: url(${Uz});
`
const Sec4_text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
  height: 80%;
  width: 45%;
`
const AppsLogo = styled.img`
  width: 50%;
  height: 20%;
`
const Sec4_con = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  width: 47%;
  height: 80%;
`
const HomeContainer = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const [open, setOpen] = useState(false);

  const [width, setWidth] = useState("7vh");

  const [height, setHeight] = useState("7vh");

  const [selectedDescription, setSelectedDescription] = useState("");

  const [displayedDescription, setDisplayedDescription] = useState("");

  const typeDescription = (description) => {
    let index = 0;
    setDisplayedDescription("");

    const typingEffect = () => {
      if (index < description.length) {
        setDisplayedDescription((prev) => prev + description[index]);
        index++;
        setTimeout(typingEffect, 25); // Adjust typing speed here
      }
    };

    typingEffect();
  };

  const handleClick = (description) => {
    setSelectedDescription(description);
    typeDescription(description);
  };

  const Change = () => {
    if (!open) {
      setOpen(true);
      setHeight("90vh");
      setWidth("35vw");
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
    return `calc(91% - 35vw + 7vh)`;
  };

  return (
    <Container>
      <Invisible onClick={invisible} />
      <SafeUz>
        <Logomiz></Logomiz>
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
        <Sec2_text data-aos="fade-up" data-aos-duration="2000"><h2>Ehtiyot boling!</h2></Sec2_text>
        <Sec2_text data-aos="fade-up" data-aos-duration="2000"><h2>Internetda shaxsiy malumotlaringizni ishlatishni kamaytiring!</h2></Sec2_text> <br />
        <Sec2_text data-aos="fade-up" data-aos-duration="2000"><h2>Sizning malumotlaringizdan qonunbuzarlar o'z foydasiga foylanishadi!</h2></Sec2_text> <br />
        <Sec2_text data-aos="fade-up" data-aos-duration="2000"><h2>Agar siznig malumotlaringiz internetga qoyib yuborilishi bilan topsa qilishsa biz yoki militsiya hodimlari bilan aloqaga chiqing!</h2></Sec2_text> <br />
        <Sec2_text data-aos="fade-up" data-aos-duration="2000"><h2>Kim yozayotganini tekshiring! Hamma ham sizga do'st emas!</h2></Sec2_text>
        
      </Section2>

      <Section3>
        <Sec2_text data-aos="fade-up" data-aos-duration="2000">
          <h2>Web saytlarga malumot kiritishdan <br /> oldin uni rostligiga ahamiyat bering. <br /> Agar websayt https yozuviga ega bolmasa <br /> unga malumot kiritmang</h2>
        </Sec2_text>
        <Fishing src={fish} alt="" data-aos="fade-up" data-aos-duration="2000"/>
         <Sec2_text data-aos="fade-up" data-aos-duration="2000">
          <h2>Phishing - qalbaki sayt yordamida <br /> malumotlarni og'irlash</h2>
        </Sec2_text>
      </Section3>
      <Section4>
        <Sec4_text data-aos="fade-up" data-aos-duration="2000"><h2>Biz sizga taqdim etgan amallardan tashqari yana quyidagi havolalarni taklif etamiz. <br /> Bizning jamoa siz internetda tinch yurishingiz uchun ularni tekshirib chiqdi.</h2> </Sec4_text>
        <Sec4_con>
          <AppsLogo src={malware} alt="" />
          <AppsLogo src={https} alt="" />
          <AppsLogo src={defender} alt="" />
          <AppsLogo src={virus} alt="" />
        </Sec4_con>
      </Section4>
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
        {open === false ? (
          <Closed />
        ) : (
          <Response>{displayedDescription}</Response>
        )}
        {open === false ? (
          <Closed />
        ) : (
          <Buttons>
            {data.map((item, index) => (
              <Button key={index} onClick={() => handleClick(item.description)}>
                {item.name}
              </Button>
            ))}
          </Buttons>
        )}
      </Minidiv>
    </Container>
  );
};

export default HomeContainer;
