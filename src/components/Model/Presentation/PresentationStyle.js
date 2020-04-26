import styled from "styled-components"

const PresentationStyle = styled.section`
  width: fit-content;
  display: flex;
  justify-content: flex-end;
  box-shadow: ${props => props.theme.cardShadow};
  border-left: 6px solid ${props => props.theme.yellow};
  border-top: 6px solid ${props => props.theme.yellow};
  canvas {
    cursor: grab;
  }
  .image360-container {
  width: fit-content;
  height: fit-content;
  position: relative;
}

.image360 {
  position: absolute;
  top: 0;
  left: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: none;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
}

.active {
  display: block;
  position: relative;
  width: 67vw;

  @media (max-width: 600px) {
    width: 85vw;
  }
}

  .model-slider {
    width: 67vw;
    max-height: calc(67vw * 0.65);
    .awssld__bullets {
      display: none;
    }
    .awssld__content {
      background-color: ${props => props.theme.nightBlue};
    }
    .awssld__controls {
      button {
        span {
          &::before,
          &::after {
            background-color: ${props => props.theme.yellow};
          }
        }
      }
    }
    .awssld__bar {
      background-color: ${props => props.theme.orange};
    }
    @media (max-width: 600px) {
      width: 85vw;
    }
  }

  @media (max-width: 600px) {
    box-shadow: ${props => props.theme.mobileCardShadow};
  }
`

export default PresentationStyle
