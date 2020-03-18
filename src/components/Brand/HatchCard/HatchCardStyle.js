import styled from "styled-components"

const HatchCardStyle = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4%;
  .card-wrapper {
    width: 90%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5% 0;
    color: ${(props) => props.theme.nightBlue};
    .tech-part {
      background-color: ${(props) => props.theme.yellow};
      height: fit-content;
      display: flex;
      flex-direction: column;
      .tech-info {
        padding: 10% 40px 10% 40px;
        margin: 0;
        list-style: none;
        li {
          padding-top: 10px;
          font-size: 2.2rem;
          @media (max-width: 1200px) {
            font-size: 2rem;
          }
          @media (max-width: 850px) {
            font-size: 1.8rem;
          }
        }
        @media (max-width: 1200px) {
          padding: 7% 20px 7% 20px;
      }
      }
      .hatch-name {
        font-weight: 600;
        font-size: 4rem;
        margin: 0;
        color: ${(props) => props.theme.nightBlue};
        transform: translate(-40%, 40%);
        width: fit-content;
        @media (max-width: 1200px) {
          font-size: 3rem;
        }
        @media (max-width: 850px) {
          transform: translate(-20%, 30%);
        }
      }
      @media (max-width: 850px) {
        width: 90%;
      }
    }
    .img-part {
      width: 60%;
      height: 40vh;
      background-size: cover;
      background-position: center;
      background-color: ${(props) => props.theme.nightBlue};
      margin: 0;
      box-shadow: ${(props) => props.theme.cardShadow};
      @media (max-width: 850px) {
        width: 90%;
        height: 25vh;
        box-shadow: 10px 10px 0px 0px #0F2934;
      }
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
      .tech-part {
        .hatch-name {
          align-self: flex-end;
          transform: translate(20%, 40%);
          @media (max-width: 850px) {
            transform: translate(5%, 35%);
        }
        }
      }
      .img-part {
        box-shadow: ${(props) => props.theme.reverseCardShdow};
        @media (max-width: 850px) {
         box-shadow: -10px 10px 0px 0px #0F2934;
        }
      }
      @media (max-width: 850px) {
      flex-direction: column;
      }
    }
    @media (max-width: 1200px) {
      margin: 8% 0;
    }
    @media (max-width: 850px) {
      flex-direction: column;
    }
  }
`

export default HatchCardStyle
