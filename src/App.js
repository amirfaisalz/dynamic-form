import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [inputFields, setInputFields] = useState([
    {
      title: "",
      description: ""
    }
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [answer, setAnswer] = useState([]);

  const objAnswer = {
    title,
    description
  };

  const add = () => {
    const values = [...inputFields];
    values.push({ firstName: "", lastName: "" });
    setInputFields(values);
  };

  const minus = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const saveBtn = (event) => {
    event.preventDefault();
    if (!objAnswer.title && !objAnswer.description) {
      setAnswer([]);
      setTitle("");
      setDescription("");
    } else if (!objAnswer.title) {
      setAnswer([]);
      setTitle("");
      setDescription("");
    } else {
      setAnswer(answer.concat(objAnswer));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dynamic Form</h1>
        <div class="">
          <button onClick={add}>Tambah</button>
          <button onClick={minus}>Kurang</button>
        </div>
        <div className="divider"></div>
        {inputFields.map((item, i) => (
          <form>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              onChange={(event) => setDescription(event.target.value)}
            />
          </form>
        ))}

        <div>
          <button onClick={saveBtn}>save</button>
        </div>
        <div className="divider"></div>
        <div>
          {answer.map((item, i) => (
            <h6 key={i}>
              {i + 1}. {item.title}: {item.description}
            </h6>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
