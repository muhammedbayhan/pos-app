import Header from "./components/Header/Header"
import Categories from "./components/categories/Categories"


function App() {

  return (
    <>
    <Header/>
    <div className="home px-6 flex justify-between gap-10">
      <div className="categories pb-64 flex-1 overflow-auto max-h-[calc(100vh-_-112px)]">
        <Categories/>
      </div>
      <div className="products flex-[8]">
        <div>products</div>
      </div>
      <div className="cartTotals">
        <div>cardTotals</div>
      </div>

    </div>
    </>
  )
}

export default App
