/* ── Movie Data ── */
/* ── Poster proxy helper: routes TMDB images via wsrv.nl to avoid hotlink blocks ── */
function tmdbProxy(path) {
  return `https://wsrv.nl/?url=image.tmdb.org/t/p/w500${path}&w=500&output=jpg`;
}

const movies = [
  {
    title: "Dune: Part Two",
    rating: "8.5",
    genre: "Sci-Fi",
    year: "2024",
    description: "Paul Atreides bersatu dengan suku Fremen untuk mengobarkan perang melawan para pengkhianat yang menghancurkan keluarganya, sambil menghadapi pilihan antara cinta dan takdir semesta.",
    poster: tmdbProxy("/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"),
    trailer: "https://www.youtube-nocookie.com/embed/Way9Dexny3w?autoplay=1&rel=0"
  },
  {
    title: "The Batman",
    rating: "7.8",
    genre: "Action",
    year: "2022",
    description: "Bruce Wayne masih dua tahun berpatroli sebagai Batman ketika serial pembunuhan misterius mengguncang Gotham. Ia harus mengungkap jaringan korupsi yang mengakar jauh lebih dalam dari dugaan.",
    poster: tmdbProxy("/74xTEgt7R36Fpooo50r9T25onhq.jpg"),
    trailer: "https://www.youtube-nocookie.com/embed/mqqft2x_Aa4?autoplay=1&rel=0"
  },
  {
    title: "Your Name",
    rating: "8.4",
    genre: "Animation",
    year: "2016",
    description: "Dua remaja yang tinggal di kota dan desa tiba-tiba bertukar tubuh secara misterius setiap malam — dan semakin dalam mereka mencari satu sama lain, semakin besar misteri yang terungkap.",
    poster: tmdbProxy("/q719jXXEzOoYaps6babgKnONONX.jpg"),
    trailer: "https://www.youtube-nocookie.com/embed/xU47nhruN-Q?autoplay=1&rel=0"
  },
  {
    title: "Everything Everywhere All at Once",
    rating: "7.8",
    genre: "Drama",
    year: "2022",
    description: "Seorang wanita imigran Tionghoa yang kewalahan mengurus binatu menemukan bahwa ia harus terhubung dengan kehidupan paralel di semesta lain untuk menyelamatkan dunia.",
    poster: tmdbProxy("/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg"),
    trailer: "https://www.youtube-nocookie.com/embed/wxN1T1uxQ2g?autoplay=1&rel=0"
  },
  {
    title: "Oppenheimer",
    rating: "8.9",
    genre: "Drama",
    year: "2023",
    description: "Kisah J. Robert Oppenheimer dan perannya dalam menciptakan bom atom — antara kejeniusan, moral, dan konsekuensi yang mengubah dunia selamanya.",
    poster: tmdbProxy("/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"),
    trailer: "https://www.youtube-nocookie.com/embed/uYPbbksJxIg?autoplay=1&rel=0"
  },
  {
    title: "Guardians of the Galaxy Vol. 3",
    rating: "7.9",
    genre: "Action",
    year: "2023",
    description: "Peter Quill dan kawan-kawan memulai misi berbahaya demi menyelamatkan Rocket — mengungkap masa lalu gelapnya dan menghadapi musuh paling mengerikan mereka.",
    poster: tmdbProxy("/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"),
    trailer: "https://www.youtube-nocookie.com/embed/u3V5KDHRQvk?autoplay=1&rel=0"
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    rating: "8.6",
    genre: "Animation",
    year: "2023",
    description: "Miles Morales melanjutkan petualangan lintas dimensi bersama Gwen Stacy — menghadapi pasukan Spider-Man dari seluruh Multiverse dalam petualangan yang menakjubkan.",
    poster: tmdbProxy("/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"),
    trailer: "https://www.youtube-nocookie.com/embed/shW9i6k8cB0?autoplay=1&rel=0"
  },
  {
    title: "A Quiet Place",
    rating: "7.5",
    genre: "Horror",
    year: "2018",
    description: "Sebuah keluarga berjuang bertahan hidup di dunia yang dikuasai makhluk mematikan berburu lewat suara — satu desahan bisa menjadi akhir segalanya.",
    poster: tmdbProxy("/nAU74GmpUk7t5iklEp3bufwDq4n.jpg"),
    trailer: "https://www.youtube-nocookie.com/embed/p9wE8dyzEJE?autoplay=1&rel=0"
  }
];

