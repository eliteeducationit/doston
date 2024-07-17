const xususiyatlar = [
  {
    emoji: "🖥️",
    sarlavha: "Highly compatible",
    malumot:
      "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.",
  },
  {
    emoji: "🔷️",
    sarlavha: "Wireless with Bluetooth",
    malumot:
      "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.",
  },
  {
    emoji: "🔋️",
    sarlavha: "High capacity battery",
    malumot:
      "Equipped with a long-lasting built-in battery, you'll never have tospend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.",
  },
  {
    emoji: "💡️",
    sarlavha: "RGB backlight modes",
    malumot:
      "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.",
  },
];

const xususiyatlarHTML = document.getElementById("xususiyatlar");

document.addEventListener("DOMContentLoaded", () => {
  let natija = "";

  for (let i = 0; i < xususiyatlar.length; i++) {
    let shablon = `<article>
              <div class="icon">${xususiyatlar[i].emoji}</div>
              <h3>${xususiyatlar[i].sarlavha}</h3>
              <p>${xususiyatlar[i].malumot}</p>
            </article>`;

    natija += shablon;
  }

  xususiyatlarHTML.innerHTML = natija;
});
