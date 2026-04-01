/* ================= SCROLL ROW (ARROW CONTROL) ================= */

document.querySelectorAll(".row").forEach((row) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  // drag scroll (kayak Netflix)
  row.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
  });

  row.addEventListener("mouseleave", () => {
    isDown = false;
  });

  row.addEventListener("mouseup", () => {
    isDown = false;
  });

  row.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - row.offsetLeft;
    const walk = (x - startX) * 1.5;
    row.scrollLeft = scrollLeft - walk;
  });
});


/* ================= HOVER FOCUS EFFECT ================= */

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    cards.forEach(c => c.style.opacity = "0.5");
    card.style.opacity = "1";
  });

  card.addEventListener("mouseleave", () => {
    cards.forEach(c => c.style.opacity = "1");
  });
});


/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.9)";
  } else {
    navbar.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)";
  }
});


/* ================= FAKE PLAY BUTTON ================= */

document.querySelectorAll(".btn-primary").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Memulai film...");
  });
});

document.querySelectorAll(".btn-secondary").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Detail film...");
  });
});

document.querySelectorAll(".row-wrapper").forEach(wrapper => {
  const row = wrapper.querySelector(".row");
  const left = wrapper.querySelector(".arrow.left");
  const right = wrapper.querySelector(".arrow.right");

  right.onclick = () => row.scrollBy({ left: 300, behavior: "smooth" });
  left.onclick = () => row.scrollBy({ left: -300, behavior: "smooth" });
});

const continueWatching = [
  {
    title: "Don't Look Up",
    img: "assets/continue/dontlook.png",
    rating: "4.5/5",
    progress: 60
  },
  {
    title: "All Of Us Are Dead",
    img: "assets/continue/allofus.png",
    rating: "4.2/5",
    progress: 40
  },
  {
    title: "Blue Lock",
    img: "assets/continue/bluelock.png",
    rating: "4.6/5",
    progress: 80,
    badge: "Episode Baru"
  },
  {
    title: "Batman",
    img: "assets/continue/batman.png",
    rating: "4.4/5",
    progress: 30
  },
  {
    title: "The Little Mermaid",
    img: "assets/continue/tlm.png",
    rating: "4.1/5",
    progress: 70
  },
  {
    title: "A Man Called Otto",
    img: "assets/continue/otto.png",
    rating: "4.4/5",
    progress: 30
  },
  {
    title: "Guardian of the Galaxy Vol. 3",
    img: "assets/continue/gog.png",
    rating: "4.8/5",
    progress: 90
  },
  {
    title: "Black Adam",
    img: "assets/continue/blackadam.png",
    rating: "4.0/5",
    progress: 20
  },
  {
    title: "Dilan 1991",
    img: "assets/continue/dilan.png",
    rating: "4.3/5",
    progress: 20
  }
];

const container = document.getElementById("continueWatching");

continueWatching.forEach(movie => {
  const card = document.createElement("div");
  card.classList.add("card", "landscape");

  card.innerHTML = `
    <img src="${movie.img}" />

    ${movie.badge ? `<span class="badge blue">${movie.badge}</span>` : ""}

    <div class="overlay">
      <div class="info">
        <span class="title">${movie.title}</span>
        <span class="rating">★ ${movie.rating}</span>
      </div>

      <div class="progress-bar">
        <div class="progress" style="width:${movie.progress}%"></div>
      </div>
    </div>
  `;

  container.appendChild(card);
});

