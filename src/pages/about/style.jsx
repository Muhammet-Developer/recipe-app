import styled from "styled-components";
import img from "../../assets/About.jpg";
import img2 from "../../assets/Resim2.png";

export const Content = styled.div`
  background-image: url(${img});
  background-repeat:no-repeat ;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  @media (max-width:425px){
    background-image: url(${img2});
    width: 100vw;
    height: 50vh;
}
  `;
  export const Div = styled.div`
   margin-right:8vh;
  width: 50vh;
  float: right;
  overflow: auto;
  
  @media (max-width:425px){
  margin-top: 25vh;
  margin-left:10vh ;
}
  `;
  export const P = styled.p`
 
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  @media (max-width:425px){
    height: 45vh;
    margin-top: 160px;
    overflow: auto;
}
  `;
export const Container = styled.div`
display: flex;
height: 100vh;
justify-content: flex-end;
align-items: center;

@media (max-width:425px){
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    
}
`;