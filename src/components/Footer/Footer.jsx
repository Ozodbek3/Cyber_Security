import styled from "styled-components";
import {
  FaTelegram,
  FaInstagramSquare,
  FaYoutube,
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiFinderFill } from "react-icons/ri";
import { IoPhonePortraitOutline } from "react-icons/io5";

const FooterDiv = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  z-index: 60;
  background-color: #0a0808e3;
`;
const Safetyh3 = styled.h3`
  position: absolute;
  top: 23rem;
  margin-left: 40rem;
  color: white;
`;
const FooterLine = styled.div`
  position: absolute;
  left: 5rem;
  top: 21rem;
  width: 90%;
  height: 1px;
  background-color: white;
`;
const Solutions = styled.div`
  position: absolute;
  left: 5rem;
  top: 1rem;
  display: flex;
  justify-content: space-between;
  height: 20rem;
  width: 90%;
`;
const SolutionsDiv = styled.div`
  position: relative;
  left: 3rem;
  width: 20%;
`;
const SolutionsA = styled.a`
  position: relative;
  top: 1rem;
  display: flex;
  align-items: center;
  height: 2rem;
  cursor: pointer;
  color: white;
  &&:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.5px;
    text-decoration-color: white;
  }
  span {
    margin-right: 0.5rem;
  }

`;

const P = styled.p`
  position: absolute;
  top: 25rem;
  margin-left: 35rem;
  color: white;
`;

const Footer = () => {
    return (
      <FooterDiv>
        <Solutions>
          <SolutionsDiv>
            <h3 style={{color:"white"}}>Network security solutions</h3>
            <SolutionsA>Brausers antivirus</SolutionsA>
            <SolutionsA>VPN for Windows</SolutionsA>
            <SolutionsA>VPN for MacOS</SolutionsA>
            <SolutionsA>VPN for Linux</SolutionsA>
            <SolutionsA>All VPNs</SolutionsA>
            <SolutionsA>All Antivirus</SolutionsA>
          </SolutionsDiv>
          <SolutionsDiv>
            <h3 style={{color:"white"}}>PC or laptop antivirus</h3>
            <SolutionsA>
              <span><FaWindows /></span>
              Windows Antivirus
            </SolutionsA>
            <SolutionsA>
              <span><RiFinderFill /></span>
              MacOS Antivirus
            </SolutionsA>
            <SolutionsA>
              <span><FaLinux /></span>
              Linux Antivirus
            </SolutionsA>
            <SolutionsA>
              <span><IoPhonePortraitOutline /></span>
              Phone Antivirus
            </SolutionsA>
            <SolutionsA>All Antiviruses</SolutionsA>
          </SolutionsDiv>
          <SolutionsDiv>
            <h3 style={{color:"white"}}>Kids on Internet</h3>
            <SolutionsA>Parental control</SolutionsA>
            <SolutionsA>Brausers Security</SolutionsA>
            <SolutionsA>Time of using</SolutionsA>
            <SolutionsA>All Solutions for kids</SolutionsA>
          </SolutionsDiv>
          <SolutionsDiv>
            <h3 style={{color:"white"}}>Social Media</h3>
            <SolutionsA href="https://t.me/UzSafetynews">
              <span><FaTelegram /></span>
              Telegram
            </SolutionsA>
            <SolutionsA href="https://www.instagram.com/">
              <span><FaInstagramSquare /></span>
              Instagram
            </SolutionsA>
            <SolutionsA href="https://www.youtube.com/watch?v=lpa8uy4DyMo&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_">
              <span><FaYoutube /></span>
              Youtube
            </SolutionsA>
            <SolutionsA href="https://x.com/home">
              <span><FaSquareXTwitter /></span>
              X.com
            </SolutionsA>
            <SolutionsA>All information about us</SolutionsA>
          </SolutionsDiv>
        </Solutions>
        <FooterLine></FooterLine>
        <Safetyh3>Uzbekistan Safety Network</Safetyh3>
        <P>©️ 2024 Uzbekistan Safety Network. All rights reserved.</P>
      </FooterDiv>
    );
  };
  
  export default Footer;
  
