  function validation() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Basic form validation
    if (name === "" || email === "" || message === "") {
      // Show an error message if any of the fields are empty
      Swal.fire({
        title: "Error",
        text: "Please fill in all the required fields.",
        icon: "error",
      });
      return false; // Prevent form submission
    }

    // If the form is valid, show the success message
    Swal.fire({
      title: "Success",
      text: "Sent successfully!",
      icon: "success",
    });

    // You can also submit the form here if needed
    // document.getElementById("contact-form").submit();

    return false; // Prevent form submission
  }

