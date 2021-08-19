import logo from './logo.svg';
import './App.css';
import Home from '../src/Components/Home'
import Box from "@material-ui/core/Box";


function App() {
  return (
    <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
>
<Home/>
</Box>
    
  );
}

export default App;
