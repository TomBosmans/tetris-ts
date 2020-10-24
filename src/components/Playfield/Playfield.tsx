import React from "react"
import Arena from "src/components/Arena"
import Keybindings from "src/components/Keybindings"
import PlayfieldProvider from "src/PlayfieldProvider"
import Score from "src/components/Score"
import Level from "src/components/Level"
import Preview from "src/components/Preview"
import { SideContainer, GlobalStyle } from "src/styled"

export default function Playfield() {
  return (
    <PlayfieldProvider>
      <GlobalStyle />
      <Keybindings />
      <Arena />
      <SideContainer>
        <Preview />
        <Score />
        <Level />
      </SideContainer>
    </PlayfieldProvider>
  )
}
