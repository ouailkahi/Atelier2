import { Component } from 'react';
import './App.css';

const list_etudiants = [
  { nom: 'manar', math: 10.5, phys: 12, fr: 16 },
  { nom: 'Mohamed', math: 13, phys: 18, fr: 7 },
  { nom: 'Khalid', math: 15, phys: 15, fr: 13 },
  { nom: 'Ikbal', math: 11, phys: 9, fr: 15 },
  { nom: 'Aziz', math: 17, phys: 12, fr: 6 },
  { nom: 'Said', math: 14, phys: 7, fr: 6 },
  { nom: 'Moujahid', math: 16, phys: 17, fr: 9 },
  { nom: 'Riyad', math: 19, phys: 11, fr: 10 }
]

function Composant1(){
  return <div>
    <ul>
      {list_etudiants.map(e => 
        <li>{e.nom} - Moyenne : {((e.math+e.phys+e.fr)/3).toFixed(2)}</li>
        )}
    </ul>
  </div>
}

class Composant2 extends Component {
  render(){
    return <div>
      <table>
        <tr>
          <th>Nom</th>
          <th>Math</th>
          <th>Phys</th>
          <th>Fr</th>
          <th>Moyenne</th>
        </tr>
        {list_etudiants.map(e => 
            <tr>
              <td>{e.nom}</td>
              <td>{e.math}</td>
              <td>{e.phys}</td>
              <td>{e.fr}</td>
              <td>{((e.math+e.phys+e.fr)/3).toFixed(2)}</td>
            </tr>
          )}
      </table>

    </div>
  }
}
function App() {
  return (
    <div>
     <Composant1 />
     <Composant2 />
    </div>
  );
}

export default App;
