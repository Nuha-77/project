// ==========================
// LOCAL STORAGE SYSTEM
// ==========================

// ambil user dari storage
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// simpan user
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// ==========================
// TOGGLE PASSWORD
// ==========================
// toggle password
document.querySelectorAll(".toggle-password").forEach(btn => {
  btn.onclick = () => {
    const input = btn.previousElementSibling;
    const show = input.type === "password";

    input.type = show ? "text" : "password";
    btn.textContent = show ? "🙈" : "👁️";
  };
});

// ==========================
// REGISTER
// ==========================
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    const user = document.getElementById("regUser").value.trim();
    const pass = document.getElementById("regPass").value.trim();
    const confirm = document.getElementById("regConfirm").value.trim();

    if (!user || !pass || !confirm) {
      alert("Semua field wajib diisi");
      return;
    }

    if (pass !== confirm) {
      alert("Password tidak sama");
      return;
    }

    let users = getUsers();

    // cek user sudah ada
    const exist = users.find(u => u.username === user);
    if (exist) {
      alert("Username sudah terdaftar");
      return;
    }

    users.push({ username: user, password: pass });
    saveUsers(users);

    alert("Registrasi berhasil");
    window.location.href = "login.html";
  });
}

// ==========================
// LOGIN
// ==========================
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();

    if (!user || !pass) {
      alert("Isi semua field");
      return;
    }

    const users = getUsers();

    const validUser = users.find(
      u => u.username === user && u.password === pass
    );

    if (!validUser) {
      alert("Username atau password salah");
      return;
    }

    // simpan session login
    localStorage.setItem("isLogin", "true");
    localStorage.setItem("currentUser", user);

    window.location.href = "index.html";
  });
}

// ==========================
// PROTECT INDEX (HARUS LOGIN)
// ==========================
if (window.location.pathname.includes("index.html")) {
  const isLogin = localStorage.getItem("isLogin");

  if (!isLogin) {
    window.location.href = "login.html";
  }
}

// ================= GOOGLE LOGIN FAKE =================
document.querySelectorAll('.btn-google').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Terhubung dengan Akun Google Anda');
    
    // redirect ke beranda
    window.location.href = "index.html";
  });
});