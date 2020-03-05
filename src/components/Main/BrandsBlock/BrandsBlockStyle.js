import styled from "styled-components"

const BrandsBlockStyle = styled.section`
  position: relative;
  height: fit-content;
  padding-bottom: 10vh;
  margin-top: -2px;
  .header-container {
    background: ${(props) => props.theme.verticalYellowSemiWhite};
    width: 49.99%;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      padding: 5vh 0;
      margin: 0;
      font-size: 6.3rem;
      font-weight: normal;
      position: relative;
      .first-letter {
        top: -20%;
        left: -30%;
      }
      @media (max-width: 1400px) {
        font-size: 5.3rem;
      }
      @media (max-width: 900px) {
        font-size: 4.3rem;
      }

      @media (max-width: 600px) {
        font-size: 3.5rem;
        padding-bottom: 3vh;
      }
    }
  }
  .brands-container {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    padding: 20px;
    a {
      color: ${(props) => props.theme.nightBlue};
      margin: 20px;
      font-size: 3.5rem;
      font-weight: 500;
      display: block;
      height: fit-content;
      position: relative;
      @media (max-width: 1400px) {
        font-size: 3.3rem;
      }
      @media (max-width: 900px) {
        font-size: 2.8rem;
      }

      @media (max-width: 600px) {
        font-size: 2.1rem;
      }
      &:hover {
        background: linear-gradient(90deg, #f3b81d 95%, #fcfff3 5%);
      }
    }
  }
  &::before {
    content: "";
    background: ${(props) => props.theme.nightBlue};
    width: 51vw;
    height: 11px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  @media (max-width: 600px) {
    padding-bottom: 7vh;
  }
`
export default BrandsBlockStyle
