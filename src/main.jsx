// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PlayerContextProvider from './components/playercontext/PlayerContext.jsx'


// import { PlayerProvider } from './components/playercontext/PlayerContext.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <PlayerProvider>
 <PlayerContextProvider>
     <App />
     </PlayerContextProvider>
   
    // </PlayerProvider>

  //  </StrictMode>, 


)
 