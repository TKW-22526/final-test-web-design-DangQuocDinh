
const products = [
    {
        id: 1,
        name: "Suzuki Ertiga 2026",
        price: "589 triệu - 700 triệu",
        desc: "Phiên bản cải tiến của đời 2022,mẫu MPV đầu tiên trong phân khúc có cấu hình động cơ hybrid nhẹ (mild hybrid) với khả năng tiết kiệm nhiên liệu tốt hơn bản cũ.",
        image: "https://i1-vnexpress.vnecdn.net/2022/09/28/HybridErtigajpg-1664383054.jpg?w=750&h=450&q=100&dpr=2&fit=crop&s=p3K8viwgRNaACYTYPcMDtA"
    },
    {
        id: 2,
        name: "Toyota Corolla Cross 2026",
        price: "711 triệu - 865 triệu",
        desc: "Hãng xe Nhật Bản Toyota ra mắt Corolla Cross 2024 cho thị trường Việt Nam. Đây cũng là phiên bản nâng cấp đầu tiên sau ba năm bán ra toàn cầu của mẫu gầm cao cỡ B+. Xe nhập khẩu chính hãng từ Thái Lan.",
        image: "https://i1-vnexpress.vnecdn.net/2024/05/06/ToyotaCorollaCross20240jpg-1714968935.jpg?w=750&h=450&q=100&dpr=2&fit=crop&s=eeNdl0FpkbmEL_h2qYfI-A"
    },
    {
        id: 3,
        name: "Haval Jolion 2025",
        price: "669 triệu - 719 triệu",
        desc: "So với đàn anh Haval H6 có phần chững chạc hơn, thiết kế Jolion mang đường nét bo tròn, trẻ trung hơn. Hai phiên bản đều đi kèm lưới tản nhiệt kiểu bầu trời sao, nối liền cặp đèn pha LED thấu kính. Dải định vị LED tách riêng và đặt thấp hơn so với đèn chiếu sáng.",
        image: "https://i1-vnexpress.vnecdn.net/2025/03/05/HavalJolionUltravnexpress12jpg-1741163874.jpg?w=750&h=450&q=100&dpr=2&fit=crop&s=0tVNVgmhWjLVhDg8ktyYAw"
    },
    
   
    {
        id: 4,
        name: "Honda HR V2026 bản cao cấp",
        price: "699 triệu - 869 triệu",
        desc: "HR-V 2026 là phiên bản nâng cấp giữa chu kỳ của thế hệ thứ hai ra mắt năm 2022. Thiết kế hiện đại, động cơ được cải tiến, cải thiện khả năng cách âm.",
        image: "https://i1-vnexpress.vnecdn.net/2025/04/05/HondaHRVeHEV2025Topjpg-1743870584.jpg?w=750&h=450&q=100&dpr=2&fit=crop&s=WvCGfB83xRa9UloOhcBVFg"
    },
	{
        id: 5,
        name: "Honda Civic 2026",
        price: "789 triệu - 999 triệu",
        desc: "Honda Civic hybrid giữ nguyên thiết kế như các bản máy xăng, ngoại trừ cản trước tinh chỉnh nhẹ.",
        image: "https://i1-vnexpress.vnecdn.net/2025/03/10/HondaCivicHEV2024VnE8005JPG-1741575102.jpg?w=750&h=450&q=100&dpr=2&fit=crop&s=1Y1hOFG4lOLb9t6FbJXyKQ"
    },
    {
        id: 6,
        name: "Subaru Crosstrek 2026",
        price: "1 tỷ 98 triệu - 1 tỷ 268 triệu",
        desc: "Crosstrek có tạo hình trẻ trung, khoẻ khoắn với lưới tản nhiệt hình lục giác.",
        image: "https://i1-vnexpress.vnecdn.net/2024/10/25/MON9626jpeg-1729863254.jpg?w=750&h=450&q=100&dpr=2&fit=crop&s=fyFl9Leg9feHAmasaFAn0Q"
    },
	{
		id: 7,
        name: "Volvo XC60",
        price: " 2 tỷ 299 triệu - 2 tỷ 750 triệu",
        desc: "XC60 thuộc bản nâng cấp giữa chu kỳ, nhập khẩu Malaysia. Xe cạnh tranh các đối thủ như Mercedes GLC, BMW X3.",
        image: "https://i1-vnexpress.vnecdn.net/2025/11/25/VolvoXC60PHEV2026vnexpressJPG-1764035029.jpg?w=750&h=450&q=100&dpr=2&fit=crop&s=CcqVUAloVHB0rEvtEkO5ZQ"
	},
	{
		id: 8,
        name: "BMW XM",
        price: " 10 tỷ 99 triệu - 10 tỷ 599	 triệu",
        desc: "XM là dòng SUV hiệu suất cao đắt và mạnh nhất trong dải sản phẩm của BMW. Xe do phân nhánh thể thao M Performance phát triển độc lập và là mẫu sản phẩm đầu tiên dòng M dùng động cơ hybrid. ",
        image: "https://i1-vnexpress.vnecdn.net/2023/11/12/DSC09713JPG-1699744047.jpg?w=750&h=450&q=100&dpr=2&fit=crop&s=GxhJ2KDaR5WNmK6WyS4e_Q"
	}
];
const productLink = "lien-he.html";
const detailLink = "chi-tiet.html";
function renderProducts() {
    const grid = document.getElementById("productsGrid");
    grid.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
				<div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price} VND</div>
                <div class="product-desc">${product.desc}</div>
                <a class="btn-detail" id="link-${product.id}">Liên hệ</a>
				<a class="btn-view-detail" id="detail-${product.id}">Xem chi tiết</a>
            </div>
        `;
        const linkElement = card.querySelector(`#link-${product.id}`);
        linkElement.setAttribute("href", productLink + "?id=" + product.id);
		
		const detailElement = card.querySelector(`#detail-${product.id}`);
		detailElement.setAttribute("href", detailLink + "?id=" + product.id);
		
        grid.appendChild(card);
    });
}
document.addEventListener("DOMContentLoaded", renderProducts);
