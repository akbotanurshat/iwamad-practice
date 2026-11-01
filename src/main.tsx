import './styles/tokens.css'
import './index.css'
import './styles/ui.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import App from './App.tsx'
import { LikesProvider } from './context/LikesContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <LikesProvider>
        <App />
      </LikesProvider>
    </HashRouter>
  </StrictMode>,
)