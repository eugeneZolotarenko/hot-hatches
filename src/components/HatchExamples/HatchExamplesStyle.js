import styled from "styled-components"

const HatchExamplesStyle = styled.section`
  background: ${(props) => props.theme.yellowSemiWhite};
  display: flex;
  justify-content: center;
  padding-bottom: 15vh;
  div {
    width: 90%;
    box-shadow: 15px 15px 0px 0px ${(props) => props.theme.nightBlue};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    a {
      display: block;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: 35vh;
      position: relative;
      .brand-model {
        position: absolute;
        top: 0;
        left: 0;
        color: ${(props) => props.theme.nightBlue};
        font-size: 4rem;
        font-weight: 800;
        width: 100%;
        height: 100%;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        transition: 0.4s;
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: 0.4s;
        z-index: 0;
      }
      &:hover {
        .brand-model {
          opacity: 1;
        }
        &::before {
          background: ${(props) => props.theme.yellowSemiWhite};
          opacity: 0.7;
        }
        &:nth-child(3n) {
          &::before {
            background: white;
          }
        }
        &:nth-child(3n + 4),
        &:first-child {
          &::before {
            background: ${(props) => props.theme.yellow};
          }
        }
      }
      @media (max-aspect-ratio: 1/1) {
        height: 15vh;
      }
      @media (min-aspect-ratio: 1/1) {
        min-height: 200px;
      }
    }
    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
      box-shadow: 10px 10px 0px 0px ${(props) => props.theme.nightBlue};
    }
  }
`

export default HatchExamplesStyle
