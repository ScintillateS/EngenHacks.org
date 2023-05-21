import {Header} from '@components/atoms';
import React from 'react';
import {styled, css} from "~stitches";

const Wrapper = styled('section', css({
  maxWidth: "100%",
  marginBottom: "10rem",
}));

const Container = styled('div', css({
  display: "flex",
  justifyContent: "space-between",
  '@bp800': {
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  }
}))


const StatContainer = styled('div', css({
  padding: "1rem 2rem",
  textDecoration: "none",
  backgroundColor: "#171717",
  transition: "all 0.3s ease 0s",
  borderRadius: "20px",
  margin: 0,
  '@bp800': {
    width: "fit-content",
  }
}));

const StatBorder = styled('div', css({
padding: "1px",
margin: "0",
border: "1px solid transparent",
borderRadius: "20px",
  backgroundImage: "linear-gradient(91.6deg, #666666 6.77%, #ffffff 57.81%, #2b2d2f 88.54%);",
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    overflow: "hidden",
    '@bp800': {
      width: "fit-content",
    }
}));

const Top = styled('p', css({
  margin: 0,
  fontSize: "clamp(40px,3.5vw,3.5vw)",
  color: "$primary-text",
}))

const Bottom = styled('p', css({
  margin: 0,
  fontSize: "clamp(1rem,2vw,2vw)",
  color: "$primary-text",
}))

const Stat = (props) => {
  return(
    <StatBorder>
      <StatContainer>
        {props.children}
      </StatContainer>
    </StatBorder>
  )
}

const Stats = (props) => {

  return (
    <Wrapper>
      <Header>Last Year&apos;s Stats</Header>
      <Container>
        <Stat>
          <Top>NUMBER+</Top>
          <Bottom>Hackers</Bottom>
        </Stat>
        <Stat>
          <Top>$NUMBER+</Top>
          <Bottom>In prizes</Bottom>
        </Stat>
        <Stat>
          <Top>NUMBER+</Top>
          <Bottom>Workshops</Bottom>
        </Stat>
        <Stat>
          <Top>NUMBER+</Top>
          <Bottom>Projects</Bottom>
        </Stat>
      </Container>
    </Wrapper>
  )
};
export default Stats;