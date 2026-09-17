const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const profileUpload = document.getElementById("profileUpload");
const profileImage = document.getElementById("profileImage");
const avatarFallback = document.getElementById("avatarFallback");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

function showProfileImage(src) {
  profileImage.src = src;
  profileImage.style.display = "block";
  avatarFallback.style.display = "none";
}

profileImage.addEventListener("error", () => {
  profileImage.style.display = "none";
  avatarFallback.style.display = "grid";
});

const savedPhoto = localStorage.getItem("balaguruProfilePhoto");
if (savedPhoto) showProfileImage(savedPhoto);

profileUpload.addEventListener("change", event => {
  const file = event.target.files[0];
  if (!file || !file.type.startsWith("image/")) return;

  const reader = new FileReader();
  reader.onload = e => {
    showProfileImage(e.target.result);
    localStorage.setItem("balaguruProfilePhoto", e.target.result);
  };
  reader.readAsDataURL(file);
});
