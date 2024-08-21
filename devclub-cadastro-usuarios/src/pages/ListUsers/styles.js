import styled from "styled-components";

export const Container = styled.div`
     background: #181f36;
     min-height: 100vh ;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-evenly;
     padding: 20px;
`

export const Title = styled.h2`
     color: #fff;
     text-align: center;
     font-size: 38px;
     font-style: normal;
     font-weight: 600;
     margin-top: 30px;
`

export const ContainerUsers = styled.div`
     display: grid;
     grid-template-columns: 1fr 1fr ;
     gap: 20px;
     margin: 30px 0;

     @media (max-width: 810px){
          grid-template-columns: 1fr;
     }
`

export const CardUsers = styled.div`
     background-color: #252d48;
     padding: 16px;
     border-radius: 32px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     gap: 20px;
     max-width: 390px;
     margin-bottom: 3px;

     p {
          color: #fff;
          font-size: 14px;
          font-weight: 200;
     }

     h3 {
          color: #fff;
          font-size: 24px;
          text-transform: capitalize;
     }
`

export const TrashIcon = styled.img`
     cursor: pointer;
     padding-left: 30px;

     &:hover {
          opacity: 0.8;
     }

     &:active {
          opacity: 0.5;
     }
`

export const AvatarUser = styled.img`
     height: 80px;
`
export const MensagemDeCadastro = styled.div`
     margin-top: 20px;
  padding: 15px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
