// Smooth scroll
document.querySelectorAll('.scrollto').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // active class update
    document.querySelectorAll('.scrollto').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
  });
});

// Typing effect
let typedText = document.querySelector('.typed');
if (typedText) {
  let texts = ["Web Developer", "Computer Software Engineer", "Student"];
  let index = 0, charIndex = 0, currentText = '', isDeleting = false;

  function type() {
    if (index >= texts.length) index = 0;
    currentText = texts[index];

    typedText.textContent = currentText.substring(0, charIndex);

    if (!isDeleting && charIndex < currentText.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 60);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) index++;
      setTimeout(type, 1000);
    }
  }

  type();
}

const toggleSwitch = document.querySelector('#checkbox');

toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

document.getElementById("viewCvBtn").addEventListener("click", function () {
const cvContainer = document.getElementById("cvContainer");

if (cvContainer.style.display ===  "block") {
  cvContainer.style.display = "none";
  this.textContent = "📥 View CV"; 
} 
else {
cvContainer.style.display = "block";
this.textContent = "❌ Hide CV"; 
}

});