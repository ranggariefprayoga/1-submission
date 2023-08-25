import styled from "styled-components";
import { devices } from "./breakpoints";

const NavigationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;

  @media only screen and ${devices.md} {
    display: flex;
    justify-content: space-between;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
`;

const Image = styled.img`
  border-radius: 50%;
  margin-right: 5px;
  height: 80%;
`;

const Name = styled.h2`
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  position: relative;
  margin-right: 8px;

  @media only screen and ${devices.md} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
  }
`;

const IconToggle = styled.div`
  font-size: 24px;
  color: #333;
  cursor: pointer;
  display: none;

  @media only screen and ${devices.md} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto auto;
    padding: 4px;
  }

  &:hover {
    color: #ff4500;
  }
`;

// const To = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   margin-right: 12px;
//   gap: 16px;

//   @media only screen and ${devices.md} {
//     display: flex;
//     position: fixed;
//     top: 80px;
//     right: 0;
//     transform: translateX(120%);
//     width: 100%;
//     height: 50%;
//     background-color: white;
//     flex-direction: column;
//     justify-content: space-evenly;
//     align-items: center;
//     transition: 0.3s ease-in-out;
//     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
//     border-radius: 3px;
//   }
// `;

const SignOutButton = styled.button`
  background-color: #ff9900;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin: auto auto;
  height: 80%;

  @media only screen and ${devices.md} {
    display: block;
    padding: 8px 20px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  &:hover {
    background-color: #e68a00;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const style = { display: "block", height: "44px", width: "44px" };

export { NavigationContainer, UserInfo, Image, Name, LinkContainer, IconToggle, style, SignOutButton };
