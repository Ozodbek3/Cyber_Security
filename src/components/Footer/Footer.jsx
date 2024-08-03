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
    bottom: 2%;
    width: 100%;
    height: 60%;
    background-color: ${({theme}) => theme.footer};
`
const Safetyh3 = styled.h3`
  position: relative;
  top: 25rem;
  margin-left: 40rem;
`;
const FooterLine = styled.div`
  position: relative;
  left: 5rem;
  top: 23rem;
  width: 90%;
  height: 1px;
  background-color: white;
`;
const P = styled.p`
  position: relative;
  top: 27rem;
  margin-left: 35rem;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <Solutions>
        <SolutionsDiv>
          <h3 >Network security solutions</h3>
          <SolutionsP>Brausers antivirus</SolutionsP>
          <SolutionsP>VPN for Windows</SolutionsP>
          <SolutionsP>VPN for MacOS </SolutionsP>
          <SolutionsP>VPN for Linux</SolutionsP>
          <SolutionsP>All VPNs</SolutionsP>
          <SolutionsP>All Antivirus</SolutionsP>
        </SolutionsDiv>
        <SolutionsDiv>
          <h3>PC or laptop antivirus</h3>
          <SolutionsP>
            <FaWindows />
            Windows Antivirus
          </SolutionsP>
          <SolutionsP>
            <RiFinderFill />
            MacOS Antivirus
          </SolutionsP>
          <SolutionsP>
            <FaLinux />
            Linux Antivirus
          </SolutionsP>
          <SolutionsP>
            <IoPhonePortraitOutline />
            Phone Antivirus
          </SolutionsP>
          <SolutionsP>All Antiviruses</SolutionsP>
        </SolutionsDiv>
        <SolutionsDiv>
          <h3>Kids on Internet</h3>
          <SolutionsP>Parental control</SolutionsP>
          <SolutionsP>Brausers Security</SolutionsP>
          <SolutionsP>Time of using</SolutionsP>
          <SolutionsP>All Solutions for kids</SolutionsP>
        </SolutionsDiv>
        <SolutionsDiv>
          <h3>Social Media</h3>
          <SolutionsP href="https://t.me/UzSafetynews">
            <FaTelegram />
            Telegram
          </SolutionsP>
          <SolutionsP>
            <FaInstagramSquare />
            Instagram
          </SolutionsP>
          <SolutionsP href="https://www.youtube.com/watch?v=lpa8uy4DyMo&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_">
            <FaYoutube />
            Youtube
          </SolutionsP>
          <SolutionsP href="https://x.com/home">
            <FaSquareXTwitter />
            X.com
          </SolutionsP>
          <SolutionsP>All information about us</SolutionsP>
        </SolutionsDiv>
      </Solutions>
      <FooterLine></FooterLine>
      <Safetyh3>Uzbekistan Safety Network</Safetyh3>
      <P>©️ 2024 Uzbekistan Safety Network. All rights reserved.</P>

    </FooterDiv>
  );
};

export default Footer;
