import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const Face = styled.div<{ color?: string; rotate: string }>`
  background-color: ${(props) => props.color};
  font-size: 5em;
  line-height: 50%;
  border: solid black 1px;
  color: black;
  display: flex;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: rotate3d(${(props) => props.rotate}) translateZ(50px);
`;

const Container = styled.div`
  height: 200px;
  transform: translate(0px, 100px);
  cursor: pointer;
  user-select: none;
`;

const Dice = () => {
  return (
    <>
      <Face color="#f94144" rotate="1, 0, 0, 90deg">
        •
      </Face>
      <Face color="#f3722c" rotate="1, 0, 0, -90deg">
        • •
      </Face>
      <Face color="#f9c74f" rotate="0, 1, 0, 90deg">
        • • •
      </Face>
      <Face color="#90be6d" rotate="0, 1, 0, -90deg">
        • • • •
      </Face>
      <Face color="#43aa8b" rotate="1, 0, 0, 180deg">
        ••• ••
      </Face>
      <Face color="#277da1" rotate="0, 0, 1, 0deg">
        ••• •••
      </Face>
    </>
  );
};

const spinAnimation = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const rollAnimation = keyframes`
  from {
    transform: rotate3D(1,1,1,0deg);
  }
  to {
    transform: rotate3d(1,1,1,360deg);
  }
`;

const DicePosition = styled.div<{ x: number; y: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ x, y }) => `rotateX(${x}deg) rotateY(${y}deg)`};
  transform-style: preserve-3d;
`;

const DiceAnimation = styled.div<{ animation: string }>`
  ${({ animation }) => {
    if (animation === "spin") {
      return css`
        animation: ${spinAnimation} 5s linear infinite;
      `;
    }
    if (animation === "roll") {
      return css`
        animation: ${rollAnimation} 400ms linear infinite;
      `;
    }
    return css`
      transform: rotate3d(-1, 1, 0, 10deg);
    `;
  }}
  transform-style: preserve-3d;
`;

const VirtualDice = () => {
  const [rotation, setRotation] = useState({ x: 45, y: 45 });
  const [animation, setAnimation] = useState<string>("spin");

  const rollDice = () => {
    const x = 90 * Math.floor(4 * Math.random());
    const y = 90 * Math.floor(4 * Math.random());
    setRotation({ x, y });
    setAnimation("roll");
    setTimeout(() => {
      setAnimation("none");
    }, 2000);
  };

  return (
    <Container
      onClick={() => {
        rollDice();
      }}
    >
      <DiceAnimation animation={animation}>
        <DicePosition x={rotation.x} y={rotation.y}>
          <Dice />
        </DicePosition>
      </DiceAnimation>
    </Container>
  );
};

export default VirtualDice;
