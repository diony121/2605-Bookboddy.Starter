import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router";

const Account = () => {
  const { user, reservations, returnBook } = useAuth();

  if (!user?.id) {
    return (
      <div>
        <p>Please log in to view your account.</p>
        <Link to="/login">Log in</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome, {user.firstname}!</h2>
      <p>Your email on file with us is {user.email}.</p>

      <h3>Your reservations</h3>
      {reservations.length === 0 ? (
        <p>You have no reservations yet.</p>
      ) : (
        reservations.map((book) => (
          <div key={book.id}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <button onClick={() => returnBook(book.id)}>Return book</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Account;