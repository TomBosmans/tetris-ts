import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #2e3440;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin 0;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
`
