import './index.css'
import Topbar from './scenes/global/Topbar';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-dom';
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>

    <CssBaseline/>
   
    <div className="app">
      <div className='content'><Topbar/> </div>
      <Routes>
        <Route />
      </Routes>
   
      
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;


