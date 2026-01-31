// Select form and input fields
const form = document.querySelector('#contactForm');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const error = document.querySelector('#error');

// Form submission validation
form.addEventListener('submit', (e) =>
  {
  e.preventDefault();

  if(!name.value.trim())
  {
    alert('Name is required!');
    name.focus();
    return;
  }

  else if(!email.value.trim())
  {
    alert('Email is required!');
    email.focus();
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(!email.value.match(emailPattern))
  {
    alert('Enter a valid email!');
    email.focus();
    return;
  }

  else if(!message.value.trim())
  {
    alert('Message is required!');
    message.focus();
    return;
  }

  else
  {
     alert('Form submitted successfully!');
  form.reset();
  }

});














































document.querySelector(".register-form").addEventListener("submit", function(e) {
  e.preventDefault();

  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let course = document.getElementById("course").value;
  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("cpassword").value;

  // Empty check
  if(fname === "" || lname === "" || email === "" || mobile === "" || course === "" || password === "" || cpassword === ""){
    alert("Please fill all fields");
    return;
  }

  // Password match
  if(password !== cpassword){
    alert("Passwords do not match");
    return;
  }

  // Show data after submit
  document.getElementById("result").innerHTML = `
    <h3>Submitted Data</h3>
    <p><b>Name:</b> ${fname} ${lname}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Mobile:</b> ${mobile}</p>
    <p><b>Course:</b> ${course}</p>
  `;

  this.reset();
});
