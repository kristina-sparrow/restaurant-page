import { $content, createHtmlElement } from "./index";

function renderFooter() {
  const $footer = document.createElement("footer");
  const $p1 = createHtmlElement("p", null, null, "123 Fake St");
  const $p2 = createHtmlElement("p", null, null, "Denver, CO");
  $footer.appendChild($p1);
  $footer.appendChild($p2);
  $content.appendChild($footer);
}

export { renderFooter };
