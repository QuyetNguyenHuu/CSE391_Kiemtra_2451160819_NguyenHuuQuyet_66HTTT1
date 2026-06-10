// Lấy các phần tử DOM cần thao tác
const tableBody = document.getElementById("product-table-body");
const form = document.getElementById("product-form");
const categorySelect = document.getElementById("category");

/**
 * Định dạng giá tiền theo kiểu Việt Nam: 24990000 -> "24.990.000 đ"
 */
function formatPrice(value) {
    return value.toLocaleString("vi-VN") + " đ";
}

/**
 * Trả về đoạn HTML badge trạng thái tương ứng với inStock.
 */
function renderStatusBadge(inStock) {
    return inStock
        ? '<span class="badge-status badge-status--in">Còn hàng</span>'
        : '<span class="badge-status badge-status--out">Hết hàng</span>';
}

/**
 * Vẽ lại toàn bộ bảng sản phẩm từ mảng products.
 */
function renderTable() {
    tableBody.innerHTML = products
        .map(
            (product, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${formatPrice(product.price)}</td>
        <td>${renderStatusBadge(product.inStock)}</td>
      </tr>`
        )
        .join("");
}

/**
 * Đổ danh sách danh mục vào thẻ <select> của form.
 */
function renderCategoryOptions() {
    categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

/**
 * Xử lý sự kiện submit form: kiểm tra dữ liệu, tạo sản phẩm mới và vẽ lại bảng.
 */
function handleAddProduct(event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const category = form.category.value;
    const price = Number(form.price.value);
    const inStock = form.status.value === "true";

    // Kiểm tra dữ liệu đầu vào tối thiểu
    if (!name || !category || !price) {
        alert("Vui lòng nhập đầy đủ Tên sản phẩm, Danh mục và Giá hợp lệ.");
        return;
    }

    // Tạo id mới = id lớn nhất hiện có + 1
    const newId = products.length
        ? Math.max(...products.map((p) => p.id)) + 1
        : 1;

    products.push({ id: newId, name, category, price, inStock });

    renderTable();
    form.reset();
}

// ===== Khởi tạo ứng dụng =====
renderCategoryOptions();
renderTable();
form.addEventListener("submit", handleAddProduct);
