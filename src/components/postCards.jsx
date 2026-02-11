function ProductCard({ product }) {
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p className="rating">⭐ {product.rating}</p>

      <p className="price">
        ₹{discountedPrice.toFixed(0)}
        <span className="original-price">₹{product.price}</span>
      </p>

      <p className="discount">{product.discount}% OFF</p>
    </div>
  );
}

export default ProductCard;