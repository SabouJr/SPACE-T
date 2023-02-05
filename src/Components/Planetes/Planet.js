import React, { useEffect, useState } from "react"
import Footer from '../Footer';
import Navbar from '../Navbar';

const Planet = () => {
  const [planets, setPlanets] = useState([])

  const fetchData = () => {
    fetch("https://api.le-systeme-solaire.net/rest/bodies/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPlanets(data);
        console.log(data);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (  
    <div>
    <Navbar />
      {planets.length > 0 && (
        <ul>
          {planets.map(planet => (
            <li key={planet.id}>{planet.name}</li>
          ))}
        </ul>
      )}
      <Footer />
    </div>
  )
}

export default Planet;