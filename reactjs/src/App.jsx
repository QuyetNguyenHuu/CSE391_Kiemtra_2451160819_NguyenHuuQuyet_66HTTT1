import { useState } from "react";
import Header from "./components/Header.jsx";
import ProductForm from "./components/ProductForm.jsx";
import ProductTable from "./components/ProductTable.jsx";
import { products as initialProducts } from "./data/data.js";

function App() {
  // State trung tâm: toàn bộ danh sách sản phẩm
  const [productList, setProductList] = useState(initialProducts);

  /**
   * Thêm một sản phẩm mới vào danh sách.
   * Tạo id mới = id lớn nhất hiện tại + 1 để tránh trùng.
   */
  const handleAddProduct = (newProduct) => {
    const newId = productList.length
      ? Math.max(...productList.map((p) => p.id)) + 1
      : 1;

    setProductList((prev) => [...prev, { id: newId, ...newProduct }]);
  };

  return (
    <>
      <Header
        title="Quản lý danh sách sản phẩm"
        subtitle="Giao diện nhập liệu và hiển thị danh sách sản phẩm một cách trực quan, rõ ràng."
      />

      <main className="container-fluid my-4">
        <div className="row g-4">
          {/* Cột trái: form thêm mới */}
          <div className="col-lg-4">
            <ProductForm onAddProduct={handleAddProduct} />
          </div>

          {/* Cột phải: bảng hiển thị động */}
          <div className="col-lg-8">
            <ProductTable products={productList} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
