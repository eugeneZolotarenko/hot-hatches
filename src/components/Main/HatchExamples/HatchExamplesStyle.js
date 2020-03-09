import styled from "styled-components"

const HatchExamplesStyle = styled.section`
  background: ${(props) => props.theme.yellowSemiWhite};
  display: flex;
  justify-content: center;
  padding-bottom: 7vh;
  margin-top: -2px;
  .examples-table {
    min-height: 70vh;
    width: 90%;
    box-shadow: ${(props) => props.theme.cardShadow};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 2000px;
    background-color: ${(props) => props.theme.nightBlue};
    .example {
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
        padding: 0 5px;
        text-align: center;
        @media (max-width: 900px) {
          font-size: 2.8rem;
        }
        @media (max-width: 500px) {
          font-size: 1.8rem;
        }
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
      @media (min-width: 400) {
        min-height: 200px;
      }
    }
    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
      box-shadow: 10px 10px 0px 0px ${(props) => props.theme.nightBlue};
      min-height: 45vh;
      .example {
        &:hover {
          &:nth-child(odd) {
            &::before {
              background: ${(props) => props.theme.yellow};
            }
          }
          &:nth-child(even) {
            &::before {
              background: white;
            }
          }
        }
      }
    }
  }
`

export default HatchExamplesStyle
