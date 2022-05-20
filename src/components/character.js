import React from 'react'
import styled from 'styled-components'
import Toon from './toondetail'

const Character = ({ char, error }) => {
  console.log(char)
  return char ? (
    <CharacterStyle>
    <Toon char={char} />
    </CharacterStyle>
  ) : error ? (
    <CharacterStyle>
      <h2>Ut oh! {error}</h2>
    </CharacterStyle>
  ) : null
}

const CharacterStyle = styled.section`
  background-color: rgba(14, 22, 48, 0.65);
  color: #fafafa;
  padding: 5rem;
  margin-top: 2rem;
  margin-bottom: 6rem;
  h2 {
    text-align: center;
  }
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`

export default Character