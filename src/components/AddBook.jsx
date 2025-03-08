import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Book Library</h1>
      <button
        onClick={() => navigate("/add-book")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Book
      </button>
      {/* Render book cards here */}
    </div>
  );
}

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-2"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2"
        ></textarea>
        <input
          type="url"
          placeholder="Cover Image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className="border p-2"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

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
