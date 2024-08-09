import styled from 'styled-components'

export const Wrapper = styled.button`
  display: flex;
  ${({ theme: { margin } }) => `
    margin: ${margin.large}
  `}
`