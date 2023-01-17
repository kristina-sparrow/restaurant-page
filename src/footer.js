import { $content, createHtmlElement } from "./index";

function renderFooter() {
  const $footer = document.createElement("footer");
  const $p1 = createHtmlElement("p", null, null, "123 Fake St Denver, CO");
  $footer.appendChild($p1);
  $content.appendChild($footer);
}

export { renderFooter };
