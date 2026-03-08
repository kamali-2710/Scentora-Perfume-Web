
    // submit refresh prevent
        let form_btn = document.getElementById("loginform");
        form_btn.addEventListener("submit", (e) => {
          e.preventDefault();
          login();
        });
        //validation

        let login = () => {
          let user = document.getElementById("user");
          let pswd = document.getElementById("pswd");

          let usererr = document.getElementById("usererr");
          let pswderr = document.getElementById("pswderr");

          let ischecked = true;

          if (user.value == "") {
            usererr.innerText = "This field is required";
            user.style.border = "1px solid red";
            ischecked = false;
          } else if (user.value !== "admin") {
            usererr.innerText = "Invalid User Name";
           user.style.border = "2px solid red";
            ischecked = false;
          } else {
            usererr.innerText = "";
            user.style.border = "1px solid green";
          }
          if (pswd.value == "") {
            pswderr.innerText = "This field is required";
            pswd.style.border = "1px solid red";
            ischecked = false;
          } 
          else if (pswd.value !== "admin54") {
            pswderr.innerText = "Incorrect Password";
            pswd.style.border = "2px solid red";
            ischecked = false;
          } else {
            pswderr.innerText = "";
            pswd.style.border = "1px solid green";
          }

          if (ischecked) {

              Swal.fire({
                title: "Success!",
                text: "Login Successfully",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });

              setTimeout(() => {
                window.location.href = "dashboard.html";
              }, 1500);
            }
          }