import logo from './logo.svg';
import './App.css';

let name = "Lokesh Kumar Jangid";

function App() {
  return (
    <>
    <div className="temphead">This is My First React App</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About</li>
        </ul>
      </nav>
      <div className="container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet id voluptatum ad repellendus impedit unde soluta atque quibusdam deleniti nostrum, officiis delectus alias modi ratione molestias, quisquam dicta, tempora reprehenderit!</div>
      <h1>My Name is '{name}'.</h1>
    </>
  );
}

export default App;
