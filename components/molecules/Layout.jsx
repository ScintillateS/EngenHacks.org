import { styled, css } from "~stitches";

import { Footer } from "@components/molecules";

export const Layout = (props) => {

  const Wrapper = styled("div", {
    position: "relative",
    zIndex: "5",
  })

  return (
    <Wrapper>
      {props.children}
      <Footer />
    </Wrapper>
  );
}