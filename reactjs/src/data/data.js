export const products = [
    { id: 1, name: "Điện thoại iPhone 15", category: "Điện thoại", price: 24990000, inStock: true },
    { id: 2, name: "Máy tính bảng Samsung Galaxy Tab S9", category: "Máy tính bảng", price: 18500000, inStock: true },
    { id: 3, name: "Chuột Logitech MX Master 3S", category: "Phụ kiện", price: 2490000, inStock: false },
    { id: 4, name: "Máy tính xách tay MacBook Air M3", category: "Laptop", price: 31990000, inStock: true },
    { id: 5, name: "Tai nghe Sony WH-1000XM5", category: "Tai nghe", price: 7990000, inStock: true },
];

// Danh sách danh mục dùng cho dropdown của form
export const categories = ["Điện thoại", "Máy tính bảng", "Laptop", "Phụ kiện", "Tai nghe"];

/**
 * Định dạng giá tiền theo kiểu Việt Nam: 24990000 -> "24.990.000 đ"
 */
export function formatPrice(value) {
    return value.toLocaleString("vi-VN") + " đ";
}
