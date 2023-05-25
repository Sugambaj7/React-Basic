import "./App.css";
import "./avatar.css";
import { useState } from "react";

const user = {
  name: "John Doe",
  imageUrl: "https://i.imgur.com/WqDRezM.jpeg",
  imageSize: 90,
};

export default function MyApp() {
  const [count, setCount] = useState(0);
  function MyButton({ count, onClick }) {
    return (
      <>
        <div>
          <button onClick={onClick}>Clicked {count} times!!!</button>
        </div>
      </>
    );
  }
  function handleClick(event) {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>

      <div>
        <h2>JSX fragment allows to render multiple elements</h2>
      </div>

      <div>
        <h3>{user.name}</h3>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
      </div>
    </>
  );
}