const topRating = [
  {
    title: "1",
    img: "assets/top/Number=1.png",
    badge: "Episode Baru"
  },
  {
    title: "2",
    img: "assets/top/Number=2.png",
    badge: "Top 10"
  },
  {
    title: "3",
    img: "assets/top/Number=3.png",
    badge: "Top 10"
  },
  {
    title: "4",
    img: "assets/top/Number=4.png",
    badge: "Episode Baru"
  },
  {
    title: "5",
    img: "assets/top/Number=5.png",
    badge: "Episode Baru"
  },
  {
    title: "6",
    img: "assets/top/Number=6.png",
  },
  {
    title: "7",
    img: "assets/top/Number=7.png",
    badge: "Top 10"
  },
  {
    title: "8",
    img: "assets/top/Number=8.png",
  },
  {
    title: "9",
    img: "assets/top/Number=9.png",
  },
  {
    title: "10",
    img: "assets/top/Number=10.png",
  },
  {
    title: "11",
    img: "assets/top/Number=11.png",
  },
  {
    title: "12",
    img: "assets/top/Number=12.png",
  },
  {
    title: "13",
    img: "assets/top/Number=13.png",
  },
  {
    title: "14",
    img: "assets/top/Number=14.png",
    badge: "Top 10"
  },
  {
    title: "15",
    img: "assets/top/Number=15.png",
  },
  {
    title: "16",
    img: "assets/top/Number=16.png",
  },
  {
    title: "17",
    img: "assets/top/Number=17.png",
  },
  {
    title: "18",
    img: "assets/top/Number=18.png",
  }
];

const topContainer = document.getElementById("topRating");

topRating.forEach(movie => {
  const card = document.createElement("div");
  card.classList.add("card", "portrait");

  card.innerHTML = `
    <img src="${movie.img}" />

  ${movie.badge === "Top 10"
    ? `<span class="badge red"><span>Top</span><span>10</span></span>`
    : movie.badge === "Episode Baru"
    ? `<span class="badge blue">Episode Baru</span>`
    : ""
    }
  `;

  topContainer.appendChild(card);
});

function scrollRow(id, direction) {
  const container = document.getElementById(id);
  const scrollAmount = 300;

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

const trending = [
  {
    title: "Trending 1",
    img: "assets/trending/Number=1.png",
    top: 1
  },
  {
    title: "Trending 2",
    img: "assets/trending/Number=2.png",
    top: 2
  },
  {
    title: "Trending 3",
    img: "assets/trending/Number=3.png",
    top: 3
  },
  {
    title: "Trending 4",
    img: "assets/trending/Number=4.png",
    top: 4
  },
  {
    title: "Trending 5",
    img: "assets/trending/Number=5.png",
    top: 5
  },
  {
    title: "Trending 6",
    img: "assets/trending/Number=6.png",
    top: 6
  },
  {
    title: "Trending 7",
    img: "assets/trending/Number=7.png",
    top: 7
  },
  {
    title: "Trending 8",
    img: "assets/trending/Number=8.png",
    top: 8
  },
  {
    title: "Trending 9",
    img: "assets/trending/Number=9.png",
    top: 9
  },
  {
    title: "Trending 10",
    img: "assets/trending/Number=10.png",
    top: 10
  }
];

const trendingContainer = document.getElementById("trending");

trending.forEach(movie => {
  const card = document.createElement("div");
  card.classList.add("card", "portrait");

  card.innerHTML = `
    <img src="${movie.img}" />

    <span class="badge red">
    <span>Top</span>
    <span>${movie.top}</span>
    </span>
  `;

  trendingContainer.appendChild(card);
});

const rilisBaru = [
  {
    title: "Little Mermaid",
    img: "assets/rilis/1.png",
    badge: "Top 10"
  },
  {
    title: "Duty After School",
    img: "assets/rilis/2.png",
    badge: "Episode Baru"
  },
  {
    title: "Big Hero 6",
    img: "assets/rilis/3.png",
    badge: "Top 10"
  },
  {
    title: "Of Us Are Dead",
    img: "assets/rilis/4.png",
    badge: "Episode Baru"
  },
  {
    title: "Missing",
    img: "assets/rilis/5.png"
  },
  {
    title: "6",
    img: "assets/rilis/6.png"
  },
  {
    title: "7",
    img: "assets/rilis/7.png"
  },
  {
    title: "8",
    img: "assets/rilis/8.png"
  },
  {
    title: "9",
    img: "assets/rilis/9.png"
  },
  {
    title: "10",
    img: "assets/rilis/10.png"
  },
  {
    title: "11",
    img: "assets/rilis/11.png"
  },
  {
    title: "12",
    img: "assets/rilis/12.png"
  },
  {
    title: "13",
    img: "assets/rilis/13.png"
  },
  {
    title: "14",
    img: "assets/rilis/14.png"
  },
  {
    title: "15",
    img: "assets/rilis/15.png"
  }

];

const rilisContainer = document.getElementById("rilisBaru");

rilisBaru.forEach((movie, index) => {
  const card = document.createElement("div");
  card.classList.add("card", "portrait");

  card.innerHTML = `
    <img src="${movie.img}" loading="lazy" />

    ${
      movie.badge === "Episode Baru"
        ? `<span class="badge blue">Episode Baru</span>`
        : ""
    }

    ${
      movie.badge === "Top 10"
        ? `<span class="badge red">Top<br>10</span>`
        : ""
    }
  `;

  rilisContainer.appendChild(card);
});

function renderMovies(containerId, data) {
  const container = document.getElementById(containerId);

  data.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card", "portrait");

    card.innerHTML = `
      <img src="${movie.img}" loading="lazy" />

      ${
        movie.badge === "Episode Baru"
          ? `<span class="badge blue">Episode Baru</span>`
          : ""
      }

      ${
        movie.badge === "Top 10"
          ? `<span class="badge red">Top<br>10</span>`
          : ""
      }
    `;

    container.appendChild(card);
  });
}

