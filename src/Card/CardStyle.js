import Styled from "styled-components";

export const Container = Styled.div`
     display: flex;
     justify-content: space-between;
     width: 60%;
     height: 90%;
     padding: 25px;
     border: 5px solid rgba(128,128,128, 0.1);   

     @media only screen and (max-width: 800px) {
         display : block;
    }
`;

export const IconCardContainer = Styled.div`
   padding-top: 20px;
`;
