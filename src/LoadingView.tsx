import React from "react";
import styled, { keyframes } from "styled-components";

type Props = {};

export const LoadingView: React.FC<Props> = props => {
  return (
    <StyledLoadingView>
      <div className="colored large-rect" />
      <div className="bottom">
        <div className="colored round" />
        <div className="text-container">
          <div className="colored text long" />
          <div className="colored text long" />
          <div className="colored text short" />
        </div>
      </div>
      <div className="blur" />
    </StyledLoadingView>
  );
};

const move = keyframes`
  0% {
    transform: translate3d(0, -100%, 0);
  }
  80% {
    transform: translate3d(0, 100%, 0);
  }
  100% {
    transform: translate3d(0, 120%, 0);
  }
`;

const StyledLoadingView = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-bottom: 40px;
  overflow: hidden;

  .colored {
    background-color: #ccc;
  }

  > .large-rect {
    height: 200px;
    width: 100%;
    margin-bottom: 12px;
  }

  > .bottom {
    display: flex;
    padding: 0 16px;

    > .round {
      height: 40px;
      min-height: 40px;
      width: 40px;
      min-width: 40px;
      border-radius: 99px;
    }

    > .text-container {
      width: 100%;
      margin-left: 16px;

      > .text {
        height: 16px;
        width: 100%;
        border-radius: 4px;
        margin-bottom: 8px;

        &.short {
          width: 40%;
        }
      }
    }
  }

  > .blur {
    background-image: linear-gradient(
      transparent 0%,
      #fbfbfb 45%,
      #fbfbfb 55%,
      transparent 100%
    );
    opacity: 0.8;
    height: 300%;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    animation: ${move} 2s linear infinite;
  }
`;
