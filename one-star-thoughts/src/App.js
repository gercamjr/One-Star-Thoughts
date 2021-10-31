import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import Home from "./pages/home/Home"
import TopBar from "./topbar/TopBar"

library.add(fab, faCheckSquare, faCoffee, faSearch)



function App() {
  return (
    <>
    <TopBar/>
    <Home/>
    </>
  );
}

export default App;
