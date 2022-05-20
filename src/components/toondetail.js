import React from 'react'
import styled from 'styled-components'

import {
  raceId,
  classArray,
  capitalizeFirstLetter,
  factionId
} from '../helpers'
import toonshot from '../assets/spittinrage.jpg'
import alliance from '../assets/alliance.png'
import horde from '../assets/horde.png'

const Toon = ({ char }) => {
    return (
        <toonStyle>
            <figure>
        <img
          src={char.faction === 0 ? alliance : horde}
          alt={factionId[char.faction]}
        />
      </figure>
      <h1>{char.name}</h1>
      <h2>
        Level {char.level} {raceId[char.race]} {classArray[char.class]}
      </h2>
      <div className="row">
          <div className="column">
              <h3> Attributes </h3>
              <div className="stat-group">
              <div className="stat">Character</div>
                <div className="value"> {char.name}
                </div>
                <div className="stat">Realm</div>
                <div className="value"> {char.realm.name}
                </div>
                <div className="stat">Gender</div>
                <div className="value"> {char.gender.name}
                </div>
                <div className="stat">Faction</div>
                <div className="value"> Horde
                </div>
          </div>
          </div>
      </div>
        </toonStyle>
    )
}

export default Toon
const toonStyle = styled.div`
background-color: rgba(14, 22, 48, 0.9);
padding: 2.5rem;
@media (min-width: 700px) {
  width: 50%;
  margin-left: 5rem;
}
figure {
  width: 10rem;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
h1,
h2,
h3 {
  letter-spacing: 1px;
}
h1 {
  font-size: 3rem;
  color: #d7a12e;
  text-align: center;
}
h2 {
  text-align: center;
  margin-bottom: 2rem;
}
h3 {
  margin-bottom: 1rem;
}
.row {
  display: grid;
  grid-template-columns: 47% 47%;
  grid-gap: 5%;
  margin-bottom: 1rem;
}
.stat {
  color: #d7a12e;
}
.stat-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
`