import React from 'react';
import {BrowserRouter  , Route, Routes} from 'react-router-dom';
import { Provider } from './components/Context/index.js';
import BlogsList from './components/blogsList/blogsList.js';
import NewBlog from './components/NewBlog/NewBlog.js';
import Header from './components/Header/Header.js';

function App() {

  

  
  return (
    <Provider  >

    <div className="App">
       <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<BlogsList />}/>
          <Route path="/new-blog" element={<NewBlog  />} />
        </Routes>

       </BrowserRouter>

    </div>
    </Provider>
  );
}

export default App;
