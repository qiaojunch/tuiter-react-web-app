//import logo from './logo.svg';
import './App.css';
import Labs from './labs';
import Tuiter from './tuiter';
import HelloWord from './labs/a6/hello-world';
import {BrowserRouter, Link} from 'react-router-dom';   // listen to url route change
import {Route, Routes} from 'react-router';
import Nav from './nav';

function App() {
  return (
    <BrowserRouter>
        <div className="container-fluid">
            
            <Routes>
                <Route index element={<HelloWord />} />
                <Route path="/labs/*" element={<Labs />} />
                <Route path="/tuiter/*" element={<Tuiter />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
