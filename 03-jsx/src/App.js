import React from 'react';

import {Link, Routes, Route} from "react-router-dom";

import Expr from './pages/expr';
import If1 from './pages/if1';
import If2 from './pages/if2';
import If3 from './pages/if3';
import If4 from './pages/if4';

import Loop1 from './pages/loop1';
import Loop2 from './pages/loop2';
import Loop3 from './pages/loop3';


const App=()=> {
  return (
    <div>
     <h1>03-jsx</h1>

     <nav>
      <Link to="/expr">[Expr]</Link>

      <Link to="/if1">[IF1]</Link>
      <Link to="/if2">[IF2]</Link>
      <Link to="/if3">[IF3]</Link>
      <Link to="/if4">[IF4]</Link>

      <Link to="/loop1">[Loop1]</Link>
      <Link to="/loop2">[Loop2]</Link>
      <Link to="/loop3">[Loop3]</Link>
     </nav>

     <hr />

     <Routes>
      <Route path="/expr" element={<Expr />}></Route>

      <Route path="/if1" element={<If1 />}></Route>
      <Route path="/if2" element={<If2 />}></Route>
      <Route path="/if3" element={<If3 />}></Route>
      <Route path="/if4" element={<If4 />}></Route>


      <Route path="/loop1" element={<Loop1 />}></Route>
      <Route path="/loop2" element={<Loop2 />}></Route>
      <Route path="/loop3" element={<Loop3 />}></Route>


     </Routes>
    </div>
  );
}

export default App;
