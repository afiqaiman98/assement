
export  function ProductDetails() {
    const searchParams = new URLSearchParams(location.search);
const quantity = searchParams.get("quantity");
const name = searchParams.get("name");
  return (
    <div>
    <h2>Product Details for: {name}</h2>
    <p>Quantity: {quantity}</p>
  </div>
  )
}

