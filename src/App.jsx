import NavigationBar from "./components/NavigationBar/NavigationBar"
import ProductPage from "./components/Product/ProductPage"


function App() {

  return (
    <div className="h-full w-full flex flex-col">
      <NavigationBar />
      <ProductPage />
    </div>
  )
}

export default App
