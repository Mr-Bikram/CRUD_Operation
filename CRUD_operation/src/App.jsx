import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (inputText.trim() !== "") {
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = inputText;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, inputText]);
      }
      setInputText("");
    }
  };

  const handleEditTask = (index) => {
    setInputText(tasks[index]);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setEditIndex(null);
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
    setEditIndex(null);
  };

  return (
    <div className="bg-black h-screen">
      <div className="w-full min-h-screen bg-gradient-to-bl from-violet-900 to-fuchsia-900 p-3">
        <div className="w-full max-w-[540px] bg-white mt-[100px] mb-5 mx-auto pt-10 pb-[70px] px-[30px] rounded-[10px]">
          <h2 className="text-[#002765] flex items-center mb-5">To-Do List</h2>
          <div className="flex items-center justify-between mb-[25px] pl-5 rounded-[30px] bg-[#edeef0] border border-gray-900">
            <input
              type="text"
              id="input-box"
              placeholder="Add Your Text"
              className="flex-1 p-2.5 border-[none] outline-none bg-transparent"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              className="text-white font-bold text-base cursor-pointer px-[50px] py-4 rounded-[40px] border-[none] outline-none bg-green-800"
              onClick={handleAddTask}
            >
              {editIndex !== null ? "Update" : "Add"}
            </button>
          </div>
          <ul id="list-container">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="text-[17px] select-none cursor-pointer relative pl-[50px] pr-2 py-3 before:content-[''] before:absolute before:h-7 before:w-7 before:bg-cover before:bg-center before:rounded-[50%] before:left-2 before:top-3"
              >
                {task}
                <button
                  className="bg-blue-800 p-2 rounded-full text-white font-bold ml-2"
                  onClick={() => handleEditTask(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-800 p-2 rounded-full text-white font-bold ml-2"
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </button>
              </li>
            ))}
            <button 
            onClick={handleDeleteAllTasks}
            className="bg-red-800 p-4 rounded-full text-white font-bold ml-2">
              Delete All
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
