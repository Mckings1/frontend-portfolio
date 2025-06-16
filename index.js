// Mobile menu toggle
document.getElementById("current-year").textContent = new Date().getFullYear();

const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

//years of experience
const startYear = 2022;
const currentYear = new Date().getFullYear();
const experience = currentYear - startYear;
document.getElementById("experience").innerText = `${experience}+ years`;

document.getElementById("yoe1").innerText = `${experience}+ years`;
document.getElementById("yoe2").innerText = `${experience}+ years`;
// Typing animation
const typingText = document.getElementById("typing-text");
const professions = [
  "Software Engineer",
  "Frontend Engineer",
  "Web Developer",
  "AI/Automation Engineer",
  "WordPress Developer",
];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function typeWriter() {
  const currentProfession = professions[professionIndex];

  if (isDeleting) {
    typingText.textContent = currentProfession.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentProfession.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentProfession.length) {
    isEnd = true;
    isDeleting = true;
    setTimeout(typeWriter, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    professionIndex = (professionIndex + 1) % professions.length;
    setTimeout(typeWriter, 500);
  } else {
    const typingSpeed = isDeleting ? 100 : 150;
    const randomSpeed = Math.random() * 100;
    setTimeout(typeWriter, isEnd ? typingSpeed : typingSpeed + randomSpeed);
  }
}

tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#10B981",
        dark: "#1F2937",
        light: "#F3F4F6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
};

//certificate responds
function openModal(img) {
  document.getElementById("modalImg").src = img.src;
  document.getElementById("imgModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("imgModal").classList.add("hidden");
}
// Start typing animation after page loads
setTimeout(typeWriter, 1000);

// Back to top button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("opacity-0", "invisible");
    backToTopButton.classList.add("opacity-100", "visible");
  } else {
    backToTopButton.classList.remove("opacity-100", "visible");
    backToTopButton.classList.add("opacity-0", "invisible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Form submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Here you would typically send the form data to a server
  // For this example, we'll just show an alert
  alert(
    `Thank you, ${name}! Your message has been sent. I'll get back to you soon.`
  );

  // Reset form
  contactForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});
