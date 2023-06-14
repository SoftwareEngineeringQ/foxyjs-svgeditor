import './App.css';
import React from 'react';
import Toolbar from './components/toolbar';
import Menubar from './components/menubar';
import Actionbar from './components/actionbar';
import { Stage } from 'foxyjs';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { stage: void 0 };
  }

  componentDidMount() {
    const board = document.querySelector('.board');
    const stage = new Stage(board);
    window.stage = stage;
    this.setState({
      stage,
    });
  }

  render() {
    return (
      <div className="App">
        <Menubar />
        <div id="editor">
          {this.state.stage && <Toolbar />}
          <div className="board"></div>
          {this.state.stage && <Actionbar />}
        </div>

      </div>
    );
  }
}



export default App;
