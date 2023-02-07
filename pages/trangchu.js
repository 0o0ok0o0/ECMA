import Header from "../components/Header";
const main_trang = ()=>{
return `
${Header()} <div class="container">

<div class="menu-butom">
    <div class="menu">
        <ul>
            <li><a href="">Trang Chủ</a></li>
            <li><a href="">Thông tin sản phẩm
                </a> </li>
            <li><a href="">Đại lý phân phối</a></li>

        </ul>
    </div>
    <div class="butom">
        <input type="text" name="" id="" placeholder="Bạn đang cần gì...">
        <button> <a href="#">Tìm kiếm</a> </button>
    </div>
</div>
<div class="slide-banner">
    <div class="banner">
        <div class="banners"> <img src="./img/banner-4-800x286.jpg" alt=""></div>
        <div class="banners">
            <img src="./img/banner1.jpg" alt="">
        </div>
        <div class="banners">
            <img src="./img/banner2.jpg" alt="">
        </div>
        <div class="banners">
            <img src="./img/banner3.jpg" height="890px" alt="">
        </div>
    </div>

</div>

<div class="menu0">
    <h1> <i> Dragon-Sama </i></h1>
    <b id="returns">SHOP</b>
</div>


<div class="content">
    <div class="hed">
        <img src="./img/hộp quà" alt="">
        <h1>Khuyến mãi khủng</h1>
    </div>

    <div class="item1">
        <div class="item-banner">
            <div class="item-img">
                <img src="./img/1.webp" alt="">
            </div>

            <div class="item-text">
                <p>Đồng hồ thông minh, phá phách</p> <br>
                <span> <i>799.000 vnđ</i> 550.000 vnđ</span>
                <button><a href=""> Đặt ngay</a></button>
            </div>
        </div>

        <div class="item-banner">
            <div class="item-img">
                <img src="./img/2.jpg" alt="">
            </div>

            <div class="item-text">
                <p>Đồng hồ trẻ trung, phong cách</p> <br>
                <span> <i>450.000 vnđ</i> 300.000 vnđ</span>
                <button><a href=""> Đặt ngay</a></button>
            </div>
        </div>

        <div class="item-banner">
            <div class="item-img">
                <img src="./img/3.jpg" alt="">
            </div>

            <div class="item-text">
                <p>Đồng hồ điện tử cho giới trẻ</p> <br>
                <span> <i>600.000 vnđ </i> 499.999 vnđ</span>
                <button><a href=""> Đặt ngay</a></button>
            </div>
        </div>

    </div>
    <!--  -->
    <div class="item2">
        <header>
            <h1>Hàng mới về</h1>
        </header>

        <div class="item-box">
            <div class="box-left">
                <div class="left-item">
                    <div class="item-img">
                        <img src="./img/4.jpeg" alt="">
                    </div>

                    <div class="img-text">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <!--  -->
                <div class="left-item">
                    <div class="item-img">
                        <img src="./img/5.jpg" alt="">
                    </div>

                    <div class="img-text">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <!--  -->
                <div class="left-item">
                    <div class="item-img">
                        <img src="./img/6.jpg" alt="">
                    </div>

                    <div class="img-text">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <!--  -->
                <div class="left-item">
                    <div class="item-img">
                        <img src="./img/7.jpg" alt="">
                    </div>

                    <div class="img-text">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <!--  -->

                <!--  -->

            </div>
            <div class="box-left">
                <div class="left-item">
                    <div class="item-img">
                        <img src="./img/8.webp" alt="">
                    </div>

                    <div class="img-text">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <!--  -->
                <div class="left-item">
                    <div class="item-img">
                        <img src="./img/9.png" alt="">
                    </div>

                    <div class="img-text">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <!--  -->
                <div class="left-item">
                    <div class="item-img">
                        <img src="./img/10.jpg" alt="">
                    </div>

                    <div class="img-text">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <!--  -->
                <div class="left-item">
                    <div class="item-img">
                        <img src="./img/11.webp" alt="">
                    </div>

                    <div class="img-text">
                        <h5></h5>
                        <p></p>
                    </div>
                </div>
                <!--  -->

                <!--  -->

            </div>
            <div class="box-right">
            </div>
        </div>

    </div>
</div>
<div class="footer">
    <p>© 2022. Công ty cổ phần Dragon-Sama. 
        
        Địa chỉ: 8 Lê Quang Đạo, P. Phú Đô, Q.Nam Từ Liêm, TP.Hà Nội. Điện thoại: 0367767248. Email:
        longdtph23025@fpt.edu.vn <br> Chịu trách nhiệm nội dung: Đỗ Thành Long. Xem chính sách sử dụng</p>
</div>
</div>`
}
export default main_trang;