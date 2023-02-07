import React, { useEffect, useState } from "react"
import Footer from '../Footer';
import Navbar from '../Navbar';
import '../../styles/Planet.css';
import { Canvas } from "react-three-fiber";
import Terre from '../3D/Terre';

const Planet = () => {
  const [planets, setPlanets] = useState([])

  const fetchData = () => {
    fetch("https://api.le-systeme-solaire.net/rest.php/bodies/terre")
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
    <div className="planetPage">
    <Navbar />
    <div className="planetAll">
      <div className="planetDesc">
           <h1>{planets.name}</h1> 
           <br></br>
           <div className="planetDesc-data-desc">
              <p>
                La Terre est la troisième planète par ordre d'éloignement au Soleil et la cinquième plus grande du Système solaire aussi bien par la masse que par le diamètre. 
                Par ailleurs, elle est le seul objet céleste connu pour abriter la vie. 
                Elle orbite autour du Soleil en 365,256 jours solaires — une année sidérale — et réalise une rotation sur elle-même relativement au Soleil en un jour sidéral (environ 23 h 56 min 4 s), soit un peu moins que son jour solaire de 24 h du fait de ce déplacement autour du Soleila. 
                L'axe de rotation de la Terre possède une inclinaison de 23°, ce qui cause l'apparition des saisons.
              </p>
           </div>
           <br></br>
           <div className="planetDesc-data">
              <h3>Gravité:</h3>
              <p>{planets.gravity}</p>
              <br></br>
              <h3>Gravité:</h3>
              <p></p>
           </div>
           
      </div>
      <div className="planetVisu">
        <Canvas><Terre /></Canvas>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Planet;