import "./App.css";
import "./avatar.css";

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={124}
        person={{
          name: "Sugam Bajracharya",
          imgageId: "123",
        }}
      />
    </Card>
  );
}

function Avatar({ size, person }) {
  return (
    <img
      src="https://i.imgur.com/MG0wxVE.jpeg"
      className="avatar"
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
function Card({ children }) {
  return <div className="card">{children}</div>;
}
