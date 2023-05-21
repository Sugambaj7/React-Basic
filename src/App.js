import "./App.css";

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
    </>
  );
}
