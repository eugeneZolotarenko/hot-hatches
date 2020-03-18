import styled from "styled-components"

const BrandStyle = styled.section`
  color: ${(props) => props.theme.nightBlue};
  height: 100%;
  width: 100%;
  .header-search {
    display: flex;
    width: 100%;
    @media (max-width: 850px) {
      flex-direction: column;
    }
  }
`

export default BrandStyle
