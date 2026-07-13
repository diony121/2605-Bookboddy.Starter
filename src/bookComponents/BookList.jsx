import BookCard from "./BookCard";

export default function BookList({books}){
  return (
    <ul>
      {
        books?.map((bookItem) => (
          <BookCard key={bookItem.id} book={bookItem} />
        ))
      }


    </ul>
  );
}