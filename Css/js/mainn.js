// Lấy ra các phần tử DOM cần thiết
const modal = document.querySelector('.modal');
const signUpButton = document.querySelector('.btn-signup');
const signInButton = document.querySelector('.btn-signin');
const modalSignIn = document.querySelector('.modal-item-signIn');
const modalSignUp = document.querySelector('.modal-item-signUp');
const switchSignInButton = document.querySelector('.switch-btn-signin');
const switchSignUpButton = document.querySelector('.switch-btn-signup');

// // Hiển thị modal Sign Up khi nhấn nút Sign Up
// signUpButton.addEventListener('click', () => {
//     modal.style.display = 'block';
//     modalSignIn.style.display = 'none';
//     modalSignUp.style.display = 'block';
// });

// Hiển thị modal Sign In khi nhấn nút Sign In
signInButton.addEventListener('click', () => {
    modal.style.display = 'block';
    modalSignIn.style.display = 'block';
    modalSignUp.style.display = 'none';
});

// Chuyển đổi giữa Sign Up và Sign In trong modal
switchSignInButton.addEventListener('click', () => {
    modalSignIn.style.display = 'block';
    modalSignUp.style.display = 'none';
});

switchSignUpButton.addEventListener('click', () => {
    modalSignIn.style.display = 'none';
    modalSignUp.style.display = 'block';
});

// Ẩn modal khi nhấn nút "Back" hoặc overlay
const formBackButtons = document.querySelectorAll('.form-btn-back');
const modalOverlay = document.querySelector('.modal-overlay');

formBackButtons.forEach((button) => {
    button.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});

modalOverlay.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Ngăn sự kiện click từ modal trải qua modal-background
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Hiển thị modal ban đầu là ẩn
modal.style.display = 'none';


// Bell
// var notifi = documentq.querySelector('.fa-bell')

// notifi.addEventListener()

// ---slide
var slideIndex = 0; // Bắt đầu với slideIndex = 0
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("interface-img");
  if (n >= x.length) {slideIndex = 0}
  if (n < 0) {slideIndex = x.length - 1}
  
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active"); // Loại bỏ class "active" từ tất cả các ảnh
  }
  
  x[slideIndex].classList.add("active"); // Thêm class "active" vào ảnh hiện tại
}

// Tự động chuyển slide sau một khoảng thời gian
function autoSlide() {
  plusDivs(1);
  setTimeout(autoSlide, 3500); // 2000 milliseconds (2 seconds) per slide
}

// Gọi hàm autoSlide để bắt đầu tự động chuyển động
autoSlide();

// ----------------
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const productItem = $$('.product-item')
const productContent = $$('.product-content')

productItem.forEach((item, index)=>{
  const content = productContent[index]
  item.onclick = function(){

    $('.product-item.active').classList.remove('active')
    $('.product-content.active').classList.remove('active')

    this.classList.add('active')
    content.classList.add('active')
  }
})
  

// Lấy tất cả các phần tử có lớp "circle-color-item"
var colorItems = document.querySelectorAll('.circle-color-item');

// Lặp qua từng phần tử và thêm sự kiện click
colorItems.forEach(function(item) {
  item.onclick = function() {
      // Loại bỏ border của tất cả các phần tử
      colorItems.forEach(function(item) {
          item.classList.remove('selected');
      });

      // Thêm border vào phần tử được nhấp vào
      this.classList.add('selected');
  };
});
  
  
// ---Sale
const buttonsale = document.querySelector(".btn-sale-more");
const modalsale = document.querySelector(".sale-item-modal");
const logosale = document.querySelector(".sale-item-logo");
const textsale = document.querySelector(".sale-text");
const moresale = document.querySelector(".sale-more-list");

buttonsale.addEventListener("click", () => {
  modalsale.style.right = "0"; 
  modalsale.style.transition = "right 1s ease";

  logosale.style.opacity = "0"; 
  logosale.style.transition = "opacity 0.5s ease";

  textsale.style.opacity = "0"; 
  textsale.style.transition = "opacity 0.5s ease";

  moresale.style.opacity = "1"; 
  moresale.style.transition = "opacity 2s ease";
  
  setTimeout(()=>{
    logosale.style.display = "none";
    textsale.style.display = "none";
    moresale.style.display = "block";
  },500)
});

const btnListStore = document.querySelector(".btn-list-new-store");
const imgStore = document.querySelector(".sale-item-store-show");
const saleStore = document.querySelector(".sale-new-store");
const saleStoreShow = document.querySelector(".sale-new-store-show");

btnListStore.addEventListener("click", ()=>{
  saleStore.style.opacity = "0";
  saleStore.style.transition = "opacity 0.15s ease"

  imgStore.style.opacity  = "1";
  imgStore.style.transition = "opacity 0.15s ease"

  saleStoreShow.style.opacity = "1";
  saleStoreShow.transition = "opacity 0.15s ease"

  setTimeout(()=>{
    saleStore.style.display = "none";
    imgStore.display = "block";
    saleStoreShow.style.display = "block";
  },0)
})

// ----Contact
const btnContact = document.querySelector('.btn-contact-footer')
const contactRemove = document.querySelector('.footer-contact-item-remove')
const contactShow = document.querySelector('.contact-follow')

btnContact.addEventListener('click', ()=>{
    contactRemove.style.display = 'none';
    contactShow.style.display = 'block';
})