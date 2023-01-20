import { keyframes } from "@mui/material";

const appearStarAnimation = keyframes`
  0% { transform: scale(1) rotate(0deg); position: fixed; bottom: 10%; right: 30%}
  50% {  transform: scale(5) rotate(-540deg); position: fixed; bottom: 70%; right: 35%}
  100% {transform: scale(1) rotate(1080deg);}

`;

const addButtonSpinForwards = keyframes`
  0% { transform: scale(1)}
  100% {transform: scale(1.2) rotate(360deg);}
`;

const addButtonSpinBackwards = keyframes`
  0% { transform: scale(1.2);\}
  100% {transform: scale(1) rotate(-360deg);}
`;

export { appearStarAnimation, addButtonSpinForwards, addButtonSpinBackwards };
