
    let box_img = document.querySelector(".view-property .box-img img");
    let imges = document.querySelectorAll(".view-property .flex-imgs img");
   
  
  
  
  imges.forEach((img) => {
    img.addEventListener("click", () => {
      imges.forEach((e) => {
        e.classList.remove("active");
        e.style.transform = "scale(1)";
      });
      img.classList.add("active");
      box_img.src = img.src;
      box_img.style.transition = "all 1.7s ease-in-out";
      img.style.transition = "all .5s ease-in-out";
      img.style.transform = "scale(0.9)";
    });
  });


