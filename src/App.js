import React from 'react';
import './App.css';
import MenuComp from './component/ui/menu/MenuComp';

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

      </section>
      <footer>
        <div>
            copy right bhkimz
        </div>
      </footer>

    </div>
  );
}

export default App;
