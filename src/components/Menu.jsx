import Pizza from './Pizza'
import { pizzaData } from './Pizza'
export default function Menu() {
    return <main className="menu">
         <h2>Our menu</h2> 
          <ul className='pizzas'>
            {pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name}/>))}
          </ul>

         {/* <Pizza
          name="Pizza Spinaci"
          ingredient="Tomato, mozarella, spinach, and ricotta cheese"
          photoName="/img/spinaci.jpg"
          price={10}
          />
          <Pizza
          name="Pizza Funghi"
          ingredient="Tomato, mushrooms"
          photoName="/img/funghi.jpg"
          price={11}
          />       */}
        </main>
}