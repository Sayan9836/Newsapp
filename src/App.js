
import './App.css';

// import React, { Component } from 'react'
import React, { useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// export default class App extends Component {
const App = () => {
  const pageSize = 8;
  const apikey = process.env.REACT_APP_NEWS_API

  const[progress,setprogress]=useState(0);

  // setprogress = (progress) => {
  //   setState({ progress: progress })
  // }
  // render() {
    return (
      <div>

        <Router>
          <div>
            <LoadingBar
              color='#f11946'
              progress={progress}
            />
            <Navbar />
            <Routes>
              <Route path="/" element={<News setprogress={setprogress} apikey={apikey} key="general" pageSize={pageSize} country="us" category="general" />} />
              <Route path="/business" element={<News setprogress={setprogress} apikey={apikey} key="business" pageSize={pageSize} country="us" category="business" />} />
              <Route path="/entertainment" element={<News setprogress={setprogress} apikey={apikey} key="entertainmen" pageSize={pageSize} country="us" category="entertainment" />} />
              <Route path="/sports" element={<News setprogress={setprogress} apikey={apikey} key="sports" pageSize={pageSize} country="us" category="sports" />} />
              <Route path="/technology" element={<News setprogress={setprogress} apikey={apikey} key="technology" pageSize={pageSize} country="us" category="technology" />} />
              <Route path="/health" element={<News setprogress={setprogress} apikey={apikey} key="health" pageSize={pageSize} country="us" category="health" />} />
              <Route path="/science" element={<News setprogress={setprogress} apikey={apikey} key="science" pageSize={pageSize} country="us" category="science" />} />
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
  export default App



