import { useEffect, useState, useRef } from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer"
import UserCard from "./Component/Usercard";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <Navbar />

      <button onClick={focusInput}>
         Search
      </button>

      <input
        type="text"
        placeholder="Cari user..."
        ref={inputRef}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}

      <Footer />
    </div>
  );
}

export default App;