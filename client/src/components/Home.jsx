import React from 'react'
import AnimalsMine from './AnimalsMine';
import AnimalsSaved from './AnimalsSaved';
import AnimalsAll from './AnimalsAll';
import AnimalAdd from './AnimalAdd';

export default function Home(props) {
 
  return (
    <div class="Home">
      <section id="animals-all">
        <AnimalsAll
          currentUser={props.currentUser} />
      </section>

      <section id="animals-mine">
        <AnimalsMine
          currentUser={props.currentUser} />
      </section>

      <section id="animals-saved">
        <AnimalsSaved
          currentUser={props.currentUser} />
      </section>

      {/* <section id="animals-add">
        <AnimalAdd />
      </section> */}
    </div>
  )
}
