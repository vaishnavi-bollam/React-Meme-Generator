// Style your components here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
`

export const Input = styled.input`
  width: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Button = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
`
export const Container = styled.div`
  background-image: ${props => `url('${props.imageUrl}')`};
  height: 40vh;
  background-size: cover;
`

export const Para = styled.p`
  color: white;
  font-size: ${props => `'${props.fontSiz}'px`};
`
