import Styled from "styled-components";

export const Container = Styled.div`
     position: relative;
     top: 30px;
     padding: 10%;
     width: 40%;
     height: 50%;
     border-top: 20px solid rgba(128,128,128, 0.1);
     border-right: 35px solid rgba(128,128,128, 0.1);
     border-left: 20px solid rgba(128,128,128, 0.1);
     border-bottom: 45px solid rgba(128,128,128, 0.1);
`;

export const CardContainer = Styled.div`
    position: absolute;
    bottom: 22%;
    left: 5%;
`;

export const LabelCardContainer = Styled.div`
    position: absolute;
    left: 45%;
    top: 40px;
`;

export const IconCardContainer = Styled.div`
    position: absolute;
    left: 80%;
    top: 24%;
`;
