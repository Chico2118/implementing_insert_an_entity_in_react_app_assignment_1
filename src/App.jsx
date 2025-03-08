import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AddBook from "./components/addBook";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/" className="text-blue-600">
          Home
        </Link>
        <Link to="/add-book" className="text-blue-600">
          Add Book
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
