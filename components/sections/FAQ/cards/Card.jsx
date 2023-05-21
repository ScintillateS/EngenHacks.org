import { Subtitle, Body } from "@components/atoms";
import React, {useState} from "react";
import {styled, css} from "~stitches";

const Wrapper = styled('div', css({
    display: "block",
    padding: "4px 20px",
    textAlign: "left",
    textDecoration: "none",
    backgroundColor: "#171717",
    height: "fit-content",
    transition: "all 0.3s ease 0s",
}));

const WrapperBorder = styled('div', css({
  padding: "1px",
  maxWidth: "35.168rem",
  border: "1px solid transparent",
    backgroundImage: "linear-gradient(91.6deg, #666666 6.77%, #ffffff 57.81%, #2b2d2f 88.54%);",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
      overflow: "hidden",
}));

const Top = styled('div', css({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  alignItems: "center",
  cursor: "pointer",
}));

const Sign = styled('p', css({
  color: "#F9F9F9",
  fontSize: "30px",
  margin: "0",
}))

const Content = styled('div', css({
  overflow: "hidden",
  transition: "all 0.3s ease",
}))

const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <WrapperBorder>
        <Wrapper>
          <Top onClick={() => setClicked(!clicked)}>
            <Subtitle>{props.title}</Subtitle>
            <Sign>{clicked ? "-": "+"}</Sign>
          </Top>
          <Content style={{"maxHeight": (clicked ? "1000px": "0px")}}>
            <Body>{props.paragraph}</Body>
          </Content>
        </Wrapper>
      </WrapperBorder>
    </div>
  );
};

export default Card;
