import styled from "styled-components"

export const Card = styled.div`
background-color: #7AB8BF;
border-radius: 10px;
margin: 10px;
width: 30vh;
text-align: center;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

`;
export const Logo = styled.img`
border-radius: 20pc;
width: 20vh;
height: 20vh;
object-fit: fill;
margin-bottom: 10px;
`;
export const Div2 = styled.div`
margin-bottom: 10px;
`;

export const Div3 = styled.div`
height: 95px;

overflow: auto;
`;
export const Div1 = styled.div`
display: flex;
flex-wrap: wrap;
@media (max-width:425px){
justify-content: center;
}
`;
export const Button = styled.button`
background-color: #C4EEF2;
  border: 0px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;
`

