// =========================================================================================
// =========================================================================================
// 1-Rasm galereyasini yaratish
// Vazifa: Sahifada bir nechta bo‘sh kvadratlar (div) bo‘lsin. Har bir kvadrat ustiga "Rasm qo‘shish" tugmasi bo‘lsin. Tugma bosilganda yangi rasm (img elementi) kvadratning ichiga qo‘shilsin. Kvadrat ichida avvaldan rasm bo‘lsa, o‘sha rasmni o‘chirib, yangisini qo‘shsin.
// Ishlatiladigan mavzular: createElement, append, removeChild, classList.toggle.
const buttons=document.querySelectorAll('button');
const square=document.querySelectorAll('.square')
buttons.forEach((button,index)=>{
    button.addEventListener('click',function(){
        const image=document.createElement('img');
        image.setAttribute("src", "https://picsum.photos/seed/picsum/200/300");
        image.setAttribute('alt','new image')
          image.style.maxWidth = "100%";
          image.style.maxHeight = "100%";
        square[index].append(image)
    })
})

// =========================================================================================
// =========================================================================================
// 2-Uy elementlarini topish
// Vazifa: HTML sahifasida daraxt shaklidagi tuzilma (ul, li) berilgan bo‘lsin. Foydalanuvchi har bir element ustiga bosganda, o‘sha elementning:
// Ota elementi (parentNode),
// Oldingi qoshni elementi (previousSibling),
// Keyingi qoshni elementi (nextSibling),
// Ichidagi barcha bolalari (childNodes) chiqarilsin (matn yoki alert orqali).
const Items=document.querySelectorAll('li');
Items.length && Items.forEach(item=>{
    item.addEventListener('click',function(){
       console.log(this.parentNode)
       console.log(this.previousElementSibling);
       console.log(this.nextElementSibling);
       console.log(this.childNodes);
    })
})

// =========================================================================================
// =========================================================================================
// 3-Sahifadagi elementlarni almashish
// Vazifa: Sahifada ikkita kvadrat (div) bo‘lsin. Har bir kvadrat ichida matn yozilgan bo‘lsin. Foydalanuvchi tugma bosganda, ushbu kvadratlarning o‘z ichidagi matnlari almashib qolsin.
// Ishlatiladigan mavzular: parentNode, appendChild, before, after.
const button=document.querySelector('button');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
button && button.addEventListener('click',function(){
[text1.innerHTML, text2.innerHTML]=[text2.innerHTML, text1.innerHTML]
})

// =========================================================================================
// =========================================================================================
// 4-"Qizil tugmalar" o‘yini
// Vazifa: Sahifada bir nechta tugmalar bo‘lsin. Har safar foydalanuvchi sahifaga kirganda, tugmalardan biriga avtomatik ravishda "qizil" klassi qo‘shiladi. Foydalanuvchi boshqa tugmalarni bosganda, yangi tugmaga "qizil" klassi o‘tadi, avvalgisi esa "qizil" klassini yo‘qotadi.
// Ishlatiladigan mavzular: classList.add, classList.remove, classList.contains.



// =========================================================================================
// =========================================================================================
// 5-Maqolani o‘zgartirish
// Vazifa: Sahifada bir nechta paragraflar va bitta "Yangi paragraf qo‘shish" tugmasi bo‘lsin. Tugma bosilganda yangi paragraf qo‘shilsin va u maqolaning oxiriga yoki boshiga joylashtirilsin (foydalanuvchi oldindan tanlaydi).
// Ishlatiladigan mavzular: createElement, append, prepend.
const card=document.getElementById('card')
const btn=document.getElementById('btn')
const check = document.getElementById("check");
btn && btn.addEventListener('click',function(){
    const p=document.createElement('p')
    p.innerHTML='new paragraph';
    if(check.checked){
        card.prepend(p)
    }else{
        card.append(p)
    }
})

