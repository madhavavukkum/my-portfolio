import React from 'react';
import styled from 'styled-components';
import { useTheme } from '/src/context/ThemeContext.jsx';

const Loader = () => {
  const { darkMode } = useTheme();

  return (
    <StyledWrapper darkMode={darkMode}>
      <div className="spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <LoadingText darkMode={darkMode}>Loading...</LoadingText>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ darkMode }) => (darkMode ? '#1a1a1a' : '#fff')};

  .spinner {
    width: 44px;
    height: 44px;
    animation: spinner-y0fdc1 2s infinite ease;
    transform-style: preserve-3d;
  }

  .spinner > div {
    background-color: ${({ darkMode }) =>
      darkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'};
    height: 100%;
    position: absolute;
    width: 100%;
    border: 2px solid ${({ darkMode }) => (darkMode ? '#60a5fa' : '#3b82f6')};
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
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
  font-size: 18px;
  margin-top: 20px;
  font-weight: 600;
`;

export default Loader;
