import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import MenuComp from './component/ui/menu/MenuComp';
import Boardlist from './component/ui/board/Boardlist';


function App() {
  return (
    <div className="App">
      <header>
        <div className="Title"><h2>bhkimz blog</h2></div>
      </header>
      <nav>
        <MenuComp></MenuComp>
      </nav>
      <section className="Content">
        <Boardlist></Boardlist>
      </section>
      <footer>
        <div>
          copy right bhkimz
        </div>
      </footer>

    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    boards: state.boards
  };
}

export default connect(mapStateToProps)(App);

