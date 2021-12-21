const visual = document.querySelector('#visual');
visual.classList.add('show');



// const sections = document.querySelectorAll('section');

// // section들의 offset값을 저장할 빈 배열을 만든다.
// const offsetArray = [];

// // 각각의 section을 뽑아서 배열에 넣어준다.
// for (let item of sections) {
//   offsetArray.push(item.offsetTop);

// }
// console.log(offsetArray[0].offsetTop)


// window.addEventListener('scroll', e => {
//   // 현재 스크롤 거리 값을 변수에 저장한다.
//   let scrollTop = window.scrollY || window.pageYOffset;
//   // 아이템이 보이는 시점 설정
//   const baseLine = -200;

//   // 각 섹션에 아이템들을 활성화 시키는 함수를 실행한다.
//   for (let i = 0; i < sections.length; i++) {
//     if (scrollTop >= offsetArray[i] + baseLine) {
//       activate(sections, i);
//     }
//   }
// })

// // 활성화 함수
// function activate(array, index) {
//   array.forEach(item => {
//     item.classList.remove('on');
//   });

//   array[index].classList.add('on');
// }