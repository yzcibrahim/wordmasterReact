import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Words from './components/Words/Words';
import LangBar from './components/LangBar';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      langs:[{id:1,code:'tr',name:'Türkçe'},
      {id:2,code:'en',name:'İngilizce'},
      {id:3,code:'fr',name:'Fransızca'}],
      selectedlang:0
    }
  }

  componentDidMount(){
    console.log("test başladı");
    fetch("http://localhost:41116/api/Lang")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        // this.setState({
        //   isLoaded: true,
        //   langs: result
        // });
      }
    )
  }

  
  render(){
    const changeSelectedLang=(sl)=>{
      this.setState({selectedlang:sl})
    }
    return (
      <Router>
    <div className="container">
     <div className='row header'>
     <nav className='navbar-nav flex-grow-1'>
          <ul>
            <li className='nav-item mynv'>
              <Link to="/">Home</Link>
            </li>
            <li className='nav-item mynv'>
              <Link to="/about">About</Link>
            </li>
            <li className='nav-item mynv'>
              <Link to="/words">Words</Link>
            </li>
          </ul>
        </nav>
     </div>
     <div className='content row'>
       <div  className='col-md-2'><LangBar changeSelectedLang={changeSelectedLang} selectedlang={this.state.selectedlang} langs={this.state.langs} /></div>
       <div className='col-md-10'>
       <Routes>
         <Route path='/' element={<Home />}  ></Route>
         <Route path='/about' element={<About/>} ></Route>
         <Route path='/words' element={<Words changeSelectedLang={changeSelectedLang} langs={this.state.langs} selectedlang={this.state.selectedlang} />} ></Route>
       </Routes>
       </div>
     </div>
    </div>
    </Router>
  );
}
  
}

export default App;
