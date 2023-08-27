let btnEmailSubmit = document.getElementById('submit')
// 
// info.classList.add("hide")
let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btnEmailSubmit.addEventListener('click', function () {
    let inputValue = document.getElementById('input').value
    let inputValueDecor = document.getElementById('input')
    let inputValueLabel = document.getElementById('submit-label')
    let info = document.getElementById('information')
    if (inputValue == '') {
        inputValueLabel.textContent = 'Bạn chưa nhập email. Xin vui lòng nhập vào.'
        inputValueLabel.classList.add('invalid-label')
        inputValueDecor.classList.add('invalid-value')

    } else if (regex.test(inputValue) == true) {
        let form = document.getElementById('email-input')
        form.classList.add('hide')
        info.classList.remove('hide')

    } else if (regex.test(inputValue) == false) {
        inputValueLabel.textContent = 'Email không hợp lệ. Xin vui lòng nhập lại.'
        inputValueLabel.classList.add('invalid-label')
        inputValueDecor.classList.add('invalid-value')

    }


})


// ==================================== 18.8.2023 ======================
// Lệnh này sẽ trả về một tập hợp HTMLCollection các phần tử 
// có cùng class được chỉ định.
// Nên biến collectionOfDivElements sẽ chứa nhiều phần tử chứ không phải 1 phần tử.
let collectionOfDivElements = document.getElementsByClassName('job-info-items')

// Dùng vòng lặp for để quét từng phần tử div trong tập hợp
// đã lấy được ở trên để đăng ký handler cho sự kiện mouseover cho bọn chúng.
// Sự kiện mouseover xảy ra khi user rê trỏ chuột bên trên phần tử.
for (let oneDivInfoElement of collectionOfDivElements) {

    // VỚI MỖI PHẦN TỬ DIV CÓ CLASS job-info-items TRONG COLLECTION:

    // 1. Đăng ký handler cho sự kiện khi có trỏ chuột di chuyển bên 
    // trên (mouseover) phần tử div. (handler sẽ xóa class hide khỏi button trong div)
    oneDivInfoElement.addEventListener('mouseover', function () {
        // Lấy nút lệnh button con của phần tử div.
        // Từ khóa this chỉ phần tử đang gọi hàm addEventListener.
        // Chú ý: Đây là kỹ thuật DOM Traverse (lấy phần tử con)
        let viewButton = this.querySelector('button')

        // Kiểm tra xem button đang có class hide không
        if (viewButton.classList.contains('hide') == true) {
            // Vô tới đây là có class hide --> xóa nó để button hiện ra
            viewButton.classList.remove('hide')
        }

    })

    // 2. Đăng ký handler cho sự kiện khi có trỏ chuột di chuyển ra khỏi (mouseout)
    // phần tử div. (handler sẽ thêm class hide vào button trong div)
    oneDivInfoElement.addEventListener('mouseout', function () {
        // Lấy nút lệnh button con của phần tử div.
        // Từ khóa this chỉ phần tử đang gọi hàm addEventListener.
        // Chú ý: Đây là kỹ thuật DOM Traverse (lấy phần tử con)
        let viewButton = this.querySelector('button')

        // Kiểm tra xem button đang KHÔNG CÓ class hide không
        if (viewButton.classList.contains('hide') == false) {
            // Vô tới đây là không có class hide --> thêm nó để button ẩn đi
            viewButton.classList.add('hide')
        }
    })
}


// Lệnh này sẽ trả về một tập hợp HTMLCollection các phần tử 
// có cùng class được chỉ định.
// Nên biến collectionOfButtonElements sẽ chứa nhiều phần tử button chứ 
// không phải 1 phần tử.
let collectionOfButtonElements = document.getElementsByClassName('view-button')

// Dùng vòng lặp for để quét từng phần tử button trong tập hợp
// đã lấy được ở trên để đăng ký handler cho sự kiện click cho bọn chúng.
for (let oneButtonElement of collectionOfButtonElements) {
    // Đăng ký handler cho từng nút lệnh.
    // Handler xử lý: Thêm hoặc xóa class hide cho phần tử div 
    // anh (đứng liền trên nó) của nó (chính là phần tử div chứa thông
    // tin)
    oneButtonElement.addEventListener('click', function () {
        // Dùng kỹ thuật DOM traverse để lấy phần tử anh (đứng liền trên)
        // của nút lệnh đang đăng ký handler.
        this.previousElementSibling.classList.toggle('hide')

        if (this.previousElementSibling.classList.contains('hide') == false) {
            this.textContent = '▲ VIEW LESS'
        } else {
            this.textContent = '▼ VIEW MORE'
        }


        // Khi hiển thị phần tử div thông tin thì phần tử div column
        // sẽ cao lên làm phá hỏng lưới masonry nên cần reset lại bố cục
        // các column bằng cách tạo mới đối tượng masonry (gắn với phần tử
        // div có id là masonry-container) và gọi hàm layout() của nó.
        let msr = new Masonry('#masonry-container')   // Tạo đối tượng
        msr.layout()  // Gọi hàm

    })
}

// ===============================================================================