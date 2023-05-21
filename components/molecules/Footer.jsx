import { styled, css } from "~stitches";
import { Link } from "@components/atoms";
import { Instagram, Twitter, LinkedIn } from "@icons";

const Wrapper = styled("footer", css({
  display: "flex",
  justifyContent: "space-around",
  minHeight: "2.5rem",
  width: "100%",
  flexFlow: "row wrap",
  padding: "3rem 0",
  columnGap: "50px",
  rowGap: "25px",
}));

const Links = styled("div", css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
}))

const Socials = styled("div", css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
}))

export const Footer = (props) => {
  return(
    <Wrapper>
      <Links>
        <Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</Link>
        <Link href="https://github.com/EngenHacks">GitHub</Link>
      </Links>
      <Socials>
        <Link href="https://www.instagram.com/EngenHacks"><Instagram /></Link>
        <Link href="https://www.twitter.com/EngenHacks"><Twitter /></Link>
        <Link href="https://www.linkedin.com/company/engenlearning"><LinkedIn /></Link>
      </Socials>
    </Wrapper>
  );
};