import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 10px;
  width:100px;
  background-color: #a8edea;
  font-size: 10px;
  border-radius: 5px;
  border: none;
   font-weight: bold;
  &:hover {
    background-color:#051efc;
    color: white;
  }
`
export const Label = styled.label`
font-weight: bold;
font-size: 20px;
display:flex;
flex-direction:column;
`
export const Form = styled.form`
max-width:400px;
border: 2px solid black;
margin-left:20px;
padding:20px;
border-radius: 10px;
display:flex;
flex-direction:column;
gap:20px;
`
export const Input = styled.input`
font-size: 10px;
width:250px;
height:20px;
background-color: #d3eaed;
border-radius: 5px;
outline:none;`