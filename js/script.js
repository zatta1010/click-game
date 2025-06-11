const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const DOM = {
  clickButton: $('#clickButton'),
  clickCount: $('#clickCount'),  
};

DOM.clickButton.addEventListener('click', () => {
  const currentCount = parseInt(DOM.clickCount.textContent, 10) || 0;
  DOM.clickCount.textContent = currentCount + 1;
});
