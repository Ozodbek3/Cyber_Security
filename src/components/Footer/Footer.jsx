import styled from "styled-components";



const FooterDiv = styled.div`
    position: relative;
    bottom: 2%;
    width: 100%;
    height: 50%;
    background-color: ${({theme}) => theme.footer};
`
const Safetyh3 = styled.h3`
  margin-top:20rem;
  margin-left: 40rem;
`
const FooterLine = styled.div`
  position: relative;
  left: 5rem;
  top: 19rem;
  width: 90%;
  height: 1px;
  background-color: white;
`

const Footer = () => {
  return (
    <FooterDiv>
         <FooterLine></FooterLine>
         <Safetyh3>Uzbekistan Safety Network</Safetyh3>
         <p>©️ 2024 Uzbekistan Safety Network. All rights reserved.</p>
    </FooterDiv>
  );
};

export default Footer;