/* ─ Fallback poster ─ */
const FALLBACK_POSTER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='380' height='570' viewBox='0 0 380 570'%3E%3Crect fill='%23240038' width='380' height='570'/%3E%3Ctext x='190' y='285' font-size='60' text-anchor='middle' dominant-baseline='middle' fill='%237a3cff'%3E🎬%3C/text%3E%3C/svg%3E";

/* ─ Per-movie fallback posters via wsrv.nl proxy (Wikipedia) ─ */
function wikiProxy(path) {
  return `https://wsrv.nl/?url=upload.wikimedia.org/wikipedia${path}&w=400&output=jpg`;
}
const posterFallbacks = {
  "Dune: Part Two":                      wikiProxy("/en/thumb/8/8e/Dune_Part_Two_poster.jpeg/220px-Dune_Part_Two_poster.jpeg"),
  "The Batman":                          wikiProxy("/en/thumb/9/99/The_Batman_%28film%29_poster.jpg/220px-The_Batman_%28film%29_poster.jpg"),
  "Your Name":                           wikiProxy("/en/thumb/0/0b/Your_Name_poster.jpg/220px-Your_Name_poster.jpg"),
  "Everything Everywhere All at Once":   wikiProxy("/en/thumb/f/f2/Everything_Everywhere_All_at_Once.jpg/220px-Everything_Everywhere_All_at_Once.jpg"),
  "Oppenheimer":                         wikiProxy("/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg"),
  "Guardians of the Galaxy Vol. 3":      wikiProxy("/en/thumb/3/3b/Guardians_of_the_Galaxy_Vol._3_poster.jpg/220px-Guardians_of_the_Galaxy_Vol._3_poster.jpg"),
  "Spider-Man: Across the Spider-Verse": wikiProxy("/en/thumb/b/b4/Spider-Man-_Across_the_Spider-Verse_%28poster%29.jpg/220px-Spider-Man-_Across_the_Spider-Verse_%28poster%29.jpg"),
  "A Quiet Place":                       wikiProxy("/en/thumb/2/21/A_Quiet_Place_film.png/220px-A_Quiet_Place_film.png")
};

/* ─ State ─ */
let currentIndex = 0;
let isTransitioning = false;

/* =====================================================
   UTILITIES
===================================================== */
function safeImg(img, movieTitle) {
  img.onerror = () => {
    const wiki = movieTitle && posterFallbacks[movieTitle];
    if (wiki && img.src !== wiki) {
      img.src = wiki;
      img.onerror = () => { img.src = FALLBACK_POSTER; img.onerror = null; };
    } else {
      img.src = FALLBACK_POSTER;
      img.onerror = null;
    }
  };
}

/* =====================================================
   HERO SLIDER
===================================================== */
function renderHero(index) {
  if (isTransitioning) return;
  isTransitioning = true;

  const movie  = movies[index];
  const poster = document.getElementById('heroPoster');
  const title  = document.getElementById('heroTitle');
  const rating = document.getElementById('heroRating');
  const genre  = document.getElementById('heroGenre');
  const year   = document.getElementById('heroYear');
  const synop  = document.getElementById('heroSynopsis');

  poster.classList.add('fade-out');
  title.classList.add('fade-out');
  synop.classList.add('fade-out');

  setTimeout(() => {
    poster.src         = movie.poster;
    safeImg(poster, movie.title);
    title.textContent  = movie.title;
    rating.textContent = movie.rating;
    genre.textContent  = movie.genre;
    year.textContent   = movie.year;
    synop.textContent  = movie.description;

    poster.classList.remove('fade-out');
    title.classList.remove('fade-out');
    synop.classList.remove('fade-out');

    document.querySelectorAll('.thumb-card').forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });

    isTransitioning = false;
  }, 350);
}

function buildThumbnails() {
  const track = document.getElementById('thumbnailTrack');
  track.innerHTML = '';
  movies.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'thumb-card' + (i === 0 ? ' active' : '');
    const img = document.createElement('img');
    img.src = m.poster;
    img.alt = m.title;
    safeImg(img, m.title);
    card.appendChild(img);
    card.addEventListener('click', () => { currentIndex = i; renderHero(i); });
    track.appendChild(card);
  });
}

document.getElementById('btnPrev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + movies.length) % movies.length;
  renderHero(currentIndex);
});
document.getElementById('btnNext').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % movies.length;
  renderHero(currentIndex);
});

