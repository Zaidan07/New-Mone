"use client";
import Logo from "./Logo";
import { NavbarContainer, Container, Wrapper, NavList, List, Text, Arrow, Dropdown, DropdownItem } from "./Nav.styled";
import Link from "next/Link";

export default function Navbar() {
  return (
    <NavbarContainer>
      <Container>
        <Wrapper>
          <Logo />
          <NavList>
            <List>
              <Link href="/" passHref>
                <Text>Home <Arrow/></Text>
              </Link>
              <Dropdown>
                <DropdownItem>
                <Link href="/" passHref>
                    Home
                  </Link>
                  <Link href="/home/price/Price" passHref>
                    Price
                  </Link>
                  <Link href="/home/subpage1" passHref>
                    Image Web
                  </Link>
                  <Link href="/home/subpage1" passHref>
                    Contact
                  </Link>
                </DropdownItem>
              </Dropdown>
            </List>
            <List>
              <Link href="/about" passHref>
                <Text>About</Text>
              </Link>
            </List>
            <List>
              <Link href="/cListentPage" passHref>
                <Text>Client</Text>
              </Link>
            </List>
            <List>
              <Link href="/testimoni" passHref>
                <Text>Testimoni</Text>
              </Link>
            </List>
            <List>
              <Link href="/gallery" passHref>
                <Text>Gallery</Text>
              </Link>
            </List>
            <List>
              <Link href="/dev" passHref>
                <Text>Dev</Text>
              </Link>
            </List>
          </NavList>
        </Wrapper>
      </Container>
    </NavbarContainer>
  );
}
