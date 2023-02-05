import React, { useEffect, useState } from "react"
import Footer from '../Footer';
import Navbar from '../Navbar';
import '../../styles/Planet.css';

const Planet = () => {
  const [planets, setPlanets] = useState([])

  const fetchData = () => {
    fetch("https://api.le-systeme-solaire.net/rest/bodies/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPlanets(data.bodies);
        console.log(data.bodies);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (  
    <div className="planetPage">
    <Navbar />
    <div className="planetAll">
      <div className="planetDesc">
        {planets.length > 0 && (
            <ul>
              {planets.map(planet => (
                <li key={planet.id}>
                  {planet.name}
                </li>
              ))}
            </ul>
        )}
      </div>
      <div className="planetVisu">

      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Planet;