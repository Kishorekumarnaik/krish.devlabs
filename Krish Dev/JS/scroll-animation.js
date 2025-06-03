document.addEventListener("DOMContentLoaded", () => {
  AOS.init();

  const profileImg = document.getElementById("profile-img");

  if (profileImg) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        profileImg.classList.add("scale-75");
      } else {
        profileImg.classList.remove("scale-75");
      }
    }, { threshold: 0.6 });

    observer.observe(profileImg);
  }
});
