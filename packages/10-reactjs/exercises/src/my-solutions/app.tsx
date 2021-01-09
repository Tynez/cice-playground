import React, { FC } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { ExerciseFive } from './exercise-five'
import { ExerciseFour } from './exercise-four'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Link to="/exercise-four">Exercise four</Link>
      <Link to="/exercise-five">Exercise five</Link>

      <Route path="/exercise-four">
        <ExerciseFour />
      </Route>
      <Route path="/exercise-five">
        <ExerciseFive />
      </Route>
    </BrowserRouter>
  )
}
