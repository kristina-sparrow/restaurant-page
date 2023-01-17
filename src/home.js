import { $content, createHtmlElement } from "./index";

function renderHome() {
  const $main = createHtmlElement("main", null, ["home"], null);
  const $p1 = createHtmlElement(
    "p",
    null,
    ["golden", "cursive"],
    "Bienvenidos"
  );
  const $h1 = createHtmlElement("h1", null, ["white"], "La Familia Panaderia");
  const $hr = createHtmlElement("hr", null, null, null);
  const $p2 = createHtmlElement(
    "p",
    null,
    ["white", "text-center"],
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
