import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 58px;
  padding: 0 4px 0 0;
  position: sticky;
  background-color: white;
  top: 0;
  z-index: 10;
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
export const NavList = styled.div`
  display: flex;

  @media (width <= 768px) {
    display: flex;
    gap: 24px;
  }
`;

export const List = styled.li`
  list-style: none;
  margin: 20px;
  text-decoration: none;
  text-transform: capitalize;
  a {
    text-decoration: none;
    & :hover {
        color: #4F46CA;
    }
  }

  &:hover ul {
    display: block  ;
  }
`;

export const Text = styled.p`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
`;

export const Dropdown = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  list-style: none;
  padding: 0.5rem 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;


export const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #f1f1f1;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const Arrow = styled.span`
  margin-left: 0.5rem;
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
`;