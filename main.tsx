import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ButtonBasicExample } from './src/ButtonExample/ButtonBasicExample'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <ButtonBasicExample texto="Click me!" />
    </>
  </StrictMode>,
)
