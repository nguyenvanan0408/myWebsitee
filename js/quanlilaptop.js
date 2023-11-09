$(document).ready(function () {
    // Danh sách laptop mẫu
    const laptops = [
        
    ];

    // Hiển thị danh sách laptop
    function displayLaptops(laptops) {
        const laptopTable = $("#laptop-list");
        laptopTable.empty();
        laptops.forEach((laptop, index) => {
            laptopTable.append(`
                <tr>
                    <td>${laptop.name}</td>
                    <td>${laptop.brand}</td>
                    <td>${laptop.price}</td>
                    <td>
                        <button class="edit" data-index="${index}">Sửa</button>
                        <button class="delete" data-index="${index}">Xóa</button>
                    </td>
                </tr>
            `);
        });
    }

    displayLaptops(laptops);

    // Thêm laptop mới
    $("#laptop-form").submit(function (e) {
        e.preventDefault();
        const name = $("#name").val();
        const brand = $("#brand").val();
        const price = $("#price").val();

        if (name && brand && price) {
            laptops.push({ name, brand, price });
            displayLaptops(laptops);
            $("#name").val("");
            $("#brand").val("");
            $("#price").val("");
        }
    });

    // Xóa laptop
    $(document).on("click", ".delete", function () {
        const index = $(this).data("index");
        laptops.splice(index, 1);
        displayLaptops(laptops);
    });

    // Sửa laptop
    $(document).on("click", ".edit", function () {
        const index = $(this).data("index");
        const laptop = laptops[index];

        $("#name").val(laptop.name);
        $("#brand").val(laptop.brand);
        $("#price").val(laptop.price);

        laptops.splice(index, 1);
        displayLaptops(laptops);
    });

    // Tìm kiếm laptop
    $("#search").on("input", function () {
        const searchText = $(this).val().toLowerCase();
        const filteredLaptops = laptops.filter((laptop) => {
            return laptop.name.toLowerCase().includes(searchText) || laptop.brand.toLowerCase().includes(searchText);
        });
        displayLaptops(filteredLaptops);
    });
});