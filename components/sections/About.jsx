import Image from "next/image";
import { styled, css } from "~stitches";

import { Body, Title, Header } from "@components/atoms";

import AboutUsImg from "@assets/AboutUs.png";

const Wrapper = styled('section', {
  width: "100%",
  scrollMarginTop: "12vh",
  marginBottom: "10rem",
})

const ContentWrapper = styled('div', css({
  display: 'flex',
  maxWidth: "1440px",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "row wrap",
  gap: "5vw",
  '@bp1': {
    "& div": {
      "flexBasis": "100%",
    }
  }
}));

const ImageWrapper = styled('div', css({
  position: "relative",
  maxWidth: "562px",
  maxHeight: "309px",
  minWidth: "260px",
  height: "309px",
  flex: "1",
  overflow: "hidden",
  marginLeft: "auto",
  marginRight: "auto",
  transition: "0.2s all",
  "& img": {
    boxShadow: "0px 8px 24px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
  },
  "&:hover": {
    transform: "scale(1.05)",
    transition: "0.2s all",
  }
}));

const TextWrapper = styled('div', css({
  display: "flex",
  flexDirection: "column",
  minWidth: "260px",
  flex: "1"
}));

export const About = (props) => {
  return(
    <Wrapper id="About">
      <ContentWrapper>
        <ImageWrapper>
          <Image src={AboutUsImg} layout="fill" objectFit='contain' alt="Team" />
        </ImageWrapper>
        <TextWrapper>
      <Header>About Us</Header>
          <Body>
          Engen Learning&apos;s first hackathon, EngenHacks. 
          </Body>
          <Body>
          EngenHacks is a 36-hour hackathon where students from all over the world come together to build innovative projects. We are a team of passionate students who want to provide a space for students to learn, build, and grow.
          </Body>
          <Body>
          We strive to provide a space where hackers can discover their passions, and we want your support in helping these hackers shape the future!
          </Body>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}