// =========================================================================================
// =========================================================================================
// 6-Tugmalar bilan rang o‘zgartirish
// Vazifa: Sahifada bir nechta rangli kvadratlar bo‘lsin. Har bir kvadratning tagida "Chapga qo‘shish" va "O‘ngga qo‘shish" tugmalari joylashtiriladi. Tugma bosilganda kvadratning chap yoki o‘ng tomoniga yangi kvadrat qo‘shilsin.
// Ishlatiladigan mavzular: createElement, before, after, classList.add.
// const card=document.getElementById(card)
// const buttons=document.querySelectorAll('button');
// buttons.length>0 && buttons.forEach(button=>{
//     button && button.addEventListener('click',function(){
//         let block=document.createElement('div')
//         block.style.height='200px'
//         block.style.width = "200px";
//         block.style.backgroundColor = "yellow";
//         if(this.innerHTML=='right'){
//             card.after(block)
//         }else{
//             card.before(block)
//         }
//     })
// })

// =========================================================================================
// =========================================================================================
// 7-Tugmani yashirish va qayta ko‘rsatish
// Vazifa: Sahifada bir nechta tugmalar bo‘lsin. Har bir tugmaning yonida "Yashirish" tugmasi bo‘lsin. "Yashirish" tugmasi bosilganda asosiy tugma yashirinadi. Sahifaning pastida "Yashirilgan tugmalarni ko‘rsatish" tugmasi bo‘lib, u barcha yashirilgan tugmalarni qayta ko‘rsatadi.
// Ishlatiladigan mavzular: remove, appendChild, classList.toggle.
// const hidebuttons=document.querySelectorAll('.hide')
// const show = document.getElementById("show");
// const mainbuttons=document.querySelectorAll('.main')

hidebuttons.length && hidebuttons.forEach(hide=>{
    hide && hide.addEventListener('click',function(){
        this.previousElementSibling.style.display='none'
    })
})
show && show.addEventListener('click',function(){
    mainbuttons.length && mainbuttons.forEach(function(main){
        main.style.display='inline'
    })
})

// =========================================================================================
// =========================================================================================
// 8- Elementlarni qirqish va qayta joylashtirish
// Vazifa: Sahifada bir nechta matnli elementlar (p) va "Kesish" tugmasi bo‘lsin. Foydalanuvchi biror matnni tanlab, uning yonidagi "Kesish" tugmasini bossa, o‘sha matn kesilib, boshqa bir bo‘sh joyga (kvadrat) o‘tkazilsin.
// Ishlatiladigan mavzular: removeChild, appendChild.

// =========================================================================================
// =========================================================================================
// 9-Rang tanlash
// Vazifa: Sahifada bir nechta rang tugmalari bo‘lsin (masalan, "qizil", "ko‘k", "yashil"). Foydalanuvchi rang tugmalaridan birini bossa, asosiy blokning (katta kvadratning) foni tanlangan rangga o‘zgaradi. Tanlangan tugmaga "faol" klassi qo‘shilsin.
// Ishlatiladigan mavzular: classList.add, classList.contains, style.backgroundColor.
// Rang tugmalari va asosiy blokni olish
const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');
const greenButton = document.getElementById('greenButton');
const mainBlock = document.getElementById('mainBlock');

redButton.addEventListener('click', function() {
    changeColor('red', redButton);
});
blueButton.addEventListener('click', function() {
    changeColor('blue', blueButton);
});
greenButton.addEventListener('click', function() {
    changeColor('green', greenButton);
});

function changeColor(color, button) {
    mainBlock.style.backgroundColor = color;
    document.querySelectorAll('.color-button').forEach(btn => {
        btn.classList.remove('active-button');
    });
    button.classList.add('active-button');
}

// =========================================================================================
// =========================================================================================
// 10- O‘chiriladigan ro‘yxat
// Vazifa: Sahifada ul ro‘yxati va "Yangi element qo‘shish" tugmasi bo‘lsin. Har bir ro‘yxat elementida "O‘chirish" tugmasi bo‘lsin. Foydalanuvchi yangi element qo‘shganda, u ro‘yxatning oxiriga qo‘shiladi. O‘chirish tugmasi bosilganda, tegishli element ro‘yxatdan o‘chiriladi.
// Ishlatiladigan mavzular: createElement, remove, append.



// =========================================================================================
// =========================================================================================
// 11-"Ko‘rinadigan va Yashirin" elementlar
// Vazifa: Sahifada bir nechta blok (div) elementlari bo‘lsin. Ularning barchasi ko‘rinadigan holatda bo‘lsin. Har bir blok yonida "Yashirish" tugmasi bo‘lsin. Tugma bosilganda blok yashiringan bo‘lsin (display: none; usuli orqali). Sahifaning pastida "Hammasini ko‘rsatish" tugmasi bo‘lsin, bu barcha yashirilgan bloklarni qayta ko‘rsatadi.
// Ishlatiladigan mavzular: style, classList.toggle, classList.add.
const hidebuttons = document.querySelectorAll(".hide");
const show = document.getElementById("show");
const mainbuttons = document.querySelectorAll(".main");
hidebuttons.length &&
  hidebuttons.forEach((hide) => {
    hide &&
      hide.addEventListener("click", function () {
        this.previousElementSibling.style.display = "none";
      });
  });
