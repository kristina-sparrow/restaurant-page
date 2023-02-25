import "./index.scss";
import { renderNav } from "./modules/nav";
import { renderHome } from "./modules/home";
import { renderFooter } from "./modules/footer";
import { renderMenu } from "./modules/menu";
import { renderContact } from "./modules/contact";

const $content = document.getElementById("content");

function createHtmlElement(type, id, arrayClasses, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));
  if (content) element.innerText = content;
  return element;
}

function home() {
  $content.innerHTML = "";
  renderNav();
  renderHome();
  renderFooter();
}
function menu() {
  $content.innerHTML = "";
  renderNav();
  renderMenu();
  renderFooter();
}
function contact() {
  $content.innerHTML = "";
  renderNav();
  renderContact();
  renderFooter();
}

home();

document.addEventListener("click", (e) => {
  const target = e.target.innerText;
  if (target === "HOME") home();
  if (target === "MENU" || target === "VIEW THE MENU") menu();
  if (target === "CONTACT") contact();
});

export { $content, createHtmlElement };
