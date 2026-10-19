import './app.css'
import { Route, Switch } from 'wouter-preact'
import BottomNav from './components/BottomNav'

export function App() {
  return (
    <section class="mobile">
      <Switch>
        <Route path="/">Menu</Route>
        <Route path="/recipe/new">New Recipe</Route>
        <Route path="/recipe/:id">Detail</Route>
        <Route path="/recipe/:id/edit">Edit Recipe</Route>
        <Route path="/plan">Plan</Route>
        <Route path="/list">List</Route>
        <Route path="/log">Log</Route>
        <Route>Not Found</Route>
      </Switch>

      <BottomNav />
    </section>
  )
}
