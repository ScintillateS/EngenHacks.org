import React from 'react'
import {styled, css} from "~stitches";

const h1Styles = {
  fontWeight: "500",
  fontSize: "$header"
};

const h2Styles = {
  fontWeight: "500",
  fontSize: "$subheader"
};

const bodyStyles = {
  fontWeight: "400",
  fontSize: "1rem",
};
const smallStyles = {
  fontWeight: "400",
  fontSize: "0.8rem",
};
const largeStyles = {
  fontWeight: "400",
  fontSize: "1.25rem",
};

const DisplayStyles = css({
  '& span': {
    marginTop: "0",
    fontWeight: "500",
    fontSize: "clamp(2rem, 11vw, $display)",
    backgroundImage: 'linear-gradient(91.6deg, #666666 6.77%, #ffffff 57.81%, #2b2d2f 88.54%)',
    backgroundClip: 'text',
    color: 'transparent',
  }
});


export const DisplayText = (props) => {
  const StyledDisplay = styled("h1", DisplayStyles);

  return (
    <StyledDisplay><span>{props.children}</span></StyledDisplay>
  )
}

export const Title = (props) => {
  
  const StyledTitle = styled("h1", css({
    color: props.color == null ? "$secondary" : props.color,
    fontWeight: "500",
    fontSize: "clamp(1.5rem, 10vw, $title)",
    textAlign: props.align == null ? "left": props.align,
  }));

  return (
    <StyledTitle>{props.children}</StyledTitle>
  )

}

export const Header = (props) => {
  
  const StyledHeader = styled(props.type || "h1", css({
    color: props.color == null ? "$tertiary" : props.color,
    textAlign: props.align == null ? "left": props.align,
    variants: {
      type: {
        h1: {...h1Styles},
        h2: {...h2Styles}
      }
    },
    defaultVariants: {
      type: 'h1'
    }
  }));

  return (
    <StyledHeader type={props.type} color={props.color}>{props.children}</StyledHeader>
  )

}


export const Subtitle = (props) => {

  const StyledSubtitle = styled("h3", css({
    margin: "6px 0",
    fontFamily: '$poppins',
    color: props.color == null ? "$primary-text" : props.color,
    fontWeight: "500",
    fontSize: "clamp(0.8rem, 5vw, $subtitle)",
  }));

  return (
    <StyledSubtitle color={props.color}>{props.children}</StyledSubtitle>
  )
}


export const Body = (props) => {

  const StyledBody = styled("p", css({
    fontFamily: "$poppins",
    fontWeight: "400",
    color: "$primary-text",
    lineHeight: "30px",
    textAlign: props.align == null ? null : props.align,
    variants: {
      size: {
        body: {...bodyStyles},
        small: {...smallStyles},
        large: {...largeStyles},
      }
    },
    defaultVariants: {
      size: 'body'
    }
  }));

  return (
    <StyledBody size={props.size}>{props.children}</StyledBody>
  );
};

export const Link = (props) => {

  const StyledLink = styled("a", css({
    fontFamily: "$poppins",
    fontWeight: "500",
    color: props.color == null ? "$primary-text" : props.color,
    textDecoration: "none",
    cursor: "pointer",
    transition: "0.3s ease-out all",
    "&:hover": {
      color: props.hoverColor == null ? "$secondary-text" : props.hoverColor,
      transition: "0.3s ease-out all",
    },
    variants: {
      type: {
        blue: {
          color: "$primary",
          "&:hover": {
            color: "#296187",
          },
        },
        blueThin: {
          color: "$primary",
          fontWeight: "400",
        }
      },
    }
  }))

  return (
    <StyledLink type={props.type} href={props.href} target={props.target ?? "_blank"} color={props.color} hoverColor={props.hoverColor}>{props.children}</StyledLink>
  )
}