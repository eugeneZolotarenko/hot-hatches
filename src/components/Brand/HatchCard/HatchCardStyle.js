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
        }
      }
      .hatch-name {
        font-weight: 600;
        font-size: 4rem;
        margin: 0;
        color: ${(props) => props.theme.nightBlue};
        transform: translate(-40%, 40%);
        width: fit-content;
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
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
      .tech-part {
        .hatch-name {
          align-self: flex-end;
          transform: translate(20%, 40%);
        }
      }
      .img-part {
        box-shadow: ${(props) => props.theme.reverseCardShdow};
      }
    }
  }
`

export default HatchCardStyle
