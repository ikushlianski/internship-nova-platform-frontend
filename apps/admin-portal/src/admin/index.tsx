import { Admin, Resource, ListGuesser } from "react-admin"
import dataProvider from "../mocks/dataProvider"

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
    <Resource name="students" list={ListGuesser} />
    <Resource name="mentors" list={ListGuesser} />
    <Resource name="paths" list={ListGuesser} />
    <Resource name="classes" list={ListGuesser} />
  </Admin>
)

export default App
