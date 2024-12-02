
import React, { Component } from 'react'
// import Hello from './component/Hello'
import NavBar from './component/NavBar'
// import News from './component/News'
import TopNews from './component/TopNews'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWSAPP_API;

  state ={
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar color='red' progress={this.state.progress} />
          <Routes>
            <Route  path='/' element={<TopNews progress={this.setProgress} key="general" pageSize={9} category="general" country="us" apiKey={this.apiKey} />} />  {/*Here key is used for remounting*/}
            <Route  path='/sports' element={<TopNews progress={this.setProgress} key="sports" pageSize={9} category="sports" country="us" apiKey={this.apiKey} />} />
            <Route  path='/science' element={<TopNews progress={this.setProgress} key="science" pageSize={9} category="science" country="us" apiKey={this.apiKey} />} />
            <Route  path='/health' element={<TopNews progress={this.setProgress} key="health" pageSize={9} category="health" country="us" apiKey={this.apiKey} />} />
            <Route  path='/business' element={<TopNews progress={this.setProgress} key="business" pageSize={9} category="business" country="us" apiKey={this.apiKey} />} />
            <Route  path='/entertainment' element={<TopNews progress={this.setProgress} key="entertainment" pageSize={9} category="entertainment" country="us" apiKey={this.apiKey} />} />
            <Route  path='/technology' element={<TopNews progress={this.setProgress} key="technology" pageSize={9} category="technology" country="us" apiKey={this.apiKey} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
