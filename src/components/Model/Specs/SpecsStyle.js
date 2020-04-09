import styled from "styled-components"

const SpecsStyle = styled.section`
  max-width: 2000px;
  display: flex;
  position: relative;
  .header-container {
    max-width: 17%;
    min-height: 150px;
    max-height: 160px;
    min-width: 15%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: linear-gradient(180deg, #fcfff3 50%, #f3b81d 50%);
    margin-right: 10vw;
    align-self: start;

    h3 {
      font-size: 5.2rem;
      transform: translateX(50%);
      font-weight: normal;
      margin: 0;
      color: ${(props) => props.theme.nightBlue};

      .model-first-letter {
        top: -140%;
        left: -45%;
        transform: scale(0.8);
      }
    }
  }

  .specs-container {
    width: fit-content;
    margin-top: 120px;
    .specs-wrapper {
      list-style-type: none;
      padding: 45px 30px;
      margin: 0;
      width: fit-content;
      .spec {
        font-size: 2.2rem;
        line-height: 1.8;
        font-weight: 500;
        @media (max-width: 1450px) {
          font-size: 2rem;
        }
        @media (max-width: 1100px) {
          width: fit-content;
        }
      }
      @media (max-width: 1450px) {
        padding: 30px 25px;
      }
      @media (max-width: 1100px) {
        display: flex;
        flex-direction: column;
      }
    }
    @media (max-width: 1100px) {
      margin-top: 20px;
    }
  }

  .dark-container {
    background: ${(props) => props.theme.nightBlue};
    min-width: 18%;
    max-width: 18%;
    height: 300px;
    .specs-wrapper {
      .spec {
        color: white;
      }
    }
    @media (max-width: 1450px) {
      max-width: 20%;
      min-width: 20%;
    }
    @media (max-width: 1100px) {
      min-width: 50%;
      max-width: 50%;
      align-self: flex-end;
      height: fit-content;
    }
  }

  .yellow-container {
    width: 35%;
    height: 250px;
    background-color: ${(props) => props.theme.yellow};
    /* .specs-wrapper {
      align-self: flex-end;
    } */

    @media (max-width: 1100px) {
      width: 65%;
      align-self: flex-start;
      justify-content: flex-end;
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`

export default SpecsStyle
