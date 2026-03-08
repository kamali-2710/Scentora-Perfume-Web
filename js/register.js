 //submit refresh prevent
 let form_btn = document.getElementById("form");
 form_btn.addEventListener("submit", (e) => {
   e.preventDefault();
   register();
 });

 //  let existlist=JSON.parse(localStorage.getItem("registerList"))
 //  let registerList
 //  if(registerList==0){
 //   registerList=[]
 //  }
 //  else{
 //   registerList=existlist
 //  }
 // registerList=[]

 //local storage
 let registerList =
   JSON.parse(localStorage.getItem("RegisterList")) || [];
 let register = () => {
   let name = document.getElementById("name");
   let email = document.getElementById("email");
   let phone = document.getElementById("phone");
   let pwd = document.getElementById("pwd");
   let cpwd = document.getElementById("cpwd");

   let nameErr = document.getElementById("nameerr");
   let emailErr = document.getElementById("emailerr");
   let phoneErr = document.getElementById("numerr");
   let pwdErr = document.getElementById("pwderr");
   let cpwdErr = document.getElementById("cpwderr");

   //validation

   let namePattern = /^[a-zA-Z ]{3,}$/;
   let emailPattern =
     /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook)\.(com|in)$/;
   let phonePattern = /^[6-9]\d{9}$/;
   let pwdPattern =
     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

   let ischecked = true;
   if (name.value == "") {
     nameErr.innerText = "This field is required";
     name.style.border = "1px solid red";
     ischecked = false;
   } else if (!namePattern.test(name.value)) {
     nameErr.innerText = "Name must be letters only, min 3 chars";
     name.style.border = "1px solid red";
     ischecked = false;
   } else {
     nameErr.innerText = "";
     name.style.border = "1px solid green";
   }

   if (email.value == "") {
     emailErr.innerText = "This field is required";
     email.style.border = "1px solid red";
     ischecked = false;
   } else if (!emailPattern.test(email.value)) {
     emailErr.innerText =
       "Enter valid Email";
     email.style.border = "1px solid red";
     ischecked = false;
   } else {
     emailErr.innerText = "";
     email.style.border = "1px solid green";
   }

   if (phone.value == "") {
     phoneErr.innerText = "This field is required";
     phone.style.border = "1px solid red";
     ischecked = false;
   } else if (phone.value.length !== 10) { 
     phoneErr.innerText = "Mobile number must be 10 digits";
     phone.style.border = "1px solid red";
     ischecked = false;
   } else if (!phonePattern.test(phone.value)) {
     phoneErr.innerText =
       "Enter a valid mobile number";
     phone.style.border = "1px solid red";
     ischecked = false;
   } else {
     phoneErr.innerText = "";
     phone.style.border = "1px solid green";
   }
   if (pwd.value == "") {
     pwdErr.innerText = "This field is required";
     pwd.style.border = "1px solid red";
     ischecked = false;
   } else if (!pwdPattern.test(pwd.value)) {
     pwdErr.innerText =
       "Password 8+chars, upper, lower, digit & special";
     pwd.style.border = "1px solid red";
     ischecked = false;
   } else {
     pwdErr.innerText = "";
     pwd.style.border = "1px solid green";
   }
   if (cpwd.value == "") {
     cpwdErr.innerText = "This field is required";
     cpwd.style.border = "1px solid red";
     ischecked = false;
   } else if (!pwdPattern.test(cpwd.value)) {
     cpwdErr.innerText =
       "Password 8+chars, upper, lower, digit & special";
     cpwd.style.border = "1px solid red";
     ischecked = false;
   } else if (pwd.value !== cpwd.value) {
     ischecked = false;
     pwdErr.innerText = "password doesn't matched!";
     cpwdErr.innerText = "password doesn't matched!";
     cpwd.style.border = "1px solid red";
     pwd.style.border = "1px solid red";
     ischecked = false;
   } else {
     cpwdErr.innerText = "";
     cpwd.style.border = "1px solid green";
   }

   if (ischecked) {
     // Check duplicate email
     let matchedUser = registerList.filter(
       (ele) => ele.email.toLowerCase() === email.value.toLowerCase(),
     );
     if (matchedUser.length > 0) {
       emailErr.innerText = "Email already registered!";
       email.style.border = "2px solid red";
       return;
     }

     let user = {
       name: name.value,
       email: email.value,
       phone: phone.value,
       pwd: pwd.value,
       cpwd: cpwd.value,
     };
     //  object to array
     registerList.push(user);

     // localStorage
     localStorage.setItem("RegisterList", JSON.stringify(registerList));
     Swal.fire({
       icon: "success",
       title: "Registered Successfully!",
       text: "You will be redirected to login page.",
       confirmButtonText: "OK",
     }).then(() => {
       window.location.href = "index.html";
       registration();
     });
   }
 };