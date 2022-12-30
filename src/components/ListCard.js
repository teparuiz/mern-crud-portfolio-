import {useContext} from "react";
import {Context} from '../context/Context';

function ListCard({product}) {
const {deleteProduct } = useContext(Context)


  return (
    <div className="card-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Pieces</th>
            <th>Description</th>
            <th>Presentation</th>
          </tr>
        </thead>
        <tr>
          <th>{product.id}</th>
          <th> {product.item}</th>
          <th> {product.piece}</th>
          <th> {product.description}</th>
          <th> {product.presentation}</th>
        </tr>
        <tbody>
          <button
            className="btn cyan"
            name="delete"
            type="submit"
            onClick={() => {
            deleteProduct(product.id);
            }}
          >
            Eliminar Item 
          </button>
        </tbody>
      </table>
    </div>
  );
}

export default ListCard;
