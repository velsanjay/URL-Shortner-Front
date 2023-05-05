import LongUrl from './Routs/longUrl';
import './App.css';
import CustomizedTables from './Routs/Table';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const url ='https://url-shortner-jrj8.onrender.com'

function App() {
  return (
    <div className="App">
      <LongUrl/>  
      <CustomizedTables/>
      <ToastContainer />
    </div>
  );
}

export default App;
