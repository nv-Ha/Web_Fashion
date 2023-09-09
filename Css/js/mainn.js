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
  setTimeout(autoSlide, 3000); // 2000 milliseconds (2 seconds) per slide
}

// Gọi hàm autoSlide để bắt đầu tự động chuyển động
autoSlide();
  
  
  
  
  
  