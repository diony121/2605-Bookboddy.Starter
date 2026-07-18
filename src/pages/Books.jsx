import { useState, useEffect } from "react";
import { getBooks } from "../api/books";
import BookList from "../bookComponents/BookList";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    async function loadBooks() {
      const data = await getBooks();
      setBooks(data);
    }
    loadBooks()
  },[])

  return (
    <div>
      <h2>Catalog</h2>
      <BookList books={books}></BookList>
    </div>
  )
}

export default Books