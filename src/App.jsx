import Home from "./components/Home/Home"
import NavigationBar from "./components/NavigationBar/NavigationBar"


function App() {

  return (
    <div className="h-full w-full flex flex-col">
      <NavigationBar />
      <Home />
    </div>
  )
}

export default App
