// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 40px;
`

export const MainHeading = styled.h1`
  color: #35469c;
  font-size: 28px;
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 12px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 300px;
  height: auto;
  padding: 10px;
  border: 1px solid #d7dfe9;
  border-radius: 2px;
  font-size: 12px;
  outline: none;
  margin-bottom: 20px;
`

export const Select = styled.select`
  width: 300px;
  height: auto;
  border: 1px solid #d7dfe9;
  border-radius: 2px;
  font-size: 12px;
  outline: none;
  margin-bottom: 20px;
  padding: 10px;
  cursor: pointer;
`

export const Options = styled.option`
  font-size: 12px;
  height: 100%;
`

export const GenerateButton = styled.button`
  cursor: pointer;
  color: white;
  font-size: 12px;
  padding: 5px;
  width: 100px;
  height: 35px;
  border: 0px solid;
  border-radius: 2px;
  background-color: #0b69ff;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props =>
    props.bgImage
      ? props.bgImage
      : 'https://assets.ccbp.in/frontend/react-js/nature-img.png'});
  width: 350px;
  height: 300px;
  background-size: cover;
`
export const TopText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
`
