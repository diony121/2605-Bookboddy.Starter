import { useState, useEffect } from "react";
import { useParams, Link , useNavigate} from "react-router";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";

const API = import.meta.env.VITE_API_URL;

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { user, reserveBook} = useAuth()
  const navigate = useNavigate();

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

  const handleReserve = () => {
    reserveBook(book.id);
    navigate("/account");
  };

  return (
    <div className="book-detail">
      <img src={book.coverimage} alt={book.title} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.description}</p>
      {user?.id ? (
        book.available ? (
          <button onClick={handleReserve}>Reserve Book</button>
        ) : (
          <button disabled>Already reserved</button>
        )
      ) : (
        <p>
          <Link to="/login">Log in</Link> to reserve this book.
        </p>
      )}
    </div>
  );
};

export default SingleBook;