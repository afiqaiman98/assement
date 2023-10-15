// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useProduct } from "../context/ProductContext";

type DataProductProps = {
  id:number;
  name:string;
}

export function DataProduct({id,name}:DataProductProps) {
  const {
    getProductQuantity,
    decreaseQuantity,
    increaseQuantity,
    removeQuantity,
  } = useProduct()
  const quantity = getProductQuantity(id);
  return (
    <>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Quantity: {quantity}</p>

        <div className="btn-group">
          <button className="btn btn-primary" onClick={() => increaseQuantity(id)}>
            <span>+</span>
          </button>
          <span style={{ margin: "0 3px" }}></span>
          <button className="btn btn-primary" onClick={() => decreaseQuantity(id)}>
            <span>-</span>
          </button>
          
          {quantity > 0 && (
            <button style={{ margin: "0 5px" }} className="btn btn-danger" onClick={() => removeQuantity(id)}>
              Remove
            </button>
          )}
        </div>
        <div className="mt-2">
        <Link to={`/product/${id}?quantity=${quantity}&name=${name}`}>
            <button className="btn btn-info mt-2">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  </>
);
}
