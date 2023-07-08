const selectImage = document.querySelector(".select-image");
const inputFile = document.querySelector("#file");
const imgArea = document.querySelector(".img-area");

const selectImage2 = document.querySelector(".select-image2");
const inputFile2 = document.querySelector("#file2");
const imgArea2 = document.querySelector(".img-area2");

const selectImage3 = document.querySelector(".select-image3");
const inputFile3 = document.querySelector("#file3");
const imgArea3 = document.querySelector(".img-area3");

selectImage.addEventListener("click", function () {
  function handleImageUpload(event) {
    var csrfToken = "{{ csrf_token }}";
    var fileInput = event.target;
    var file = fileInput.files[0];

    var formData = new FormData();
    formData.append("image", file);

    fetch("i", {
      method: "POST",
      headers: {
        "X-CSRFToken": csrfToken,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        // قم بتعديل العناصر اللازمة في الصفحة بناءً على الـ result
        console.log(result);
        // document.getElementById("result").textContent =
        //   JSON.stringify(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  inputFile.click();
});

inputFile.addEventListener("change", function () {
  const image = this.files[0];
  if (image.size < 2000000) {
    const reader = new FileReader();
    reader.onload = () => {
      const allImg = imgArea.querySelectorAll("img");
      allImg.forEach((item) => item.remove());
      const imgUrl = reader.result;
      const img = document.createElement("img");
      img.src = imgUrl;
      imgArea.appendChild(img);
      imgArea.classList.add("active");
      imgArea.dataset.img = image.name;
    };
    reader.readAsDataURL(image);
  } else {
    alert("Image size more than 2MB");
  }
});
// const selectImage2 = document.querySelector(".select-image2");
// const inputFile2 = document.querySelector("#file2");
// const imgArea2 = document.querySelector(".img-area2");

selectImage2.addEventListener("click", function () {
  if (imgArea.lastElementChild.hasAttribute("src")) {
    // imgArea.lastElementChild.remove();
    const allImg = imgArea.querySelectorAll("img");
    allImg.forEach((item) => item.remove());
    imgArea.classList.remove("active");
  }
  if (imgArea3.lastElementChild.hasAttribute("src")) {
    // imgArea.lastElementChild.remove();
    const allImg = imgArea3.querySelectorAll("img");
    allImg.forEach((item) => item.remove());
    imgArea3.classList.remove("active");
  }
  inputFile2.click();
});

inputFile2.addEventListener("change", function () {
  const image = this.files[0];
  if (image.size < 2000000) {
    const reader = new FileReader();
    reader.onload = () => {
      const allImg = imgArea2.querySelectorAll("img");
      allImg.forEach((item) => item.remove());
      const imgUrl = reader.result;
      const img = document.createElement("img");
      img.src = imgUrl;
      imgArea2.appendChild(img);
      imgArea2.classList.add("active");
      imgArea2.dataset.img = image.name;
    };
    reader.readAsDataURL(image);
  } else {
    alert("Image size more than 2MB");
  }
});

selectImage3.addEventListener("click", function () {
  if (imgArea.lastElementChild.hasAttribute("src")) {
    // imgArea.lastElementChild.remove();
    const allImg = imgArea.querySelectorAll("img");
    allImg.forEach((item) => item.remove());
    imgArea.classList.remove("active");
  }
  if (imgArea2.lastElementChild.hasAttribute("src")) {
    // imgArea.lastElementChild.remove();
    const allImg = imgArea2.querySelectorAll("img");
    allImg.forEach((item) => item.remove());
    imgArea2.classList.remove("active");
  }
  inputFile3.click();
});

inputFile3.addEventListener("change", function () {
  const image = this.files[0];
  if (image.size < 2000000) {
    const reader = new FileReader();
    reader.onload = () => {
      const allImg = imgArea3.querySelectorAll("img");
      allImg.forEach((item) => item.remove());
      const imgUrl = reader.result;
      const img = document.createElement("img");
      img.src = imgUrl;
      imgArea3.appendChild(img);
      imgArea3.classList.add("active");
      imgArea3.dataset.img = image.name;
    };
    reader.readAsDataURL(image);
  } else {
    alert("Image size more than 2MB");
  }
});
////////////////////////////////////////////////
// start location MAYARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
// var x = document.getElementById("latitude");
// var z = document.getElementById("longitude");
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.value = position.coords.latitude;
//   z.value = position.coords.longitude;
//   if (x.value != "" && z.value != "") {
//     document.querySelector(".docs").style.display = "block";
//   }
// }
// end location MAYARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
////////////////////////////////////////////////////////////
// start show doctor box
let health = document.getElementById("health1").innerText;
let health2 = document.getElementById("health2").innerText;
let health3 = document.getElementById("health3").innerText;
let showDoctorBox = document.getElementById("show-doctor-box1");
let showDoctorBox2 = document.getElementById("show-doctor-box2");
let showDoctorBox3 = document.getElementById("show-doctor-box3");
let tips = document.querySelector(".tips1");
let tips2 = document.querySelector(".tips2");
let tips3 = document.querySelector(".tips3");
let showTips = document.getElementById("show-tips1");
let showTips2 = document.getElementById("show-tips2");
let showTips3 = document.getElementById("show-tips3");

showTips.onclick = function () {
  if (health === "Anemia") {
    tips.style.display = "block";
  }
};

showTips2.onclick = function () {
  if (health2 === "Anemia") {
    tips2.style.display = "block";
  }
};

showTips3.onclick = function () {
  if (health3 === "Anemia") {
    tips3.style.display = "block";
  }
};

showDoctorBox.addEventListener("click", function () {
  if (health === "Anemia") {
    tips.style.display = "block";
    document.querySelector(".find-doctor").style.display = "block";
    document.querySelector(".find-doctor").className = "text-black-50";
  }
});

showDoctorBox2.addEventListener("click", function () {
  if (health2 === "Anemia") {
    tips2.style.display = "block";
    document.querySelector(".find-doctor").style.display = "block";
    document.querySelector(".find-doctor").className = "text-black-50";
  }
});

showDoctorBox3.addEventListener("click", function () {
  if (health3 === "Anemia") {
    tips3.style.display = "block";
    document.querySelector(".find-doctor").style.display = "block";
    document.querySelector(".find-doctor").className = "text-black-50";
  }
});
// start show doctor table
if (x.innerHTML != "") {
  // document.querySelector(".docs").style.display = "block";
  console.log(document.querySelector(".docs"));
}
// end show doctor table
// end show doctor box
// start doctor status
let doctorStatus = document.querySelectorAll(".open-status");
let doctorStatusOnline = document.querySelectorAll(".open");
let openClose = document.querySelectorAll(".open-close");
console.log(openClose);
for (let i = 0; i < doctorStatus.length; i++) {
  // console.log(doctorStatus[i].innerText);
  if (doctorStatus[i].innerText === "False") {
    doctorStatusOnline[i].style.backgroundColor = "red";
    openClose[i].style.color = "red";
  } else if (doctorStatus[i].innerText === "True") {
    doctorStatusOnline[i].style.backgroundColor = "green";
    openClose[i].style.color = "green";
  } else {
    doctorStatusOnline[i].style.backgroundColor = "gray";
    openClose[i].style.color = "gray";
  }
}

// start show doctor map

// let btnLocationBtn = document.querySelectorAll(".btn-location-btn");
// let map = document.querySelector(".doc-map");
// btnLocationBtn.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     map.style.display = "block";
//   });
// });

// end show doctor map

// end doctor status

// start rating
// let ratingSpans = document.querySelectorAll(".rating span");
// console.log(ratingSpans);
// end rating

////////////////////////////////////////////////////////////////////////////
// start dark mode
// Switch Btn
$("body").append(
  "<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>"
);
jQuery;

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("oleev_theme", themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("oleev_theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}
// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("oleev_theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
})();
// end dark mode
///////////////////////////////////////////////////////////////////////////////////////////
// start looping on doctors

// end looping on doctors
