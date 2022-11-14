import { keyframes } from "@mui/material";

const borderShape2 = () => {
  return ~~(Math.random() * (95 - 35) + 35);
}
const borderShape1 = () => {
  return ~~(Math.random() * (65 - 10) + 10);
}

// const wavyAnimation = keyframes`
// 0% {transform: scale(1); color: white}
// 50% {transform: scale(3); color: red; width: 50%}
// 100% {transform: scale(1); color: white}
// `;

const appearStarAnimation = keyframes`
  0% { transform: scale(1) rotate(0deg); position: fixed; bottom: 10%; right: 30%}
  50% {  transform: scale(5) rotate(-540deg); position: fixed; bottom: 70%; right: 35%}
  100% {transform: scale(1) rotate(1080deg);}

`;

var appearFooterTextAnimation = keyframes`
    0% { transform: scale(1); position: relative; bottom: 0 }
    50% { transform: scale(4); position: relative; bottom: 10rem }
    70% { transform: scale(1); position: relative; bottom: 0}
    80% { color: white; transform: scale(2) }
    90% { color: black; transform: scale(1) }
    95% { color: white; transform: scale(2) }
    100% { color: default; transform: scale(1)}

`;


export {appearFooterTextAnimation, appearStarAnimation};