show &&
  show.addEventListener("click", function () {
    mainbuttons.length &&
      mainbuttons.forEach(function (main) {
        main.style.display = "inline";
      });
  });

// =========================================================================================
// =========================================================================================
// 12-Karta o‘yinlarini almashtirish
// Vazifa: Sahifada bir nechta rangli kvadratlar (div) bo‘lsin. Har bir kvadratni boshqa kvadrat bilan almashtirish tugmasi bo‘lsin. Tugma bosilganda, o‘sha kvadrat boshqa tanlangan kvadrat bilan joylarini almashtirsin (ularni DOM ichida joylashtirish tartibi o‘zgaradi).
// Ishlatiladigan mavzular: parentNode, replaceChild, appendChild.
const container = document.getElementById("container");
const swapButton = document.getElementById("swapButton");

swapButton.addEventListener("click", function () {
  const square1 = document.getElementById("square1");
  const square2 = document.getElementById("square2");
  swapSquares(square1, square2);
});

function swapSquares(squareA, squareB) {
  const parent = squareA.parentNode;
  parent.replaceChi
ld(squareB, squareA);
  parent.appendChild(squareA);
}

// =========================================================================================
// =========================================================================================
// 13- Matn uzunligini ko‘rsatish
// Vazifa: Sahifada bir nechta matn bo‘laklari (p) bo‘lsin. Har bir matnning yonida "Uzunligini ko‘rsatish" tugmasi bo‘lsin. Tugma bosilganda, matn uzunligi (belgilar soni) alert orqali foydalanuvchiga ko‘rsatiladi. Matn uzunligini ko‘rsatgandan so‘ng, "Qisqartirish" tugmasi paydo bo‘lib, u matnni kesib, oxiriga ... qo‘shadi.
// Ishlatiladigan mavzular: textContent, createElement, remove.




// =========================================================================================
// =========================================================================================
// 14-To‘plangan ballar hisoblagichi
// Vazifa: Sahifada bir nechta div elementlar bo‘lsin, ular ustida "Ball qo‘shish" tugmasi bo‘lsin. Har safar tugma bosilganda, blok ichidagi matn sifatida 1 ball qo‘shiladi (0 dan boshlanadi). Foydalanuvchi sahifada qancha ball to‘plaganini hisoblash uchun pastda umumiy ball ko‘rsatadigan alohida blok bo‘lsin.
// Ishlatiladigan mavzular: textContent, classList.add, classList.contains.
  let totalPoints = 0;
  document.querySelectorAll(".add-score").forEach((button) => {
    button.addEventListener("click", function () {
      const score = this.previousElementSibling;
      let currentScore = parseInt(score.textContent);
      currentScore++;
      score.textContent = currentScore;
      totalPoints++;
      document.getElementById("totalPoints").textContent = totalPoints;
    });
  });


// =========================================================================================
// =========================================================================================
// 15-Elementlarni tartiblash
// Vazifa: Sahifada bir nechta elementlar (matnli bloklar) bo‘lsin. Har bir element yonida "Yuqoriga" va "Pastga" tugmalari bo‘lsin. Tugmalar yordamida foydalanuvchi elementlarni yuqoriga yoki pastga surib tartibini o‘zgartira olsin.
// Ishlatiladigan mavzular: parentNode, before, after.
  document.getElementById("itemsContainer").addEventListener("click", function (event) {
       const button = event.target;
       if (button.tagName === "BUTTON") {
         const item = button.closest(".item");
         const parent = item.parentNode;
         if (
           button.classList.contains("moveUp") &&
           item.previousElementSibling
         ) {
           parent.insertBefore(item, item.previousElementSibling);
         }
         if (button.classList.contains("moveDown") && item.nextElementSibling) {
           parent.insertBefore(
             item,
             item.nextElementSibling.nextElementSibling
           );
         }
       }
     });