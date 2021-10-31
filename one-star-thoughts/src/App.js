import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import TopBar from "./topbar/TopBar"

library.add(fab, faCheckSquare, faCoffee, faSearch)



function App() {
  return (
    <>
    <TopBar/>
    </>
  );
}

export default App;
