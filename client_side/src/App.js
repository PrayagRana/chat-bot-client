import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import chatBox from './component/chatbox';

function App() {
  return (
    <Router>
       <Route path="/"exact component={chatBox}/>
    </Router>
  );
}

export default App;
