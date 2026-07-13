export default function BookCard({book}){

  return (
    <div className="single-book">
      <img className="book-image" src={book.coverimage} alt={book.title}/>
      <div className="book-info">
        <h2>{book.title}</h2>
        <h4>{book.author}</h4>
        <p>{book.description}</p>
      </div>
      

    </div>
  )
}