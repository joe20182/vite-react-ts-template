import styled from 'styled-components'
import { rwd } from '@/style/rwd'

export const AddBtn = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  ${rwd('md')(`
    background-color: #777;
    color: #ff4c4c;
  `)}
`