/* =====================================================
   TRAILER MODAL
===================================================== */
const trailerModal  = document.getElementById('trailerModal');
const trailerIframe = document.getElementById('trailerIframe');
const trailerTitle  = document.getElementById('trailerModalTitle');

document.getElementById('btnTrailer').addEventListener('click', () => {
  const movie = movies[currentIndex];
  trailerTitle.innerHTML = `<i class="fa-solid fa-clapperboard me-2"></i>${movie.title} — Trailer`;

  // Reset iframe wrapper
  const wrap = trailerIframe.parentElement;
  wrap.style.display = 'block';

  // Use youtube-nocookie for better embed support
  const src = movie.trailer.replace('youtube.com', 'youtube-nocookie.com');
  trailerIframe.src = src;

  // Fallback: if iframe fails to load after 5s, show a direct link
  trailerIframe.onload = null;
  const fallbackId = `yt-${Date.now()}`;
  const existingFallback = document.getElementById('trailerFallback');
  if (existingFallback) existingFallback.remove();

  const videoId = src.match(/embed\/([^?]+)/)?.[1];
  if (videoId) {
    const fallbackEl = document.createElement('div');
    fallbackEl.id = 'trailerFallback';
    fallbackEl.style.cssText = 'display:none;text-align:center;padding:2rem;color:#f0eaff;';
    fallbackEl.innerHTML = `<p style="margin-bottom:1rem;opacity:.8">Trailer tidak dapat diputar di sini.</p>
      <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener"
         style="background:#7a3cff;color:#fff;padding:.7rem 1.5rem;border-radius:8px;text-decoration:none;font-weight:600;">
        <i class="fa-brands fa-youtube me-2"></i>Tonton di YouTube
      </a>`;
    trailerIframe.parentElement.parentElement.appendChild(fallbackEl);

    let loaded = false;
    trailerIframe.onload = () => { loaded = true; };
    setTimeout(() => {
      if (!loaded) {
        wrap.style.display = 'none';
        fallbackEl.style.display = 'block';
      }
    }, 5000);
  }
});
trailerModal.addEventListener('hide.bs.modal', () => {
  trailerIframe.src = '';
  const fb = document.getElementById('trailerFallback');
  if (fb) fb.remove();
  trailerIframe.parentElement.style.display = 'block';
});

/* =====================================================
   TOP RATED CARDS
===================================================== */
function buildTopRated() {
  const grid   = document.getElementById('topRatedGrid');
  grid.innerHTML = '';
  const sorted = [...movies].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  sorted.forEach((movie, i) => {
    const col = document.createElement('div');
    col.className = 'col-6 col-md-4 col-lg-3 col-xl-2 reveal';
    col.style.transitionDelay = `${i * 0.08}s`;
    col.innerHTML = buildCardHTML(movie);
    col.querySelector('.movie-card').addEventListener('click', () => {
      currentIndex = movies.indexOf(movie);
      renderHero(currentIndex);
      document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
    });
    grid.appendChild(col);
  });
  observeReveal();
}

function buildCardHTML(movie) {
  const fallback = posterFallbacks[movie.title] || FALLBACK_POSTER;
  return `
    <div class="movie-card">
      <div class="card-poster-wrap">
        <img src="${movie.poster}" alt="${movie.title}" onerror="if(this.dataset.tried){this.src='${FALLBACK_POSTER}';this.onerror=null;}else{this.dataset.tried=1;this.src=posterFallbacks[this.alt]||'${FALLBACK_POSTER}';}" loading="lazy" />
        <div class="card-overlay">
          <div class="overlay-play"><i class="fa-solid fa-play"></i></div>
        </div>
      </div>
      <div class="card-body-custom">
        <div class="card-title-custom">${movie.title}</div>
        <div class="card-meta">
          <span class="card-rating"><i class="fa-solid fa-star"></i>${movie.rating}</span>
          <span class="card-genre-tag">${movie.genre}</span>
        </div>
      </div>
    </div>`;
}

