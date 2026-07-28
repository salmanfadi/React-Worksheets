import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Effectcomp from './effectcomp.jsx'
import Memo from './memo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Memo/>
  </StrictMode>,
)
