import './App.css'
import React, { useState } from 'react';

function App() {
    const [name, setName] = useState("Antonio");
    const [newName, setNewName] = useState('');
  
    const handleNameChange = (newName) => {
      setName(newName);
    };
  
    return (
      <>
        <h2>{name}</h2>
          <button onClick={() => handleNameChange("Carlos")}>Carlos</button>
          <button onClick={() => handleNameChange("Samuel")}>Samuel</button>
          <button onClick={() => handleNameChange("Antonio")}>Antonio</button>
      </>
    );
}

export default App
