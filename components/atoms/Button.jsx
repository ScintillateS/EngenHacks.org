import React from 'react';

import { styled, css } from "~stitches";

const ButtonStyles = css({
  fontFamily: "$filsonPro",
  fontSize: "$regular",
  color: '$alternate-text',
  variants: {
    type: {
      main: {
        color: "black"
      },
      cta: {
        color: "black"
      }
    }
  }
})

const StyledButton = styled("button", ButtonStyles);

export const Button = (props) => {
  return (
    <StyledButton 
      arial-label={props.title}
      type={props.type}
    >{props.children || props.title}</StyledButton>
  );
}


export const ApplyButton = (props) => {

  const StyledApply = styled("a", css({
      display: 'flex',
      position: 'relative',
      color: props.color == null ? "$primary-text" : props.color,
      textDecoration: "none",
      fontFamily: "$poppins",
      fontSize: "16px",
      width: "216px",
      height: "46px",
      border: "2px solid transparent",
      backgroundImage: "linear-gradient(rgba(25, 23, 30, 0.9), rgba(25, 23, 30, 0.9)), radial-gradient(circle at top left, #FFF,#000)",
      border: "1px solid white",

      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
      borderRadius: "15px",
      fontWeight: "600",
      cursor: 'pointer',
      transition: "black 0.2s ease-in",
      justifyContent: "center",
      alignItems: "center",
      zIndex: '1',

      '&:hover' : {
        color: "black",
        cursor: 'pointer',
        transition: "color 0.2s ease-out",
      },
  }));

  const handleOpenPdf = () => {
    fetch('EngenHacks11.pdf')
      .then((res) => res.blob())
      .then((blob) => {
        const objectUrl = URL.createObjectURL(blob);
        window.location.href = objectUrl;
      });
  };

  return (
    <StyledApply href="typeformlink">Apply Now →</StyledApply>
  );
};