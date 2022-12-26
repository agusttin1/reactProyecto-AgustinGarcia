import styled, { keyframes } from "styled-components";

const blink = keyframes`
50% { border-color: transparent}
`;
const typing = keyframes`
    from { width: 0}
    to{width: 110px;}
`;
const pulseAnimation = keyframes`
to {
       transform: perspective(168px) translateZ(56px);
       opacity: 0;
    }
`;

export const ContLoader = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: var(--bg-primary);
`;

export const Pulse = styled.div`
  width: 56px;
  height: 24.6px;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--color-primary);
    box-shadow: 0 0 0 28px var(--color-primary);
    clip-path: polygon(
      -28px -11.2px,
      10% -6.7px,
      20% 0,
      calc(50% - 9px) 0,
      calc(50% - 5.6px) -11.2px,
      calc(50% - 4.5px) -9px,
      calc(50% + 4.5px) -9px,
      calc(50% + 5.6px) -11.2px,
      calc(50% + 9px) 0,
      80% 0,
      90% -6.7px,
      calc(100% + 28px) -11.2px,
      100% 80%,
      calc(100% + 5.6px) calc(100% + 5.6px),
      60% 100%,
      50% calc(100% + 9px),
      40% 100%,
      -5.6px calc(100% + 5.6px),
      0 80%
    );
  }

  &::after {
    animation: ${pulseAnimation} 1s infinite;
    transform: perspective(168px) translateZ(0px);
  }
`;

export const TextLoader = styled.span`
  font-family: "Knewave";
  letter-spacing: 2px;
  color: var(--color-primary);
  font-family: 20px;
  display: block;
  white-space: nowrap;
  border-right: 4px solid;

  animation: ${typing} 2s steps(12), ${blink} 0.5s infinite step-end alternate;
  overflow: hidden;
`;
