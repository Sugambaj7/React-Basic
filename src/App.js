import "./App.css";
import "./avatar.css";

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MG0wxVE.jpeg"
      height="300px"
      width="300px"
      alt="doraemon"
    />
  );
}

export default function MyApp() {
  return (
    <>
      <h2>Doraemon</h2>
      <section>
        <Profile />
        <Profile />
      </section>
    </>
  );
}
