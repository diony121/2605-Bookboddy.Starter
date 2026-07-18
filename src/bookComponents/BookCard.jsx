import { Link } from "react-router";
export default function BookCard({book}){

 const ShortDescriptio = book.description && book.description.length > 150
      ? book.description.slice(0, 150) + "..."
      : book.description;


  return (
    <div className="single-book">
      <img className="book-image" src={book.coverimage} alt={book.title}/>
      <div className="book-info">
        <h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
        <h4>{book.author}</h4>
        <p>{book.description}</p>
      </div>
      

    </div>
  )
}