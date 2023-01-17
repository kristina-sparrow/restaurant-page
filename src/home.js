import { $content, createHtmlElement } from "./index";

function renderHome() {
  const $main = document.createElement("main");
  const $p1 = createHtmlElement("p", null, null, "Bienvenidos");
  const $h1 = createHtmlElement("h1", null, null, "La Familia Panaderia");
  const $hr = createHtmlElement("hr", null, null, null);
  const $p2 = createHtmlElement(
    "p",
    null,
    null,
    "Where tradition meets taste, savor the authentic flavors of Mexico in every bite of our carefully crafted pastries."
  );
  const $button = createHtmlElement("button", null, null, "View the Menu");
  $main.appendChild($p1);
  $main.appendChild($h1);
  $main.appendChild($hr);
  $main.appendChild($p2);
  $main.appendChild($button);
  $content.appendChild($main);
}

export { renderHome };
