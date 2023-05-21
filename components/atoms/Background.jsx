import { styled } from "~stitches";

const image = {
  starWithLights: "url('/img/bg/StarsWithLights.svg') no-repeat fixed",
  starsOnly: "url('/img/bg/StarsOnly.svg') #0D0D0D repeat",
  lightsOnly: "url('/img/bg/LightsOnly.svg') no-repeat fixed",
  black: "#0D0D0D",
}

const vectors = {
  stroke1: "url('/img/bg/art/stroke1.svg')",
}

const Wrapper = styled("div", {
  zIndex: "-1",
  minWidth: '100%',
  minHeight: '100%',
  margin: "0",
  variants: {
    bg: {
      main: {
      },
      starsOnly: {
        background: '#0D0D0D',
      }
    },
  },
  defaultVariants: {
    bg: "main"
  }
})

const StarsWrapper = styled("div", {
  background: image.black,
  zIndex: "-1"
})

const Padding = styled("main", {
  padding: "0 12.76vw",
})

const ArtWrapper = styled("div", {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  minHeight: "120%",
  height: "auto",
  width: "100%",
  pointerEvents: "none",
  backgroundSize: "cover",
  backgroundImage: vectors.stroke1,
})

const TopLeftGlow = styled("div", {
  position: 'fixed',
  top: '-95vh',
  left: '-450px',
  height: '1200px',
  width: '1200px',
  background: '',
  opacity: '0.06',
})

const TopRightGlow = styled("div", {
  position: 'fixed',
  top: '-55vh',
  left: '60vw',
  right: '0px',
  bottom: '0px',
  height: '1200px',
  width: '1200px',
  background: '',
  opacity: '0.06',
});

const BottomLeftGlow = styled("div", {
  position: 'fixed',
  top: '60vh',
  left: '-450px',
  right: '0px',
  bottom: '0px',
  height: '1200px',
  width: '1200px',
  background: '',
  opacity: '0.06',
});

const BottomRightGlow = styled("div", {
  position: 'fixed',
  top: '60vh',
  left: '50vw',
  right: '0px',
  bottom: '0px',
  height: '1200px',
  width: '1200px',
  background: ')',
  opacity: '0.06',
});

/**
 * 
 * Background with Stars and Lights vectors
 * 
 */
export const MainBackground = (props) => {
  return (
    <StarsWrapper>
      <Wrapper>
        {props.padded ? <Padding>{props.children}</Padding> : props.children}
        <TopLeftGlow />
        <TopRightGlow />
        <BottomLeftGlow />
        <BottomRightGlow />

      </Wrapper>
    </StarsWrapper>
  )
}

export const StarsBackground = (props) => {
  return (
      <Wrapper bg="starsOnly">
        {props.padded ? <Padding>{props.children}</Padding> : props.children}
      </Wrapper>
  )
}