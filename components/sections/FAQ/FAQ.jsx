import React from "react";
import Card from "./cards/Card";
import {styled, css} from "~stitches";
import { Body, Header, Link } from "@components/atoms";

const Margin = styled('section', css({
  margin: "10rem 0 0 0",
  scrollMarginTop: "12vh",
}));

const Wrapper = styled('section', css({
  minHeight: "100vh",
  width: "100%",
}));

const FAQs = styled('section', css({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
    gap: "2rem 1rem",
    justifyContent: "center",
    minHeight: "100%",
    minWidth: "100%",
    padding: "5rem 0",
    margin: "0",
    borderRadius: "0px", // square rn
}));

const FAQ = (props) => {
  const faqs = require("./faqs.json");

  const faqList = faqs.map((faq, i) => (
    <Card key={i} title={faq.question} paragraph={faq.answer} />
  ));

  // If you want to add a hyperlink, you need to manually add a card component below.
  const manualCards = (
    <>

      <Card
        title="I still have a question..."
        paragraph={
          <span>
            We&#39;d be happy to help! You can send us a direct message on&nbsp; 
            <Link type={"blue"} href="https://www.instagram.com/EngenHacks/?hl=en">Instagram</Link>
            &nbsp;or <Link type={"blue"} href="https://twitter.com/EngenHacks?lang=en">Twitter</Link>&nbsp; - @engenhacks. 
            Alternatively, you can send the inquiry over to&nbsp;
            <Link type={"blue"} href="mailto:contact@engenhacks.org">contact@engenhacks.org</Link>
            &nbsp;and we&#39;ll get back to you as soon as possible.
          </span>
        }
      />
    </>
  );

  return (
    <Margin id="FAQ">
      <Header align="center">Frequently Asked Questions</Header>
      <Wrapper>
          <FAQs>
            {faqList}
            {manualCards}
          </FAQs>
        <Body size={"large"} align={"center"}>
          Anything we missed? Ask us at {' '}
          <Link href={"mailto:contact@engenhacks.org"} type={"blue"}>contact@engenhacks.org</Link>
        </Body>
      </Wrapper>
    </Margin>
  );
};

export default FAQ;