/* =====================================================
   GENRE FILTER
===================================================== */
function buildGenreGrid(filterGenre = 'All') {
  const grid = document.getElementById('genreGrid');
  grid.innerHTML = '';
  const filtered = filterGenre === 'All'
    ? movies
    : movies.filter(m => m.genre.toLowerCase() === filterGenre.toLowerCase());

  if (!filtered.length) {
    grid.innerHTML = `<div class="col-12 text-center text-muted py-5">No movies found for this genre.</div>`;
    return;
  }
  filtered.forEach((movie, i) => {
    const col = document.createElement('div');
    col.className = 'col-6 col-md-4 col-lg-3 col-xl-2 reveal';
    col.style.transitionDelay = `${i * 0.08}s`;
    col.innerHTML = buildCardHTML(movie);
    col.querySelector('.movie-card').addEventListener('click', () => {
      currentIndex = movies.indexOf(movie);
      renderHero(currentIndex);
      document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
    });
    grid.appendChild(col);
  });
  observeReveal();
}

document.getElementById('genrePills').addEventListener('click', e => {
  const pill = e.target.closest('.genre-pill');
  if (!pill) return;
  document.querySelectorAll('.genre-pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
  buildGenreGrid(pill.dataset.genre);
});

/* =====================================================
   SEARCH
===================================================== */
const searchInput   = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { searchResults.innerHTML = ''; searchResults.classList.remove('show'); return; }
  const matches = movies.filter(m => m.title.toLowerCase().includes(q));
  if (!matches.length) {
    searchResults.innerHTML = `<div class="search-no-result">No results found.</div>`;
    searchResults.classList.add('show');
    return;
  }
  searchResults.innerHTML = matches.map(m => `
    <div class="search-item" data-title="${m.title}">
      <img src="${m.poster}" alt="${m.title}" onerror="if(this.dataset.tried){this.src=FALLBACK_POSTER;this.onerror=null;}else{this.dataset.tried=1;this.src=posterFallbacks[this.alt]||FALLBACK_POSTER;}" />
      <div class="search-item-info">
        <div class="s-title">${m.title}</div>
        <div class="s-meta">⭐ ${m.rating} · ${m.genre} · ${m.year}</div>
      </div>
    </div>`).join('');
  searchResults.classList.add('show');
});

searchResults.addEventListener('click', e => {
  const item = e.target.closest('.search-item');
  if (!item) return;
  const idx = movies.findIndex(m => m.title === item.dataset.title);
  if (idx !== -1) { currentIndex = idx; renderHero(currentIndex); document.getElementById('hero').scrollIntoView({ behavior: 'smooth' }); }
  searchInput.value = '';
  searchResults.innerHTML = '';
  searchResults.classList.remove('show');
});

document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrapper')) { searchResults.innerHTML = ''; searchResults.classList.remove('show'); }
});

/* =====================================================
   NAVBAR SCROLL
===================================================== */
window.addEventListener('scroll', () => {
  document.getElementById('mainNavbar').classList.toggle('scrolled', window.scrollY > 60);
});

/* =====================================================
   INTERSECTION OBSERVER
===================================================== */
let revealObserver;
function observeReveal() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); revealObserver.unobserve(el.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* =====================================================
   AUTO SLIDE
===================================================== */
let autoSlideTimer;
function startAutoSlide() {
  clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(() => {
    currentIndex = (currentIndex + 1) % movies.length;
    renderHero(currentIndex);
  }, 7000);
}
['btnPrev','btnNext'].forEach(id => {
  document.getElementById(id).addEventListener('click', () => {
    clearInterval(autoSlideTimer);
    setTimeout(startAutoSlide, 10000);
  });
});

/* =====================================================
   ACTIVE NAV on scroll
===================================================== */
window.addEventListener('scroll', () => {
  let current = '';
  ['hero','topRated','genre'].forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  document.querySelectorAll('.nav-pill').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
  });
});

/* =====================================================
   AUTH SYSTEM (localStorage)
===================================================== */
const AUTH_KEY = 'cinerate_users';
const SESSION_KEY = 'cinerate_session';

function getUsers() {
  return JSON.parse(localStorage.getItem(AUTH_KEY) || '[]');
}
function saveUsers(users) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(users));
}
function getSession() {
  return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
}
function setSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}
function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function updateNavForAuth() {
  const session = getSession();
  const loginNavItem = document.getElementById('navLoginItem');
  const userNavItem  = document.getElementById('navUserItem');
  const userNameDisplay = document.getElementById('navUserName');

  if (session) {
    loginNavItem.style.display = 'none';
    userNavItem.style.display  = 'block';
    userNameDisplay.textContent = session.name || session.email.split('@')[0];
  } else {
    loginNavItem.style.display = 'block';
    userNavItem.style.display  = 'none';
  }
}

