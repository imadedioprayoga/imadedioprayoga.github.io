function gantiTema() {
  let b = document.getElementById("body"); 
  if (b.classList.contains("bg-white")) { 
    b.classList.remove("bg-white","text-black"); 
    b.classList.add("bg-gray-900","text-white"); 
  } else {
    b.classList.remove("bg-gray-900","text-white"); 
    b.classList.add("bg-white","text-black"); 
  }
}