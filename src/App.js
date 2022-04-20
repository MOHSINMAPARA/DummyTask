import './App.css';
import PageBtn from './Components/PageBtn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddDetails from './Components/AddDetails';
import ViewSubmission from './Components/ViewSubmission';




function App() {
  return (

    <div className="container-fluid">
      <BrowserRouter>
      
        <PageBtn />
        <Routes>
          <Route path='/AddDetails' element={<AddDetails />} />
          <Route path='/ViewSubmission' element={ <ViewSubmission/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
