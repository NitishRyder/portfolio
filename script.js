//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}

//to reveal hidden work
document.getElementById('see-all-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  
  const hiddenWorks = document.querySelectorAll('.hidden-work');
  
  // Check if the hidden items are currently displayed
  if (hiddenWorks[0].style.display === 'block') {
    // Hide the extra works
    hiddenWorks.forEach(function(work) {
      work.style.display = 'none';
    });
    // Change button text back to "See All"
    this.textContent = 'See All';
  } else {
    // Show the hidden works
    hiddenWorks.forEach(function(work) {
      work.style.display = 'block';
    });
    // Change button text to "Show Less" (optional)
    this.textContent = 'Show Less';
  }
});


//Get in touch
document.getElementById("sendBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formStatus = document.getElementById("formStatus");

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!name || !email || !message) {
    formStatus.innerHTML = '<span class="error-icon">&#10071;</span> Please fill out all fields.';
    formStatus.style.color = "red";
  } else if (!emailPattern.test(email)) {
    formStatus.innerHTML = '<span class="error-icon">&#10071;</span> Invalid email format.';
    formStatus.style.color = "red";
  } else {
    // Send email using EmailJS
    emailjs.send("service_8z9ijdl", "template_axkyu1v", {
      name: name,
      email: email,
      message: message,
    })
    .then(function () {
      formStatus.innerHTML = '<span class="success-icon">&#10003;</span> Message sent successfully!';
      formStatus.style.color = "green";
    })
    .catch(function (error) {
      formStatus.innerHTML = '<span class="error-icon">&#10071;</span> Failed to send message.';
      formStatus.style.color = "red";
    });

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
});






