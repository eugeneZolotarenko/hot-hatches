import styled from "styled-components"

const MainHeaderStyle = styled.section`
  background: ${(props) => props.theme.yellowSemiWhite};
  min-height: 150px;
  position: relative;
  padding: 14vh 0 10vh 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    color: #cf7207;
    font-size: 4rem;
    font-weight: 800;
    position: absolute;
    top: 4%;
    left: 2%;
    margin: 0;
    @media (max-width: 600px) {
      width: 40%;
      font-size: 2.8rem;
      margin-top: 4vh;
    }
  }

  h2 {
    font-size: 6.3rem;
    font-weight: normal;
    width: 50%;
    max-width: 1000px;
    margin-right: 5%;
    position: relative;
    line-height: 9rem;

    &::before {
      content: "T";
      color: ${(props) => props.theme.orange};
      font-size: 16rem;
      font-weight: bold;
      position: absolute;
      opacity: 0.3;
      top: -5%;
      left: -6%;
      @media (max-width: 1400px) {
        font-size: 15rem;
      }

      @media (max-width: 900px) {
        font-size: 14rem;
      }

      @media (max-width: 600px) {
        font-size: 10rem;
      }
    }

    @media (max-width: 1400px) {
      font-size: 5.3rem;
      line-height: 8rem;
    }
    @media (max-width: 900px) {
      font-size: 4.3rem;
      line-height: 6rem;
      margin-right: 2%;
    }

    @media (max-width: 600px) {
      margin-top: 8vh;
      width: 85%;
      font-size: 3.5rem;
      line-height: 5rem;
    }
  }

  .little-hatch {
    background: url("little-hatch.gif");
    background-size: cover;
    width: 300px;
    height: 170px;

    @media (max-width: 900px) {
      width: 220px;
      height: 120px;
    }
    @media (max-width: 600px) {
      width: 180px;
      height: 95px;
      align-self: flex-end;
    }
  }

  &::before {
    content: "";
    background: ${(props) => props.theme.nightBlue};
    width: 51vw;
    height: 11px;
    position: absolute;
    top: 0;
    right: 0;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    padding-top: 4vh;
    padding-bottom: 6vh;
  }
`

export default MainHeaderStyle
