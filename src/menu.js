import { $content, createHtmlElement } from "./index";

const menu = [
  {
    title: "Pan de Elote",
    description:
      "A sweet and fluffy cornbread made with fresh corn and infused with a hint of vanilla and cinnamon. Perfectly paired with a cup of café de olla.",
    price: "$4",
  },
  {
    title: "Conchas",
    description:
      "A traditional Mexican sweet bread roll with a sugary, crunchy topping. Perfect for breakfast or as a mid-day treat with a cup of hot chocolate.",
    price: "$3",
  },
  {
    title: "Buñuelos",
    description:
      "Thin and crispy fried dough rounds dusted with a generous coating of cinnamon and sugar. A traditional Mexican dessert, perfect for satisfying a sweet tooth.",
    price: "$3",
  },
  {
    title: "Pastel de Tres Leches",
    description:
      "A traditional Mexican cake made with three milks and topped with a light whipped cream. A sweet and rich dessert that is sure to please any palate.",
    price: "$8",
  },
  {
    title: "Empanadas de Carne",
    description:
      "A savory pastry filled with seasoned beef, onions, and peppers. Served hot and crispy, perfect for a satisfying lunch or as a snack on the go.",
    price: "$5",
  },
  {
    title: "Tamales",
    description:
      "A traditional Mexican dish made with masa dough and filled with savory meats, cheeses, or vegetables. Wrapped in a corn husk and steamed to perfection, perfect for a hearty and satisfying meal.",
    price: "$7",
  },
  {
    title: "Cemita Poblana",
    description:
      "A traditional Mexican sandwich made with a sesame seed roll, filled with meat, cheese, avocado, and a spicy red sauce. Perfect for a hearty and satisfying lunch or dinner.",
    price: "$10",
  },
];

function renderMenu() {
  const $main = createHtmlElement("main", null, ["menu"], null);
  const $p1 = createHtmlElement(
    "p",
    null,
    ["golden", "cursive"],
    "Bienvenidos"
  );
  const $h1 = createHtmlElement("h1", null, ["gray"], "Menu");
  const $hr = document.createElement("hr");

  $main.appendChild($p1);
  $main.appendChild($h1);
  $main.appendChild($hr);

  menu.forEach((item) => {
    const $div = createHtmlElement("div", null, ["menu-item"], null);
    const $title = createHtmlElement("h2", null, ["golden"], item.title);
    const $description = createHtmlElement(
      "p",
      null,
      ["gray"],
      item.description
    );
    const $price = createHtmlElement("h2", null, ["golden"], item.price);
    const $hr = createHtmlElement("hr", null, null, null);

    $div.appendChild($title);
    $div.appendChild($description);
    $div.appendChild($price);
    $div.appendChild($hr);

    $main.appendChild($div);
  });

  $content.appendChild($main);
}

export { renderMenu };