renderMovies("rilisBaru", rilisBaru);
renderMovies("topRating", topRating);
renderMovies("trending", trending);

/* ===== AUTO HIDE ARROW ===== */

document.querySelectorAll(".row-wrapper").forEach(wrapper => {
  const row = wrapper.querySelector(".row");
  const left = wrapper.querySelector(".arrow.left");
  const right = wrapper.querySelector(".arrow.right");

  function updateArrow() {
    const maxScroll = row.scrollWidth - row.clientWidth;

    // kiri
    if (row.scrollLeft <= 0) {
      left.style.opacity = "0";
      left.style.pointerEvents = "none";
    } else {
      left.style.opacity = "1";
      left.style.pointerEvents = "auto";
    }

    // kanan
    if (row.scrollLeft >= maxScroll - 5) {
      right.style.opacity = "0";
      right.style.pointerEvents = "none";
    } else {
      right.style.opacity = "1";
      right.style.pointerEvents = "auto";
    }
  }

  row.addEventListener("scroll", updateArrow);
  updateArrow();
});

const profile = document.querySelector(".profile");

// toggle dropdown
profile.addEventListener("click", (e) => {
  e.stopPropagation();
  profile.classList.toggle("active");
});

// klik luar → tutup
document.addEventListener("click", (e) => {
  if (!profile.contains(e.target)) {
    profile.classList.remove("active");
  }
});

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // hapus data login (kalau ada)
  localStorage.removeItem("isLogin");

  // redirect ke halaman login
  window.location.href = "login.html";
});

const muteBtn = document.getElementById("muteBtn");

let isMuted = true;

muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;

  if (isMuted) {
    muteBtn.classList.remove("fa-volume-high");
    muteBtn.classList.add("fa-volume-xmark");
  } else {
    muteBtn.classList.remove("fa-volume-xmark");
    muteBtn.classList.add("fa-volume-high");
  }
});

document.querySelectorAll(".footer-title").forEach(btn => {
  btn.addEventListener("click", () => {

    // tutup semua
    document.querySelectorAll(".footer-accordion").forEach(item => {
      if (item !== btn.parentElement) {
        item.classList.remove("active");
      }
    });

    // toggle
    btn.parentElement.classList.toggle("active");
  });
});

