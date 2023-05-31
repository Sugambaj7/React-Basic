import "./App.css";
import "./avatar.css";

const person = {
  name: "Sugam Bajracharya",
  age: 21,
  theme: {
    backgroundColor: "pink",
    color: "white",
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name} Todo List</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/cdBxQfX.gif"
        alt="user"
        srcset=""
      />

      <ul>
        <li>To go to workout</li>
        <li>To go to work</li>
        <li>To do assignments</li>
        <li>To watch movies</li>
      </ul>
    </div>
  );
}
