console.log("JS WORKING ✅");

const gift = document.getElementById("gift");
const openBtn = document.getElementById("openBtn");
const nameInput = document.getElementById("nameInput");
const intro = document.getElementById("intro");
const card = document.getElementById("card");
const personName = document.getElementById("personName");
const shareBtn = document.getElementById("shareBtn");

let opened = false;

function openGift(){

  const name = nameInput.value.trim();

  if(!name){
    alert("اكتب اسمك أولًا ✨");
    nameInput.focus();
    return;
  }

  if(opened) return;

  opened = true;

  gift.classList.add("open");

  setTimeout(() => {

    intro.style.display = "none";

    card.style.display = "flex";

    personName.textContent = name;

  }, 900);
}

openBtn.addEventListener("click", openGift);

gift.addEventListener("click", openGift);

shareBtn.addEventListener("click", () => {

  const senderName = personName.textContent;

  const website =
"https://eid-greeting-three.vercel.app/";

const text =
`🎁 اصنع الرسالة بنفسك وشاركها مع الاحبة
${senderName} أرسل لك تهنئة خاصة بعيد الأضحى المبارك ✨

🌙 رسالة تهنائة العيد
${website}

تقبل الله منا ومنكم صالح الأعمال
وكل عام وأنتم بخير

🕋❤️🎉🐑`;
  window.open(
    "https://wa.me/?text=" + encodeURIComponent(text),
    "_blank"
  );
});
