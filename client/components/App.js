import React from "react";
import AddItem from "./AddItem";
import List from "./List";

const App = () => (
  <div className="container p-5">
    <h1 className="display-3">
      Todos<small className="text-muted"> with React Hooks</small>
    </h1>
    <AddItem />
    <div className="card scroll shadow-sm p-3 mb-5 bg-white rounded">
      <div className="card-body">
        <List />
      </div>
    </div>
  </div>
);

export default App;
