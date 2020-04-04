import styled from "styled-components"

CSS.registerProperty({
  name: "--pos",
  syntax: "<percentage>",
  initialValue: "100%",
  inherits: true
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
  }

  .active {
    animation: pushYellow 0.4s ease-in-out forwards;
  }

  @keyframes pushYellow {
    to {
      --pos: 15%;
    }
  }
`

export default SwitchesPresentationStyle
