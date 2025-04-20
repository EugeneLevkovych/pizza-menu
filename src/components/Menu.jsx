import Pizza from "./Pizza";
import { pizzaData } from "./Pizza";

export default function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizz) => (
            // <Pizza name={pizz.name} photoName={pizz.photoName} key={pizz.name} />
            <Pizza pizzaObj={pizz} key={pizz.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}
