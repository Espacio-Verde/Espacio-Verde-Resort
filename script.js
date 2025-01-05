document.getElementById("reservationForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    date: document.getElementById("date").value,
    room: document.getElementById("room").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await fetch("http://localhost:3000/submit-reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    console.log(response);  // Logging the response to check it

    if (response.ok) {
      alert("Reservation submitted successfully!");
    } else {
      alert("Failed to send reservation. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong. Please try again.");
  }
});

//document.getElementById("reservationForm").addEventListener("submit", async function (event) {
  //event.preventDefault();

  //const formData = {
    //name: document.getElementById("name").value,
    //email: document.getElementById("email").value,
    //date: document.getElementById("date").value,
    //room: document.getElementById("room").value,
    //specialRequests: document.getElementById("specialRequests").value, // Changed to match form field
  //};

  //try {
    //const response = await fetch("http://localhost:3000/submit-reservation", {
      //method: "POST",
      //headers: { "Content-Type": "application/json" },
      //body: JSON.stringify(formData),
    //});

    //if (response.ok) {
      //alert("Reservation submitted successfully!");
    //} else {
      //alert("Failed to send reservation. Please try again.");
    //}
  //} catch (error) {
    //console.error("Error submitting form:", error);
    //alert("Something went wrong. Please try again.");
  //}
//});