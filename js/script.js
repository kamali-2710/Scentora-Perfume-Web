 //submit refresh prevent
        let form_btn = document.getElementById("loginform");
        form_btn.addEventListener("submit", (e) => {
          e.preventDefault();
          login();
        });
        //validation

        let login = () => {
          let gmail = document.getElementById("gmail");
          let pswd = document.getElementById("pswd");

          let gmailerr = document.getElementById("gmailerr");
          let pswderr = document.getElementById("pswderr");
          
          const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
          let ischecked = true;

          if (gmail.value == "") {
            gmailerr.innerText = "This field is required";
            gmail.style.border = "1px solid red";
            ischecked = false;
          } else if (!emailRegex.test(gmail.value)) {
            gmailerr.innerText = "Please enter a valid Gmail address";
            gmail.style.border = "1px solid red";
            ischecked = false;
          } else {
            gmailerr.innerText = "";
            gmail.style.border = "1px solid green";
          }
          if (pswd.value == "") {
            pswderr.innerText = "This field is required";
            pswd.style.border = "1px solid red";
            ischecked = false;
          } else {
            pswderr.innerText = "";
            pswd.style.border = "1px solid green";
          }

          if (ischecked) {
            let regList =
              JSON.parse(localStorage.getItem("RegisterList")) || [];

            // No user registered
            if (regList.length === 0) {
              Swal.fire({
                title: "Not Registered",
                text: "You are not registered. Please register first.",
                icon: "warning",
              });

              setTimeout(() => {
                window.location.href = "./register.html";
              }, 1500);
              return;
            }

            // Check email exists
            let emailMatch = regList.filter((ele) => ele.email === gmail.value);

            if (emailMatch.length === 0) {
              Swal.fire({
                title: "Not Registered",
                text: "Email not found. Please register first.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Register",
                cancelButtonText: "Cancel",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "./register.html";
                }
              });
            }

            // Check password
            if (emailMatch[0].pwd === pswd.value) {
              localStorage.setItem("isLogin", "true");
              localStorage.setItem("activeUser", JSON.stringify(emailMatch[0]));

              Swal.fire({
                title: "Success!",
                text: "Login Successfully",
                icon: "success",
                showConfirmButton: false,
              });

              setTimeout(() => {
                window.location.href = "./home.html";
              }, 1500);
            } else {
              Swal.fire({
                title: "Login Failed",
                text: "Invalid Password",
                icon: "error",
              });
            }
          }
        };