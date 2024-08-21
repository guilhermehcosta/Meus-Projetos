import styled from "styled-components";

export const Button = styled.button`
     border:  ${props => props.theme === "primary" ? "none" : "1px solid #fff"} ;
     background:  ${props => props.theme === "primary" ? "linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%);" : "transparent"};
     font-size: 16px;
     color: #fff;
     padding: 16px 32px;
     width: fit-content;
     cursor: pointer;
     border-radius: 30px;

     &:hover {
          opacity: ${props => props.theme === "primary" ? "0.8" : "0.4"};
          background-color: ${props => props.theme === "primary" ? "none" : "gray"};
          color: ${props => props.theme === "primary" ? "none" : "#fff"};
          font-weight: ${props => props.theme === "primary" ? "none" : "bolder"};
     }

     &:active{
          opacity: 0.5;
     }
`