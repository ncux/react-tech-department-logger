import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min';
import './App.css';
import { SearchBar } from "./components/search-bar/search-bar";
import { Logs } from "./components/logs/logs";

function App() {

  // initialize materialize JS
  useEffect(() => {
      M.AutoInit();
  }, []);

  return (
    <>
      <SearchBar />
      <div className="container">
          <Logs />
      </div>
    </>
  );

}

export default App;
