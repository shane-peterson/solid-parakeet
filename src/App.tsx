import '@/App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card ">
        <button
          className="focus:bg-blue-500 "
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
      <ol>
        <li>
          <a href="#p1">Jump to the 1 paragraph!</a>
        </li>
        <li>
          <a href="#p2">Jump to the 2 paragraph!</a>
        </li>
        <li>
          <a href="#p3">Jump to the 3 paragraph!</a>
        </li>
      </ol>
      <h3>My Fun Article</h3>
      <p id="p1" className="target:bg-yellow-400 target:before:content-['►']">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid
        assumenda adipisci quis pariatur rerum impedit officia praesentium
        similique iure maiores numquam itaque laborum deserunt, animi nobis
        vitae, reprehenderit soluta!
      </p>
      <p id="p2" className="target:bg-yellow-400 target:before:content-['►']">
        Fugiat labore laboriosam ab ex quod! Doloribus, facilis sint libero
        accusantium quasi assumenda. Saepe distinctio voluptates assumenda
        recusandae suscipit aut reprehenderit, nemo voluptatum eligendi fugit
        quam, rerum similique obcaecati sapiente.
      </p>
      <p id="p3" className="target:bg-yellow-400 target:before:content-['►']">
        Nobis nostrum at fugiat iste, nihil unde tempore blanditiis odio quod
        vel. Dolor vitae accusantium ut similique, explicabo et eius modi!
        Porro, dicta fugiat id incidunt facilis quasi eaque nostrum.
      </p>
    </div>
  );
}

export default App;
