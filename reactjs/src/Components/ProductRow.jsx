import { formatPrice } from "../data/data.js";

function ProductRow({ product, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{formatPrice(product.price)}</td>
      <td>
        {product.inStock ? (
          <span className="badge-status badge-status--in">Còn hàng</span>
        ) : (
          <span className="badge-status badge-status--out">Hết hàng</span>
        )}
      </td>
    </tr>
  );
}

export default ProductRow;
