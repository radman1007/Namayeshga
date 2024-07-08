// header sticky handler
const header = document.querySelector("header");
const observer = new IntersectionObserver(([e]) => e.target.classList.toggle("pinned-header", e.intersectionRatio < 1), { threshold: [1] });
observer.observe(header);

// header menu
const menu_icon = document.querySelector("header .menu-icon");
const close_icon = document.querySelector("header .close-icon");
const menu_box = document.querySelector("header .menu-box");
menu_icon.addEventListener("click", () => {
  menu_box.style.transform = "translateY(0)";
});
close_icon.addEventListener("click", () => {
  menu_box.style.transform = "translateY(-80%)";
});

// about us slider
const line1 = document.querySelector("#about-us .line-1");
const line2 = document.querySelector("#about-us .line-2");
const EN_names = [
  "hossein mardani",
  "amirJavad khosh sa'adat",
  "arshia jannat makan",
  "mani safar zadeh",
  "mohammad hossein rahimi",
  "mohammad reza fazeli",
  "reza pour rahimi",
  "amir hossein sarrafi",
  "samyar mir sadeghi",
  "radman montazer",
  "behshad seyv karimi",
  "arad mohammad rezayi",
  "arad naderi",
];
const FA_names = [
  "حسین مردانی",
  "امیر جواد خوش سعادت",
  "عرشیا جنت مکان",
  "مانی صفر زاده",
  "محمد حسین رحیمی",
  "محمد رضا فاضلی",
  "رضا پور رحیمی",
  "امیر حسین صرافی",
  "سامیار میر صادقی",
  "رادمان منتظر",
  "بهشاد سیو کریمی",
  "آراد محمد رضایی",
  "آراد نادری",
];
const discriptions = [
  "برنامه نویس سایت",
  "دبیر برگزاری",
  "مشاور",
  "معاون اجرایی",
  "برندینگ",
  "دبیر علمی",
  "مشاور",
  "دبیر اجرایی",
  "ارتباطات",
  "برنامه نویس سایت | دبیر روابط عمومی",
  "معاون اجرایی",
  "پژوهشی",
  "فنی",
];
const pathes = [
  "../static/photos/hossein mardani.jpg",
  "../static/photos/amirJavad khosh sa'adat.jpg",
  "../static/photos/arshia jannat makan.jpg",
  "../static/photos/mani safar zadeh.jpg",
  "../static/photos/mohammad hossein rahimi.jpg",
  "../static/photos/mohammad reza fazeli.jpg",
  "../static/photos/reza pour rahimi.jpg",
  "../static/photos/amir hossein sarrafi.jpg",
  "../static/photos/samyar mir sadeghi.jpg",
  "../static/photos/radman montazer.jpg",
  "../static/photos/behshad seyv karimi.jpg",
  "../static/photos/person.svg",
  "../static/photos/person.svg",
];
let index1 = 0;
let index2 = 7;
function popPic(parent) {
  parent.childNodes[0].remove();
}
function addPic(parent, index) {
  const newchild = document.createElement("div");
  const image = document.createElement("img");
  const caption = document.createElement("div");
  const name = document.createElement("h3");
  const discription = document.createElement("p");
  newchild.className = "container";
  image.src = pathes[index];
  image.alt = EN_names[index];
  newchild.appendChild(image);
  caption.className = "caption";
  name.innerText = FA_names[index];
  discription.className = "position";
  discription.innerText = discriptions[index];
  caption.appendChild(name);
  caption.appendChild(discription);
  newchild.appendChild(caption);
  parent.appendChild(newchild);
}
for (let i = 0; i < 7; i++) {
  addPic(line1, index1);
  if (index1 < 12) index1++;
  else index1 = 0;
  addPic(line2, index2);
  if (index2 < 12) index2++;
  else index2 = 0;
}
let first_time = true;
setInterval(async () => {
  if (!first_time) {
    line1.style.animation = "none";
    popPic(line1);
    addPic(line1, index1);
    if (index1 < 12) index1++;
    else index1 = 0;
    line2.style.animation = "none";
    popPic(line2);
    addPic(line2, index2);
    if (index2 < 12) index2++;
    else index2 = 0;
  } else first_time = false;
  setTimeout(() => {
    line1.style.animation = "rightCard 2s forwards";
    line2.style.animation = "leftCard 2s forwards";
  }, 100);
}, 2100);

// more information points
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function drawPoints(canvas, colors, circle_row_num, ending, radius = 6) {
  const [c_main_width, c_main_height] = [canvas.clientWidth, canvas.clientHeight];
  const ratio = c_main_height / c_main_width;
  const c_width = circle_row_num * 40;
  const c_height = Math.floor(c_width * ratio);
  canvas.width = c_width;
  canvas.height = c_height;
  const circle_column_num = Math.floor(c_height / 40);
  const ctx = canvas.getContext("2d");
  for (let i = 0; i < circle_column_num - circle_row_num; i++) {
    for (let j = 0; j < circle_row_num; j++) {
      ctx.beginPath();
      ctx.fillStyle = colors[getRandomInt(0, 3)];
      ctx.arc(40 * j + 20, 40 * i + 20, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  const used_height = 40 * (circle_column_num - circle_row_num);
  if (ending == "left") {
    for (let i = 0; i <= circle_row_num - 1; i++) {
      for (let j = circle_row_num - i - 1; j >= 0; j--) {
        ctx.beginPath();
        ctx.fillStyle = colors[getRandomInt(0, colors.length)];
        ctx.arc(40 * j + 20, used_height + 40 * i + 20, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  } else {
    for (let i = 0; i <= circle_row_num - 1; i++) {
      for (let j = i; j <= circle_row_num - 1; j++) {
        ctx.beginPath();
        ctx.fillStyle = colors[getRandomInt(0, colors.length)];
        ctx.arc(40 * j + 20, used_height + 40 * i + 20, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}
drawPoints(document.getElementById("canvas-1"), ["#061824", "#48a39c", "#f5bf1e"], 7, "right");
drawPoints(document.getElementById("canvas-2"), ["#061824", "#48a39c", "#f5bf1e"], 7, "left");
