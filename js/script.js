//<<<<<<<<<<BURGER-ANIMATION>>>>>>>>>>
const burger = document.querySelector (".burger");
const upperLine  = document.querySelector(".burger__upper-line");
const lowerLine  = document.querySelector(".burger__lower-line");
const mobilMenu = document.querySelector(".mobile-menu")

burger.addEventListener("click", () => {
  upperLine.classList.toggle('burger__upper-line--active');
  lowerLine.classList.toggle('burger__lower-line--active');
  mobilMenu.classList.toggle('mobile-menu--active');
})



  //<<<<<<SELECT>>>>>

  const selectBtn = document.querySelector('.select__btn');
  const selectList = document.querySelector('.select__option-list');
  const selectListItem = selectList.querySelectorAll('.select__option-item');
  const selectInput = document.querySelector('.select__input');

  selectBtn.addEventListener('click', e => {
    e.preventDefault();
    selectList.classList.toggle('select__option-list--visible');
    selectBtn.classList.toggle('select__btn--dark');
  })

  selectListItem.forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation();
      selectBtn.innerText = e.target.innerText;
      selectInput.value = e.target.dataset.value;
      selectList.classList.remove("select__option-list--visible");
      selectBtn.classList.remove('select__btn--dark');
    })
  })

  document.addEventListener('click', e => {
    if (e.target !== selectBtn) {
      selectList.classList.remove('select__option-list--visible');
      selectBtn.classList.remove('select__btn--dark');
    }
  })

  document.addEventListener('keydown', e => {
    if (e.key === 'Tab' || e.key === 'Escape') {
      selectList.classList.remove('select__option-list--visible');
      selectBtn.classList.remove('select__btn--dark');
    }
  })

  //<<<<<<<<<<<<<<<SLIDER>>>>>>>>>>>

  function percent() {
    const valueIn = document.getElementById('value');
    const inputRange = document.getElementById("range").value;
    valueIn.innerHTML = inputRange;
  }
  percent();