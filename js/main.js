onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = "Happy Birthday".split("");
    const titleElement = document.getElementById("title");
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 100); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

const container = document.querySelector(".love-container");

function createLove() {
  const love = document.createElement("div");
  love.classList.add("love");

  love.style.left = Math.random() * 2500 - 1500 + "px";
  love.style.animationDuration = 5 + Math.random() * 3 + "s";

  container.appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 7000);
}

setInterval(createLove, 400);
