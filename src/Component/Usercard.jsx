import { useState } from "react";

function UserCard({ user }) {
  const [like, setLike] = useState(0);
  const [follow, setFollow] = useState(false);

  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>@{user.user}</p>

      <button onClick={() => setLike(like + 1)}>
        Like {like}
      </button>

      <button onClick={() => setFollow(!follow)}>
        {follow ? "Following" : "Follow"}
      </button>
    </div>
  );
}

export default UserCard;