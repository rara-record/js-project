const visual = document.querySelector('#visual')
visual.classList.add('show')

const initImgContainer = document.querySelector('.banner-img')
const intImg = initImgContainer.querySelector('img')
const initImgSrc = intImg.getAttribute('src')
intImg.style.opacity = '1'
const strip = document.querySelectorAll('.strip')

strip.forEach((item) => {
  item.addEventListener('mouseover', function (e) {
    e.preventDefault()

    let currentImage = item.dataset.image
    intImg.setAttribute('src', `./assets/images/${currentImage}`)
    intImg.style.opacity = '1'
  })

  item.addEventListener('mouseout', function (e) {
    e.preventDefault()

    intImg.style.opacity = '0.8'
    console.log(intImg)
    intImg.setAttribute('src', initImgSrc)
  })
})
