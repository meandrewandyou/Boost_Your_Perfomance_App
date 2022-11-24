import { keyframes } from "@mui/material";

const borderShape2 = () => {
  return ~~(Math.random() * (95 - 35) + 35);
}
const borderShape1 = () => {
  return ~~(Math.random() * (65 - 10) + 10);
}


const appearStarAnimation = keyframes`
  0% { transform: scale(1) rotate(0deg); position: fixed; bottom: 10%; right: 30%}
  50% {  transform: scale(5) rotate(-540deg); position: fixed; bottom: 70%; right: 35%}
  100% {transform: scale(1) rotate(1080deg);}

`;



export { appearStarAnimation};