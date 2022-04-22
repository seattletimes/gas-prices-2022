// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");

function findAncestor (el, sel) {
    while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,sel)));
    return el;
}

document.querySelectorAll(".toggleBox button").forEach(el => el.addEventListener('click', () => {
  let toggleBox = findAncestor(el, ".toggleBox");
  toggleBox.querySelectorAll("button, .iframe").forEach(el => el.classList.remove("active"));
  let getClass = el.classList[0];
  toggleBox.querySelectorAll(`.iframe.${getClass}, button.${getClass}`).forEach(el => el.classList.add("active"));
}));
