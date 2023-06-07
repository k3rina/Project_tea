const regForm = document.querySelector("#reg_form");

if (regForm) {
  regForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword, action, method } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        cpassword: cpassword.value,
      }),
    });
    const data = await res.json();
    if (data.message !== 'ok') {
      document.querySelector(".message").innerHTML = data.message;
    } else {
      window.location.assign('/')
    }
    e.target.reset();
  });
}

const logForm = document.querySelector("#log_form");

if (logForm) {
  logForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const res = await fetch('/api/auth/log', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message !== 'ok') {
      document.querySelector(".message").innerHTML = data.message;
    } else {
      window.location.assign('/')
    }
    // e.target.reset();
  });
}