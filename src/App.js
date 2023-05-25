import "./App.css";
import "./avatar.css";

const user = {
  name: "John Doe",
  imageUrl: "https://i.imgur.com/WqDRezM.jpeg",
  imageSize: 90,
};

function handleClick(event) {
  return alert("You clicked a button!");
}

function MyButton() {
  return <button onClick={handleClick}>Click Me!!!</button>;
}

export default function MyApp() {
  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
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
