import styled from "styled-components"

CSS.registerProperty({
  name: "--pos",
  syntax: "<percentage>",
  initialValue: "100%",
  inherits: true,
})

const SwitchesPresentationStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .switch {
    margin-top: 20px;
    border: none;
    font-size: 30px;
    text-align: end;
    width: fit-content;
    cursor: pointer;
    background-image: linear-gradient(
      90deg,
      ${(props) => props.theme.semiWhite} var(--pos, 100%),
      ${(props) => props.theme.yellow} var(--pos, 100%)
    );

    @media (max-width: 1050px) {
      font-size: 20px;
    }

    @media (max-width: 600px) {
      margin-top: 0;
      margin-right: 5%;
      padding-bottom: 10px;
      background-image: linear-gradient(
        180deg,
        ${(props) => props.theme.semiWhite} var(--pos, 100%),
        ${(props) => props.theme.yellow} var(--pos, 100%)
      );
    }
    @media (max-width: 370px) {
      font-size: 16px;
    }
  }

  .active {
    animation: pushYellow 0.4s ease-in-out forwards;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }

  @keyframes pushYellow {
    to {
      --pos: 15%;
    }
  }

  @media (max-width: 600px) {
    @keyframes pushYellow {
      to {
        --pos: 0%;
      }
    }
  }
`

export default SwitchesPresentationStyle
