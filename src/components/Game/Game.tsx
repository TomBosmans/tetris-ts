import React from "react"
import PlayfieldProvider from "src/PlayfieldProvider"
import Keybindings from "src/components/Keybindings"
import Arena from "src/components/Arena"
import Details from "src/components/Details"
import Preview from "src/components/Preview"
import { GlobalStyle, PlayfieldStyle, ArenaStyle, DetailsStyle, PreviewStyle } from "src/styled"

export default function Game() {
  return (
    <PlayfieldProvider>
      <GlobalStyle />
      <Keybindings />

      <PlayfieldStyle>
       <ArenaStyle>
          <Arena />
        </ArenaStyle>

        <DetailsStyle>
          <Details/>
        </DetailsStyle>

        <PreviewStyle>
          <Preview />
        </PreviewStyle>
     </PlayfieldStyle>
    </PlayfieldProvider>
  )
}
