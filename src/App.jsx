import Footer from "./components/footer";
import NavBar from "./components/navBar";
import ProductCard from "./components/postCards";
import ScrollProgress from "./components/scrollProgress";
import products from "./data/products";

function App(){
  return (
    <>
      <NavBar />
      <ScrollProgress />
      <div className="products-container">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <Footer />
    </>
  );
}
export default App;