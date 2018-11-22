import React, { Component } from 'react';
import './App.css';
import Editors from './components/Editor';
import Preview from './components/Preview';

class App extends Component {
  state = {
    editor:'',
    markdown : ''

  }
  changePreview = (content) => {
    //console.log(content);

  let newState = this.state
  newState.editor = content
  this.setState(newState)

  }
  render() {
    return (
      <div className="App">
        
        <Editors changePreview={this.changePreview}/>

        <Preview content={this.state.editor} />
      </div>
    );
  }
}

export default App;
