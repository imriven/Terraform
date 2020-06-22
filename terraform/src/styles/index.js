import Styled from 'styled-components';
import { LogoKeyFrames } from "./keyframes"


//App
export const BackgroundContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
flex-wrap: wrap;
margin-top: 5%;
color:black;
text-align: center;
width:80%;
`

export const VideoBackground = Styled.div`
display: flex;
justify-content: center;
`
//Intro

export const AwesomeButton = Styled.button`
display:flex;
justify-content: center;
text-align: justify;
box-shadow: 5px 5px 8px black;
padding: 1% 12%;
border-radius: 5px;
font-size: 1.5em;
margin: 15% 1%;
outline:none;
width: 10%;
background: linear-gradient(19deg, rgba(131,58,180,1) 0%, rgba(29,253,89,0.6110819327731092) 50%, rgba(69,177,252,1) 100%);
color:black;
`
//console

export const AwesomeButton2 = Styled.button`
display:flex;
justify-content: center;
text-align: justify;
box-shadow: 5px 5px 8px black;
padding: 1% 5%;
border-radius: 5px;
font-size: 1.5em;
margin: 5%;
outline:none;
width: 10%;
background: linear-gradient(19deg, rgba(131,58,180,1) 0%, rgba(29,253,89,0.6110819327731092) 50%, rgba(69,177,252,1) 100%);
color:black;
`;

//general
export const Container = Styled.div`
display:flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
align-content:center;
margin-top:1%;
`

export const Para = Styled.p`
display:flex;
text-align: center;
color:white;
font-size: 1.5em;
width:50;
margin: 0 auto;
font-family: 'Open Sans', sans-serif;
margin-bottom: 3%;
line-height: 2em;
`;

export const ContainerDiv = Styled.div`
display:flex;
flex-direction: column;
flex-wrap:wrap;
align-content: center;
box-shadow: 5px 5px 8px #b7472a;
padding: 3% 5% 15% 5%;
border-radius: 25px;
font-size: .7em;
outline:none;
width: 90%;
background: linear-gradient(19deg, rgba(131,58,180,0.8) 16%, rgba(69,177,252,0.8) 76%);
color:white;
margin: 15% 40%;
`;

//animations
export const LogoAnimate = Styled.div`
animation: ${LogoKeyFrames} 5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
margin:5%;
`

