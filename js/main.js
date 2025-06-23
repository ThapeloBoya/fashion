// Loader
window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';
});

// Scroll To Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




//loading
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("fade-out");
  // Optionally, remove it from DOM after fade out
  setTimeout(() => {
    loader.remove();
  }, 600); // slightly more than CSS fade duration
});