import { Header, Title } from "@components/atoms";
import Image from "next/image";
import {styled, css} from "~stitches";
import { sponsors } from "./sponsorList";

const Wrapper = styled('section', {
  minHeight: "100vh",
  width: "100%",
  scrollMarginTop: "12vh",
})

const SponsorsGrid = styled('div', css({
  display: "flex",
  flexDirection: "column",
  maxWidth: "1142px",
  background: "linear-gradient(101.99deg, rgba(249, 249, 249, 0.5) 5.49%, rgba(249, 249, 249, 0.3) 100%)",
  boxSizing: "border-box",
  boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(20px)",
  margin: "0 auto",
  borderRadius: "10px",
  padding: "50px",
  gap: "2.5rem",
}))


const SponsorWrapper = styled('a', css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "400px",
  minHeight: "187px",
}))

const InKindStyled = styled('div', css({
  display: "flex",
  flexWrap: "wrap",
  placeContent: "center",
  boxSizing: "border-box",
  minHeight: "187.4px",
  maxWidth: "100%",
  margin: "0 auto",
  gap: "5rem",
  transition: "all 0.3s ease 0s",
  cursor: "pointer",

  "& a": {
    transition: "all 0.3s ease 0s",
    maxWidth: "150px",
    minWidth: "50px",
  },

  "& a:hover": {
    transition: "all 0.3s ease 0s",
    transform: "scale(1.1)",
  }
}))

const InKindTier = (props) => {
  const list = sponsors.inkind.map((s, index) =>
    <Sponsor key={index} href={s.url} src={s.img} name={s.name} />
  );
  return (
    sponsors.inkind.length > 0 ? <InKindStyled>{list}</InKindStyled>: null
  )
}

const BronzeStyled = styled(InKindStyled, css({
  "& a": {
    maxWidth: "200px",
    minWidth: "80px",
  }
}));

const BronzeTier = (props) => {
  const list = sponsors.bronze.map((s, index) =>
    <Sponsor key={index} href={s.url} src={s.img} name={s.name} />
  );
  return (
    sponsors.bronze.length > 0 ? <BronzeStyled>{list}</BronzeStyled>: null
  )
}

const SilverStyled = styled(InKindStyled, css({
  "& a": {
    maxWidth: "225px",
    minWidth: "100px",
  }
}));

const SilverTier = (props) => {
  const list = sponsors.silver.map((s, index) =>
    <Sponsor key={index} href={s.url} src={s.img} name={s.name} />
  );
  return (
    sponsors.silver.length > 0 ? <SilverStyled>{list}</SilverStyled>: null
  )
}

const GoldStyled = styled(InKindStyled, css({
  "& a": {
    maxWidth: "275px",
    minWidth: "150px",
  }
}));

const GoldTier = (props) => {
  const list = sponsors.gold.map((s, index) =>
    <Sponsor key={index} href={s.url} src={s.img} name={s.name} />
  );
  return (
    sponsors.gold.length > 0 ? <GoldStyled>{list}</GoldStyled>: null
  )
}

const PlatinumStyled = styled(InKindStyled, css({
  "& a": {
    maxWidth: "300px",
    minWidth: "200px",
  }
}));

const PlatinumTier = (props) => {
  const list = sponsors.platinum.map((s, index) =>
    <Sponsor key={index} href={s.url} src={s.img} name={s.name} />
  );
  return (
    sponsors.platinum.length > 0 ? <PlatinumStyled>{list}</PlatinumStyled>: null
  )
}

const DiamondStyled = styled(InKindStyled, css({
  "& a": {
    maxWidth: "400px",
    minWidth: "250px",
  }
}));

const DiamondTier = (props) => {
  const list = sponsors.diamond.map((s, index) =>
    <Sponsor key={index} href={s.url} src={s.img} name={s.name} />
  );
  return (
    sponsors.diamond.length > 0 ? <DiamondStyled>{list}</DiamondStyled>: null
  )
}

const Sponsor = (props) => {
  return(
    <SponsorWrapper href={props.href} target="_blank" rel="noopener">
      <Image src={props.src} layout="fill"
                objectFit="contain" alt={props.name}  />
    </SponsorWrapper>
  )
}


export const Sponsors = (props) => {

  return(
    <Wrapper id="Sponsors">
      <Header align="center">Our Sponsors</Header>
      <SponsorsGrid>
        <DiamondTier />
        {/* <PlatinumTier />
        <GoldTier />
        <SilverTier />
        <BronzeTier />
        <InKindTier /> */}
      </SponsorsGrid>
    </Wrapper>
  )
}