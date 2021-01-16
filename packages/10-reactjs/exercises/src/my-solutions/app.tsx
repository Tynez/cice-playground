import React, { FC } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { ExerciseFive } from './exercise-five'
import { ExerciseFour } from './exercise-four'
import { ExerciseSix } from './exercise-six'
import { ExerciseNine } from './exercise-nine'
import { ExerciseTen } from './exercise-ten'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Link to="/exercise-four">Exercise four</Link>
      <Link to="/exercise-five">Exercise five</Link>
      <Link to="/exercise-six">Exercise six</Link>
      <Link to="/exercise-nine">Exercise nine</Link>
      <Link to="/exercise-ten">Exercise ten</Link>

      <Route path="/exercise-four">
        <ExerciseFour />
      </Route>
      <Route path="/exercise-five">
        <ExerciseFive />
      </Route>
      <Route path="/exercise-six">
        <ExerciseSix />
      </Route>
      <Route path="/exercise-ten">
        <ExerciseTen />
      </Route>
      <Route path="/exercise-nine">
        <ExerciseNine />
      </Route>
    </BrowserRouter>
  )
}
