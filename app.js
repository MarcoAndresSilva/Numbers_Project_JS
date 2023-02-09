const items = [...document.querySelectorAll('.number')];
// console.log(items);

const updateCount = (element) => {
  // console.log(element);
  const value = parseInt(element.dataset.value);
  const increment = Math.ceil(value / 1000);
  // const increment = 1;
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      element.textContent = `${value} +`;
      clearInterval(increaseCount);
      return;
    }
    element.textContent = `${initialValue} + `;
  }, 1);
  // console.log(increaseCount);
};

items.forEach((item) => {
  // console.log(item);
  updateCount(item)
});

