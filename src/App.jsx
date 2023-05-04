import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import {TodoList,AddTodo,EditTodo} from "./pages/ExportsIndex.js"

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<TodoList />} />
          <Route path="add-todo" element={<AddTodo />} />
          <Route path="edit-todo" element={<EditTodo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
