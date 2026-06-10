import ProductRow from "./ProductRow.jsx";

function ProductTable({ products }) {
  return (
    <section className="card shadow-sm h-100">
      <div className="card-body">
        <h2 className="h5 fw-bold mb-1">Danh sách sản phẩm</h2>
        <p className="text-muted small mb-4">
          Danh sách sản phẩm mẫu được hiển thị từ dữ liệu hệ thống.
        </p>

        <div className="table-responsive">
          <table className="table align-middle product-table">
            <thead>
              <tr className="text-uppercase small text-muted">
                <th scope="col">STT</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Danh mục</th>
                <th scope="col">Giá</th>
                <th scope="col">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <ProductRow key={product.id} product={product} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProductTable;
