
//الكود قبل التعديل 

// let containerpropert = document.querySelector(".contain-imgs");
// let noprpoertty = document.querySelector(".noproperty");


// function drowpropertes(allpropertes = []) {
//   if (JSON.parse(localStorage.getItem("propertinheart")).length === 0){
//     noprpoertty.innerHTML = '!!لا يوجد عقارات هنا';
//     noprpoertty.style.background = 'var(--main-color)'
//     noprpoertty.style.textAlign = 'center';
//     noprpoertty.style.fontSize = '20px';
//     noprpoertty.style.padding = '10px';
//     noprpoertty.style.margin = '20px auto';
//     noprpoertty.style.borderRadius = '5px';
//     noprpoertty.style.color = 'white';

//   }
//   let Allpropertes =
//     JSON.parse(localStorage.getItem("propertinheart")) || allpropertes;
//   let propert = Allpropertes.map((item) => {
    
//     return `
//           <div class="col-lg-4 col-md-6 col-12 mb-3 filt" data-filter="${item.data_filter}">
//   <div class="card pb-1">
//     <div class="card-img">
//       <img src="${item.imgurl}" alt="">
//     </div>
//     <div class="card-body text-end">
//       <div class="price">
//         <span>جنيه</span>
//         <h2> ${item.price} </h2>
//       </div>
      
//       <div class="text mb-3" id="title"> ${item.title}</div>
//       <p class="address"> <i class="fa-solid fa-location-dot"></i>
//       <span>${item.address}</span>
//       </p>
      
//       <div class="flex-icon">
//      <div class="flex-1">
       
//          <div class="flex">
//           <span>${item.num_bed}</span>
//           <i class="fa-solid fa-bed"></i>
//         </div>
        
//         <div class="flex">
//           <span>${item.num_shower}</span>
//           <i class="fa-solid fa-shower"></i>
//         </div>
//        </div> 
//           <!-- 3 -->
//           <div class="flex">
//             <span>متر</span>
//             <h5> ${item.area}</h5> 
//             <i class="fa-solid fa-arrows-to-circle"></i>
//           </div>
//       </div>
//     </div>
//     <div class="cont-btn text-center">
//       <a href="viewproperty.html" class="btn btn-danger">عرض المزيد</a>
//         <span class=" btn btn-danger"  onclick = "removetoheart(${item.id})">حذف</span>
//     </div>
//   </div>
//   </div> 
          
//           `;
//   });
//   containerpropert.innerHTML = propert;
// }

// drowpropertes();

// //الكود بعد التعديل 

let containerpropert = document.querySelector(".contain-imgs");
let noprpoertty = document.querySelector(".noproperty");

function drowpropertes(allpropertes = []) {
  // استرجاع العناصر المخزنة في `localStorage`
  const storedProperties = JSON.parse(localStorage.getItem("propertinheart") || "[]");

  // عرض رسالة إذا كانت القائمة فارغة
  if (storedProperties.length === 0) {
    noprpoertty.textContent = "!!لا يوجد عقارات هنا";
    Object.assign(noprpoertty.style, {
      background: 'var(--main-color)',
      textAlign: 'center',
      fontSize: '20px',
      padding: '10px',
      margin: '20px auto',
      borderRadius: '5px',
      color: 'white'
    });
  }

  // عرض العقارات
  containerpropert.innerHTML = (storedProperties.length ? storedProperties : allpropertes)
    .map(item => `
      <div class="col-lg-4 col-md-6 col-12 mb-3 filt" data-filter="${item.data_filter}">
        <div class="card pb-1">
          <div class="card-img">
            <img src="${item.imgurl}" alt="">
          </div>
          <div class="card-body text-end">
            <div class="price">
              <span>جنيه</span>
              <h2>${item.price}</h2>
            </div>
            <div class="text mb-3" id="title">${item.title}</div>
            <p class="address">
              <i class="fa-solid fa-location-dot"></i>
              <span>${item.address}</span>
            </p>
            <div class="flex-icon">
              <div class="flex-1">
                <div class="flex">
                  <span>${item.num_bed}</span>
                  <i class="fa-solid fa-bed"></i>
                </div>
                <div class="flex">
                  <span>${item.num_shower}</span>
                  <i class="fa-solid fa-shower"></i>
                </div>
              </div>
              <div class="flex">
                <span>متر</span>
                <h5>${item.area}</h5>
                <i class="fa-solid fa-arrows-to-circle"></i>
              </div>
            </div>
          </div>
          <div class="cont-btn text-center">
            <a href="viewproperty.html" class="btn btn-danger">عرض المزيد</a>
            <span class="btn btn-danger" onclick="removetoheart(${item.id})">حذف</span>
          </div>
        </div>
      </div>
    `).join("");
}

drowpropertes();



// دالة الحذف قبل التعديل
// function removetoheart(id) { 
//   let productsInCart = localStorage.getItem("propertinheart");
//   if (productsInCart) {
//     let item = JSON.parse(productsInCart);
//     let filteritems = item.filter((item) => item.id !== id);
//     localStorage.setItem("propertinheart", JSON.stringify(filteritems));
//     drowpropertes(filteritems);
    
//     let badge = document.querySelector(".badge");
    
//     // استرجاع البيانات المخزنة
//     let productsInCarthert = JSON.parse(localStorage.getItem("propertinheart") || "[]");
    
//     // حساب عدد العناصر الموجودة في المصفوفة
//     let productsInCartLength = productsInCarthert.length;
    
//     badge.innerHTML = productsInCartLength
//     console.log(productsInCartLength);
  
    
//   }
// }

// دالة الحذف بعد التعديل
function removetoheart(id) {
  // استرجاع المنتجات المخزنة وتحويلها إلى مصفوفة
  let productsInCart = JSON.parse(localStorage.getItem("propertinheart") || "[]");

  // تصفية المنتجات لاستبعاد المنتج المطلوب حذفه
  let updatedProducts = productsInCart.filter(item => item.id !== id);

  // تحديث `localStorage` بعد التصفية
  localStorage.setItem("propertinheart", JSON.stringify(updatedProducts));

  // تحديث العرض وتحديث عدد العناصر
  drowpropertes(updatedProducts);
  document.querySelector(".badge").textContent = updatedProducts.length;
}
