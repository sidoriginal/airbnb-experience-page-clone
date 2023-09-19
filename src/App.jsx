
import './App.css'
import Navbar from './assets/Navbar'
import Hero from './assets/Hero'
import Card from './assets/Card'
import data from "./assets/data.js"
console.log(data)
function App() {
  const cards=data.map(item=>
    {
      return(
      <Card
      key={item.id}
      img={item.coverImg}
      rating ={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location ={item.location}
      title={item.title}
      price ={item.price}
      openSpots={item.openSpots}
/>)
    })
  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
                {cards}
            </section>
    </div>
  )
}

export default App
