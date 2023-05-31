import "./App.css";
import "./avatar.css";

export default function Profile() {
  return (
    <div className="items">
      <ul>
        <li>
          <Items isVegetable={true} name="Tomato" />
        </li>
        <li>
          <Items isVegetable={false} name="Apple" />
        </li>
        <li>
          <Items isVegetable={true} name="Potato" />
        </li>
      </ul>
    </div>
  );
}
function Items({ isVegetable, name }) {
  return (
    <div className="item">
      <h3>{name}</h3>
      <p>{isVegetable ? "Vegetable" : "Fruit"}</p>
    </div>
  );
}
