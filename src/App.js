import React from "react";
import { RouterProvider } from 'react-router-dom';
import { router } from "./Router";
import './styles/app.sass'
import { QuestProvider } from "./context/QuestContext"

function App() {

  return (
    <div className="App">
      <QuestProvider>
        <RouterProvider router={router} />
      </QuestProvider>
    </div>
  );

}

export default App;
