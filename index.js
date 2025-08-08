
document.addEventListener("DOMContentLoaded", () => {
  // Dark mode button
  const themeBtn = document.getElementById("theme-button");
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode");
  });


  const form = document.getElementById("form");
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const type = document.getElementById("type");
  const day = document.getElementById("day");
  const time = document.getElementById("time");


  const modal = document.getElementById("success-modal");
  const modalText = document.getElementById("modal-text");
  const modalImage = document.querySelector("#success-modal img");

  // hide modal
  modal.classList.remove("show");

  //makes pic move
  let rotateFactor = 0;
  const animateImage = () => {
  if (rotateFactor === 0) {
    rotateFactor = -10;
  } else if (rotateFactor === -10) {
    rotateFactor = 0;
  }
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};

  let animationInterval;

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission

    // Clear previous error styles
    [fname, lname, type, day, time].forEach(input => {
      input.classList.remove("error");
    });

    let missingFields = [];

    if (fname.value.trim() === "") {
      missingFields.push("First Name");
      fname.classList.add("error");
    }

    if (lname.value.trim() === "") {
      missingFields.push("Last Name");
      lname.classList.add("error");
    }

    if (!type.value) {
      missingFields.push("Type of Yoga");
      type.classList.add("error");
    }

    if (!day.value) {
      missingFields.push("Day of the Week");
      day.classList.add("error");
    }

    if (!time.value) {
      missingFields.push("Time");
      time.classList.add("error");
    }

    if (missingFields.length > 0) {
      // Stop submission if errors
      return;
    }

    modalText.textContent = `${fname.value}, you are signed up for ${type.value} Yoga on ${day.value} at ${time.options[time.selectedIndex].text}.`;
    modalText.style.color = "#7e5440ff";  
    modal.classList.add("show");

    animationInterval = setInterval(animateImage, 500);

    // hide modal after 5 seconds
    setTimeout(() => {
      modal.classList.remove("show");
      clearInterval(animationInterval);
    }, 5000);
  };

  form.addEventListener("submit", handleSubmit);

  
});
