import './app.css'
import { Route, Switch } from 'wouter-preact'
import BottomNav from './components/BottomNav'
import Menu from './screens/Menu'
import GroceryList from './screens/GroceryList'
import CookLog from './screens/CookLog'
import WeeklyPlan from './screens/WeeklyPlan'
import RecipeDetail from './screens/RecipeDetail'
import NewRecipe from './screens/NewRecipe'
import EditRecipe from './screens/EditRecipe'

export function App() {
  return (
    <section class="mobile">
      <Switch>
        <Route path="/">
          <Menu />
        </Route>
        <Route path="/recipe/new">
          <NewRecipe />
        </Route>
        <Route path="/recipe/:id">
          <RecipeDetail />
        </Route>
        <Route path="/recipe/:id/edit">
          <EditRecipe />
        </Route>
        <Route path="/plan">
          <WeeklyPlan />
        </Route>
        <Route path="/list">
          <GroceryList />
        </Route>
        <Route path="/log">
          <CookLog />
        </Route>
        <Route>Not Found</Route>
      </Switch>

      <BottomNav />
    </section>
  )
}
