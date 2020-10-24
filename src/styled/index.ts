import styled, { createGlobalStyle } from "styled-components"
import { WIDTH, HEIGHT, PADDING } from "src/constants"

export const GlobalStyle = createGlobalStyle`
  body {
    background: #2e3440;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const border = `${2*PADDING}px solid #4c566a`

export const PlayfieldStyle = styled.div`
  color: #d8dee9;
  font-weight: bold;

  border: ${border};
  border-radius: ${2*PADDING}px;

  display: grid;
  grid-template-areas:
    "arena arena details"
    "arena arena preview"
    "arena arena ."
    "arena arena ."
    "arena arena ."
`

export const ArenaStyle = styled.div`
  grid-area: arena;

  border: ${border};
  border-left: 0px;
  border-bottom: 0px;
  border-top: 0px;

  background: #4c566a; 
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
`
export const PreviewStyle = styled.div`
  grid-area: preview;

  border-bottom: ${border};
  padding: 20px;
`
export const DetailsStyle = styled.div`
  grid-area: details;
  border-bottom: ${border};

  ul {
    list-style-type: none;
    padding: 5px;
  }
`
