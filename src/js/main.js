// toTop
const toTop = document.querySelector('.c-toTop');

toTop.addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scroll({ top: 0, behavior: 'smooth' });
};


// tabEvent--------------------
const tabList = document.querySelectorAll('.c-tabNavigation__inner__item');
// contents
const tabContent = document.querySelectorAll('.js-tab-item');

//DOM
document.addEventListener('DOMContentLoaded', function(){
  // clickEvent
  for(let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', tabSwitch);
  }
  function tabSwitch(){
    document.querySelectorAll('.active')[0].classList.remove('active');
    this.classList.add('active');
    document.querySelectorAll('.show')[0].classList.remove('show');
    const aryTabs = Array.prototype.slice.call(tabList);
    const index = aryTabs.indexOf(this);
    tabContent[index].classList.add('show');
  };
});

//リンクに付与されたパラメーターの受け取り
let param = location.search.substring(1);

// パラメータに応じてactiveクラスとshowクラスを付与する関数
function setActiveTab(index) {
  document.querySelectorAll('.active')[0].classList.remove('active');
  tabList[index].classList.add('active');
  document.querySelectorAll('.show')[0].classList.remove('show');
  tabContent[index].classList.add('show');
}

// パラメータに応じて処理を行う
if (param === 'companySummary') {
  setActiveTab(1);
}
else if (param === 'companyHistory') {
  setActiveTab(2);
}
else if (param === 'companyRecord') {
  setActiveTab(3);
}

//spMenu
const trigger = document.querySelector('.js-hamburger');
const spMenu = document.querySelector('.js-spMenu');
trigger.addEventListener('click', () => {
  var children = trigger.children;
  spMenu.classList.toggle('active');
  for (var i = 0, len = children.length; i < len; i++)
    children[i].classList.toggle('active');
  }
)