/* ─ Show toast notification ─ */
function showToast(msg, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `cinerate-toast toast-${type}`;
  toast.innerHTML = `<i class="fa-solid fa-${type === 'success' ? 'check-circle' : 'circle-xmark'} me-2"></i>${msg}`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

/* ─ Switch between Login / Register tabs ─ */
function switchTab(tab) {
  const loginPane  = document.getElementById('loginPane');
  const registerPane = document.getElementById('registerPane');
  const tabLogin   = document.getElementById('tabLogin');
  const tabRegister = document.getElementById('tabRegister');

  if (tab === 'login') {
    loginPane.style.display = 'block';
    registerPane.style.display = 'none';
    tabLogin.classList.add('tab-active');
    tabRegister.classList.remove('tab-active');
  } else {
    loginPane.style.display = 'none';
    registerPane.style.display = 'block';
    tabLogin.classList.remove('tab-active');
    tabRegister.classList.add('tab-active');
  }
  clearAuthMessages();
}

function clearAuthMessages() {
  document.querySelectorAll('.auth-msg').forEach(el => { el.textContent = ''; el.className = 'auth-msg'; });
}

/* ─ LOGIN handler ─ */
document.getElementById('btnDoLogin').addEventListener('click', () => {
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const msg      = document.getElementById('loginMsg');

  if (!email || !password) { msg.textContent = 'Isi email dan password.'; msg.className = 'auth-msg auth-error'; return; }

  const users = getUsers();
  const user  = users.find(u => u.email === email && u.password === btoa(password));

  if (!user) { msg.textContent = 'Email atau password salah.'; msg.className = 'auth-msg auth-error'; return; }

  setSession(user);
  updateNavForAuth();
  bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
  showToast(`Selamat datang, ${user.name || user.email.split('@')[0]}! 🎬`);
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
});

/* ─ REGISTER handler ─ */
document.getElementById('btnDoRegister').addEventListener('click', () => {
  const name     = document.getElementById('regName').value.trim();
  const email    = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  const confirm  = document.getElementById('regConfirm').value;
  const msg      = document.getElementById('registerMsg');

  if (!name || !email || !password || !confirm) { msg.textContent = 'Semua kolom harus diisi.'; msg.className = 'auth-msg auth-error'; return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg.textContent = 'Format email tidak valid.'; msg.className = 'auth-msg auth-error'; return; }
  if (password.length < 6) { msg.textContent = 'Password minimal 6 karakter.'; msg.className = 'auth-msg auth-error'; return; }
  if (password !== confirm) { msg.textContent = 'Password tidak cocok.'; msg.className = 'auth-msg auth-error'; return; }

  const users = getUsers();
  if (users.find(u => u.email === email)) { msg.textContent = 'Email sudah terdaftar.'; msg.className = 'auth-msg auth-error'; return; }

  const newUser = { name, email, password: btoa(password), joined: new Date().toISOString() };
  users.push(newUser);
  saveUsers(users);
  setSession(newUser);
  updateNavForAuth();
  bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
  showToast(`Akun berhasil dibuat! Selamat datang, ${name}! 🎉`);
  ['regName','regEmail','regPassword','regConfirm'].forEach(id => { document.getElementById(id).value = ''; });
});

/* ─ LOGOUT ─ */
document.getElementById('btnLogout').addEventListener('click', () => {
  clearSession();
  updateNavForAuth();
  showToast('Kamu berhasil keluar.', 'error');
});

/* ─ Link "Buat akun" di login pane ─ */
document.getElementById('linkGoRegister').addEventListener('click', e => { e.preventDefault(); switchTab('register'); });
document.getElementById('tabLogin').addEventListener('click', () => switchTab('login'));
document.getElementById('tabRegister').addEventListener('click', () => switchTab('register'));

/* Reset modal state on open */
document.getElementById('loginModal').addEventListener('show.bs.modal', () => {
  switchTab('login');
});

/* =====================================================
   INIT
===================================================== */
function init() {
  buildThumbnails();
  renderHero(0);
  buildTopRated();
  buildGenreGrid('All');
  startAutoSlide();
  updateNavForAuth();
}



document.addEventListener('DOMContentLoaded', function(){
  const loginModalEl = document.getElementById('loginModal');
  if(!loginModalEl) return;

  if(localStorage.getItem('cine_user')) return;

  if(window.bootstrap){
      const loginModal = new bootstrap.Modal(loginModalEl, {
        backdrop:'static',
        keyboard:false
      });
      loginModal.show();
  }
});
