import NavigationBar from "./components/NavigationBar/NavigationBar"
import ProductPage from "./components/Product/ProductPage"


function App() {

  return (
    <div className="h-screen w-full flex flex-col">
      <NavigationBar />
      <ProductPage />
    </div>
  )
}

export default App
