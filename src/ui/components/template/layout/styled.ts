import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.medium};
`