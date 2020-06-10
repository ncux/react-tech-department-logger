import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min';
import './App.css';
import { ModalProvider } from "./context";
import { Provider } from "react-redux";
import { store } from "./state/store";
import SearchBar from "./components/search-bar/search-bar";
import Logs from "./components/logs/logs";
import { AddButton } from "./components/addButton/addButton";
import AddLogModal from "./components/modals/addLogModal/addLogModal";
import EditLogModal from "./components/modals/editLogModal/editLogModal";
import { AddTechModal } from "./components/modals/addTechModal/addTechModal";
import { TechListModal } from "./components/modals/techListModal/techListModal";

function App() {

  // initialize materialize JS
  useEffect(() => {
      M.AutoInit();
  }, []);

  return (
      <Provider store={ store }>
          <ModalProvider>
                <>
                  <SearchBar />
                  <div className="container">
                      <AddButton />
                      <AddLogModal />
                      <EditLogModal />
                      <AddTechModal />
                      <TechListModal />
                      <Logs />
                  </div>
                </>
          </ModalProvider>
      </Provider>
  );

}

export default App;
