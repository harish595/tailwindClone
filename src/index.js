var a = document.querySelector("#btn1");
a.style.transform = "scale(0)";
document.getElementById("btn-btn").addEventListener("click", e => {
 b.style.transform = "scale(0)";
 c.style.transform = "scale(0)";
  e.stopPropagation();
  if (a.style.transform == "scale(0)") {
      a.style.transform = "scale(1)";
      a.style.zIndex="1"
  } else {
    a.style.transform = "scale(0)";
  }
});
a.addEventListener("click", e => {
  e.stopPropagation();
});
document.body.addEventListener("click", () => {
  if (a.style.transform == "scale(1)") {
    a.style.transform = "scale(0)";
  }
});


// videp section

var b = document.querySelector("#vid");
b.style.transform = "scale(0)";
document.getElementById("btn2").addEventListener("click", e => {
   a.style.transform = "scale(0)";
   c.style.transform = "scale(0)";
  e.stopPropagation();
  if (b.style.transform == "scale(0)") {
    b.style.transform = "scale(1)";
    b.style.zIndex = "1";
  } else {
    b.style.transform = "scale(0)";
  }
});
b.addEventListener("click", e => {
  e.stopPropagation();
});
document.body.addEventListener("click", () => {
  if (b.style.transform == "scale(1)") {
    b.style.transform = "scale(0)";
  }
});

// payment

var c = document.querySelector("#pay");
c.style.transform = "scale(0)";
document.getElementById("get").addEventListener("click", e => {
    a.style.transform = "scale(0)";
    b.style.transform = "scale(0)";
  e.stopPropagation();
  if (c.style.transform == "scale(0)") {
    c.style.transform = "scale(1)";
    c.style.zIndex = "1";
  } else {
    c.style.transform = "scale(0)";
  }
});
c.addEventListener("click", e => {
  e.stopPropagation();
});
document.body.addEventListener("click", () => {
  if (c.style.transform == "scale(1)") {
      c.style.transform = "scale(0)";
  }
});

