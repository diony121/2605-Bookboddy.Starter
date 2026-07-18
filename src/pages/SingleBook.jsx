import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        const { data } = await axios.get(`${API}/books/${id}`);
        setBook(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBook();
  }, [id]);

  if (!book) return null; 

  return (
    <div className="book-detail">
      <img src={book.coverimage} alt={book.title} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.description}</p>
      <button>Reserve Book / already reserveed</button>
    </div>
  );
};

export default SingleBook;