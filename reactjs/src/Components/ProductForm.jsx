import { useState } from "react";
import { categories } from "../data/data.js";

function ProductForm({ onAddProduct }) {
  // Trạng thái khởi tạo của form
  const initialForm = { name: "", category: "", price: "", inStock: "true" };
  const [form, setForm] = useState(initialForm);

  // Cập nhật state khi người dùng gõ/chọn
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Đặt lại form về trạng thái ban đầu
  const handleReset = () => setForm(initialForm);

  // Xử lý submit
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = form.name.trim();
    const price = Number(form.price);

    // Kiểm tra dữ liệu đầu vào tối thiểu
    if (!name || !form.category || !price) {
      alert("Vui lòng nhập đầy đủ Tên sản phẩm, Danh mục và Giá hợp lệ.");
      return;
    }

    // Gửi sản phẩm mới lên component cha
    onAddProduct({
      name,
      category: form.category,
      price,
      inStock: form.inStock === "true",
    });

    handleReset();
  };

  return (
    <section className="card shadow-sm h-100">
      <div className="card-body">
        <h2 className="h5 fw-bold mb-1">Thêm sản phẩm mới</h2>
        <p className="text-muted small mb-4">
          Nhập đầy đủ thông tin để thêm sản phẩm vào danh sách.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Tên sản phẩm */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              Tên sản phẩm
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Nhập tên sản phẩm"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          {/* Danh mục */}
          <div className="mb-3">
            <label htmlFor="category" className="form-label fw-semibold">
              Danh mục
            </label>
            <select
              className="form-select"
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option value="">-- Chọn danh mục --</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Giá */}
          <div className="mb-3">
            <label htmlFor="price" className="form-label fw-semibold">
              Giá
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              placeholder="Nhập giá"
              min="0"
              value={form.price}
              onChange={handleChange}
            />
          </div>

          {/* Trạng thái còn hàng */}
          <div className="mb-4">
            <label htmlFor="inStock" className="form-label fw-semibold">
              Trạng thái còn hàng
            </label>
            <select
              className="form-select"
              id="inStock"
              name="inStock"
              value={form.inStock}
              onChange={handleChange}
            >
              <option value="true">Còn hàng</option>
              <option value="false">Hết hàng</option>
            </select>
          </div>

          {/* Nút hành động */}
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary flex-grow-1">
              Thêm sản phẩm
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleReset}
            >
              Làm mới form
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ProductForm;
