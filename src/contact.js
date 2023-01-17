import { $content, createHtmlElement } from "./index";

const hours = [
  "Saturday: 8am - 4pm",
  "Sunday: 8am - 4pm",
  "Monday: Closed",
  "Tuesday: 6am - 2pm",
  "Wednesday: 6am - 2pm",
  "Thursday: 6am - 2pm",
  "Friday: 6am - 2pm",
];

function renderContact() {
  const $main = document.createElement("main");
  const $p1 = createHtmlElement("p", null, null, "Bienvenidos");
  const $h1 = createHtmlElement("h1", null, null, "Contact");
  const $hr = document.createElement("hr");
  const $p2 = createHtmlElement(
    "p",
    null,
    null,
    "La Familia Panaderia is a neighborhood Mexican bakery that has been serving the community with fresh, authentic, and delicious baked goods for over 20 years. Our bakery is family-owned and operated, and we take pride in using only the freshest and highest quality ingredients in all of our recipes. From our traditional pan de elote to our savory empanadas de carne, we have something for everyone. Our customers are like family to us and we strive to make each visit a pleasant and satisfying experience. Come by and visit us today and taste the difference at La Familia Panaderia!"
  );
  const $h2 = createHtmlElement("h2", null, null, "Hours");
  const $ul = createHtmlElement("h2", null, null, null);
  hours.forEach((item) =>
    $ul.appendChild(createHtmlElement("li", null, null, item))
  );
  const $h3 = createHtmlElement("h2", null, null, "Contact");
  const $p3 = createHtmlElement("p", null, null, "P: 123-456-7890");
  const $p4 = createHtmlElement(
    "p",
    null,
    null,
    "E: panaderia@notarealemail.com"
  );

  $main.appendChild($p1);
  $main.appendChild($h1);
  $main.appendChild($hr);
  $main.appendChild($p2);
  $main.appendChild($h2);
  $main.appendChild($ul);
  $main.appendChild($h3);
  $main.appendChild($p3);
  $main.appendChild($p4);

  $content.appendChild($main);
}

export { renderContact };
