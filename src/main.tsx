import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TitleExample } from './TitleExample/TitleExample'
import { ButtonExample } from './ButtonExample/ButtonExample'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>

      <TitleExample titulo="Esto es un test" texto="Este es una plantilla utilizando el modo biblioteca de Vite" />
      <ButtonExample texto="Click me!" />
    </>
  </StrictMode>,
)
