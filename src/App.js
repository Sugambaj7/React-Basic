import "./App.css";
import "./avatar.css";

const user = {
  name: "John Doe",
  imageUrl: "https://i.imgur.com/WqDRezM.jpeg",
  imageSize: 90,
};

const items = [
  { id: 1, isVegetables: true, name: "Vegetables" },
  { id: 2, isVegetables: false, name: "Dairy" },
  { id: 3, isVegetables: false, name: "Meat" },
];

function MyItems() {
  const listItems = items.map((item) => (
    <li key={item.id} style={{ color: item.isVegetables ? "Green" : "Red" }}>
      {item.name}
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function MyButton() {
  return <button>I'm a button</button>;
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
      <div>
        <MyItems />
      </div>
    </>
  );
}
