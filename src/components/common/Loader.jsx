import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <LoadingText>Loading...</LoadingText>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  background-color: #000; /* Optional: Add a background color to make it stand out */
  position: fixed; /* Fixes the loader in place */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  .spinner {
    width: 44px;
    height: 44px;
    animation: spinner-y0fdc1 2s infinite ease;
    transform-style: preserve-3d;
  }

  .spinner > div {
    background-color: rgba(0,77,255,0.2);
    height: 100%;
    position: absolute;
    width: 100%;
    border: 2px solid #004dff;
  }

  .spinner div:nth-of-type(1) {
    transform: translateZ(-22px) rotateY(180deg);
  }

  .spinner div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }

  .spinner div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }

  .spinner div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
  }

  .spinner div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
  }

  .spinner div:nth-of-type(6) {
    transform: translateZ(22px);
  }

  @keyframes spinner-y0fdc1 {
    0% {
      transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
    }

    50% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
    }

    100% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
    }
  }
`;

const LoadingText = styled.div`
  color: #fff; /* White text */
  font-size: 18px; /* Size of the text */
  margin-top: 20px; /* Space between the spinner and the text */
  font-weight: 600; /* Optional: Make the text bold */
`;

export default Loader;
