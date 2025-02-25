import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const Face = styled.div<{ $color?: string; $rotate: string }>`
  background-color: ${(props) => props.$color};
  font-size: xx-large;
  color: black;
  display: flex;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: rotate3d(${(props) => props.$rotate}) translateZ(50px);
`;

const Dice = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Face $color="teal" $rotate="1, 0, 0, 90deg">
        1
      </Face>
      <Face $color="coral" $rotate="1, 0, 0, -90deg">
        2
      </Face>
      <Face $color="mediumorchid" $rotate="0, 1, 0, 90deg">
        3
      </Face>
      <Face $color="plum" $rotate="0, 1, 0, -90deg">
        4
      </Face>
      <Face $color="deepskyblue" $rotate="1, 0, 0, 180deg">
        5
      </Face>
      <Face $color="gold" $rotate="0, 0, 1, 0deg">
        6
      </Face>
    </div>
  );
};

const spin = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const roll = keyframes`
  from {
    transform: rotate3D(1,1,1,0deg);
  }
  to {
    transform: rotate3d(1,1,1,360deg);
  }
`;

const RotatedDice = styled(Dice)<{ $x: number; $y: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ $x, $y }) => `rotateX(${$x}deg) rotateY(${$y}deg)`};
  transform-style: preserve-3d;
`;

const SpiningDice = styled.div<{ $animation: string }>`
  ${({ $animation }) => {
    if ($animation === "spin") {
      return css`
        animation: ${spin} 5s linear infinite;
      `;
    }
    if ($animation === "roll") {
      return css`
        animation: ${roll} 400ms linear infinite;
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
    console.log(x, y);
    setRotation({ x, y });
    setAnimation("roll");
    setTimeout(() => {
      setAnimation("none");
    }, 2000);
  };

  return (
    <div
      onClick={() => {
        rollDice();
      }}
      style={{ height: "200px", transform: "translate(0px, 100px)" }}
    >
      <SpiningDice $animation={animation}>
        <RotatedDice $x={rotation.x} $y={rotation.y}></RotatedDice>
      </SpiningDice>
    </div>
  );
};

export default VirtualDice;
