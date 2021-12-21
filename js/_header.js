const mobileBtn = document.querySelector('.mobile-menu-btn');

// 햄버거 메뉴
mobileBtn.addEventListener('click', (e) => {
  e.preventDefault();
  mobileBtn.classList.toggle("on");
});