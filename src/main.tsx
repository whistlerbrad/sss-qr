import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StudentLanding } from './pages/StudentLanding'
import './index.css'

const STUDENT_PATH = '/brad-meraly'

function isStudentPage(): boolean {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  return path === STUDENT_PATH
}

const root = document.getElementById('root')!
if (isStudentPage()) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <StudentLanding />
    </React.StrictMode>
  )
} else {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
