import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './pages/counter'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
  </StrictMode>,
)
