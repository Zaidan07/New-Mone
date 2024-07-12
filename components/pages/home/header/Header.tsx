"use client";
import React from "react";
import { HeaderContainer, SubText, Text, Wrapper } from "./Header.styled";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Wrapper>
          <Text>
            Bersama Kami Wujudkan<br/> Website
            Impianmu Tanpa Ribet <br/> dan tentunya murah
          </Text>
          <SubText>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Deserunt, adipisci perferendis? Molestiae perspiciatis <br/>expedita unde quaerat optio totam, impedit harum deserunt <br/>voluptatum soluta mollitia facere accusamus aliquid quos corrupti nesciunt.</SubText>
        </Wrapper>
      </HeaderContainer>
    </>
  );
}
