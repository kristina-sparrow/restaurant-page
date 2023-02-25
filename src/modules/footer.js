import { $content, createHtmlElement, createLink } from "../index";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function renderFooter() {
  const $footer = document.createElement("footer");
  const $p1 = createHtmlElement("p", null, null, "Built by Kristina Sparrow");
  const $icon = icon(faGithub).html[0];
  const $link = createLink("https://github.com/kristina-sparrow", $icon);
  $footer.appendChild($p1);
  $footer.appendChild($link);
  $content.appendChild($footer);
}

export { renderFooter };
