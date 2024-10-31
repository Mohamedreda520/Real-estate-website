let othersearch = document.querySelector(".other-search");
let btnadd = document.querySelector(".add");
let a_link = document.querySelectorAll(".contact form ul li span");
a_link.forEach((span) => {
  span.addEventListener("click", (ele) => {
    a_link.forEach((span) => {
      span.classList.remove("active");
    });
    ele.currentTarget.classList.add("active");
  });
});

function cleardiv() {
  let block = true;
  if (block === true) {
    othersearch.classList.toggle("active");
  }
}

// start filter

let containerpropert = document.querySelector(".contain-imgs");

let Allpropertes = [
  {
    id: 1,
    data_filter: "اراضي",
    title: " ارض للبيع",
    imgurl: "imgs/land-1.jpeg",
    price: 600000,
    address: "القاهرة",
    num_bed: 0,
    num_shower: 0,
    area: 1000,
    quntity:1,
  },
  {
    id: 2,
    data_filter: "شقة",
    title: "شقة للبيع",
    imgurl: "imgs/flat-1.jpg",
    price: 2000000,
    address: "المنيا",
    num_bed: 3,
    num_shower: 1,
    area: 200,
    quntity:1,
  },
  {
    id: 3,
    data_filter: "محل",
    title: " محل للايجار",
    imgurl: "imgs/shoping-1.jpg",
    price: 1000,
    address: "حلوان",
    num_bed: 0,
    num_shower: 0,
    area: 100,
    quntity:1,
  },
  {
    id: 4,
    data_filter: "فلل",
    title: " فله للبيع",
    imgurl: "imgs/villas-1.jpeg",
    price: 7000000,
    address: "الاسكندرية",
    num_bed: 3,
    num_shower: 2,
    area: 500,
    quntity:1,
  },
];

function drowpropertes() {
  let propert = Allpropertes.map((item) => {
    return `
        <div class="col-lg-4 col-md-6 col-12 mb-3 filt" data-filter="${
          item.data_filter
        }">
<div class="card pb-1">
  <div class="card-img">
    <img src="${item.imgurl}" alt="">
  </div>
  <div class="card-body text-end">
    <div class="price">
      <span>جنيه</span>
      <h2> ${item.price} </h2>
    </div>
    
    <div class="text mb-3" id="title"> ${item.title}</div>
    <p class="address"> <i class="fa-solid fa-location-dot"></i>
    <span>${item.address}</span>
    </p>
    
    <div class="flex-icon">
   <div class="flex-1">
     ${
       item.num_bed !== 0
         ? `<div class="flex remo">
        <span>${item.num_bed}</span>
        <i class="fa-solid fa-bed"></i>
      </div>`
         : ""
     }
       
      ${
        item.num_shower !== 0
          ? `<div class="flex remo">
        <span>${item.num_shower}</span>
        <i class="fa-solid fa-shower"></i>
      </div>`
          : ""
      }
      
     </div> 
        <!-- 3 -->
        <div class="flex">
          <span>متر</span>
          <h5> ${item.area}</h5> 
          <i class="fa-solid fa-arrows-to-circle"></i>
        </div>
    </div>
  </div>
  <div class="cont-btn text-center">
    <a href="viewproperty.html" class="btn btn-danger">عرض المزيد</a>
      <i class="far fa-heart btn btn-danger" id="heartbtn" onclick = "addtoheart(${
        item.id
      })"></i>
  </div>
</div>
</div> 
        
        `;
  });
  containerpropert.innerHTML = propert.join('');
}

drowpropertes();
// // add to heart
// let heartbtn = document.getElementById("heartbtn");
// let badge = document.querySelector(".badge");
// let contact_name = document.querySelector(".contact-name");
// let contact_namediv = document.querySelector(".contact-name div");

// let addeditem = localStorage.getItem("propertinheart")
//   ? JSON.parse(localStorage.getItem("propertinheart"))
//   : [];
// if (addeditem) {
//   badge.innerHTML = addeditem.length;
//   badge.style.display = "block";
// }

// function addtoheart(id) {
//   if (localStorage.getItem("username")) {
//     let property = Allpropertes.find((item) => item.id === id);
//     let ispropinheart = addeditem.find((itm)=> itm.id === property.id)
//     /////////////////
//     if (ispropinheart) {
//       addeditem = addeditem.map((item) => {
//         if (item.id === property.id) item.quntity += 1;
//         return item ;
//       })
//     } else {
//       addeditem.push(property)
//     }
    
 
//     contact_namediv.innerHTML += `<p>${property.title} </p>`;
//     let heartitem = document.querySelectorAll(".contact-name div p");
//     contact_name.style.display = "none";
//     badge.style.display = "block";
//     badge.innerHTML = addeditem.length;

//     // addeditem = [...addeditem, property];
//     localStorage.setItem("propertinheart", JSON.stringify(addeditem));
//   }
// }
// start filter
let lifilter = document.querySelectorAll(".filterlink li");
let cardfilter = document.querySelectorAll(".filt");
lifilter.forEach((li) => {
  li.addEventListener("click", () => {
    lifilter.forEach((li) => {
      li.classList.remove("active");
    });

    li.classList.add("active");

    let value = li.textContent;
    cardfilter.forEach((filt) => {
      filt.style.display = "none";
      if (
        filt.getAttribute("data-filter") == value.toLowerCase() ||
        value == "الكل"
      ) {
        filt.style.display = "block";
      }
    });
  });
});

//

// Start post property
// *** choose images ****
function displayimg(event) {
  let files = event.target.files;
  let info = document.querySelector(".info");
  info.innerHTML = "";
  for (let i = 0; i < files.length; i++) {
    let src = URL.createObjectURL(files[i]);
    info.innerHTML += `<img src = "${src}">`;
  }
  if (info.children.length === 0) {
    info.style.border = "none";
  } else {
    info.style.border = "1px solid #6c757d1f";
    info.style.marginTop = "1rem";
    info.style.textAlign = "center";
  }
}

function enddedpost() {
  let area = document.getElementById("area").value;
  let name = document.getElementById("name").value;
  // let price = document.getElementById('price').value;
  // let pricerant = document.getElementById('pricerant').value;
  // let address = document.getElementById('address').value;
  // let bedroom = document.getElementById('bedroom').value;
  // let bathrooms = document.getElementById('bathrooms').value;
  if (area !== "" && name !== "") {
    alert("تم انشاء عقارك بنجاح");
    window.location.href = "home.html";
  } else {
    alert(" اكمل البيانات الخاصة بعقارك من فضلك");
  }
}

// End post property

// start view property

// document.addEventListener("DOMContentLoaded", function () {
//   let cn = document.getElementById("viewprop");
//   let imges = document.querySelectorAll(".flex-imgs img");
//   console.log(cn);
//   console.log(imges);
// });



// imges.forEach((img) => {
//   img.addEventListener("click", () => {
//     imges.forEach((e) => {
//       e.classList.remove("active");
//       e.style.transform = "scale(1)";
//     });
//     img.classList.add("active");
//     viewimgs.src = img.src;
//     viewimgs.style.transition = "all 1.7s ease-in-out";
//     img.style.transition = "all .5s ease-in-out";
//     img.style.transform = "scale(0.9)";
//   });
// });

// btn go to up

let btn_up = document.querySelector(".btn-up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn_up.style.display = "block";
  } else {
    btn_up.style.display = "none";
  }
};

btn_up.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
