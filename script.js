/* ===========================
   DATA TRIPS
=========================== */
const trips = [
  {
    id: 1,
    nama: "Travel Cianjur Jakarta",
    icon: "🏙️",
    harga: 150000,
    hargaText: "Rp 150.000",
    kategori: "jakarta",
    durasi: 1,
    featured: true,
    image: "img/travel/travel1.svg",
    jadwal: ["04:00","06:00","08:00","10:00","13:00","16:00","19:00"],
    fasilitas: ["AC Dingin","Musik","Door to Door","Bagasi Gratis","Sopir Berpengalaman"],
    rute: ["Cianjur","Cipanas","Puncak","Ciawi","Cibubur","Jakarta"]
  },
  {
    id: 2,
    nama: "Travel Cianjur Bandung",
    icon: "🌆",
    harga: 90000,
    hargaText: "Rp 90.000",
    kategori: "bandung",
    durasi: 1,
    featured: true,
    image: "img/travel/travel2.svg",
    jadwal: ["05:00","07:00","09:00","11:00","14:00","17:00","20:00"],
    fasilitas: ["AC Dingin","Musik","Door to Door","Bagasi Gratis"],
    rute: ["Cianjur","Ciranjang","Padalarang","Bandung"]
  },
  {
    id: 3,
    nama: "Travel Cianjur Bekasi",
    icon: "🏢",
    harga: 160000,
    hargaText: "Rp 160.000",
    kategori: "jakarta",
    durasi: 1,
    featured: false,
    image: "img/travel/travel3.svg",
    jadwal: ["05:30","07:30","10:00","14:00","18:00"],
    fasilitas: ["AC Dingin","Musik","Door to Door","Charger USB","Bagasi Gratis"],
    rute: ["Cianjur","Cipanas","Tol Jagorawi","Bekasi"]
  },
  {
    id: 4,
    nama: "Travel Cianjur Depok",
    icon: "🌃",
    harga: 145000,
    hargaText: "Rp 145.000",
    kategori: "jakarta",
    durasi: 1,
    featured: false,
    image: "img/travel/travel4.svg",
    jadwal: ["06:00","09:00","13:00","17:00","20:00"],
    fasilitas: ["AC Dingin","Musik","Door to Door","Bagasi Gratis"],
    rute: ["Cianjur","Cipanas","Bogor","Citayam","Depok"]
  },
  {
    id: 5,
    nama: "Travel Cianjur Bogor",
    icon: "🌿",
    harga: 75000,
    hargaText: "Rp 75.000",
    kategori: "lain",
    durasi: 1,
    featured: false,
    image: "img/travel/travel5.svg",
    jadwal: ["05:00","07:00","09:00","12:00","15:00","18:00","21:00"],
    fasilitas: ["AC Dingin","Musik","Door to Door","Bagasi Gratis"],
    rute: ["Cianjur","Cipanas","Puncak","Cisarua","Bogor"]
  },
  {
    id: 6,
    nama: "Travel Cianjur Tangerang",
    icon: "🏬",
    harga: 170000,
    hargaText: "Rp 170.000",
    kategori: "jakarta",
    durasi: 1,
    featured: true,
    image: "img/travel/travel6.svg",
    jadwal: ["05:00","08:00","12:00","16:00","19:00"],
    fasilitas: ["AC Dingin","Musik","Door to Door","Charger USB","Bagasi Gratis"],
    rute: ["Cianjur","Cipanas","Tol JORR","Tangerang"]
  },
  {
    id: 7,
    nama: "Travel Cianjur Sukabumi",
    icon: "🏔️",
    harga: 65000,
    hargaText: "Rp 65.000",
    kategori: "lain",
    durasi: 1,
    featured: false,
    image: "img/travel/travel7.svg",
    jadwal: ["06:00","09:00","12:00","15:00","18:00"],
    fasilitas: ["AC Dingin","Musik","Door to Door","Bagasi Gratis"],
    rute: ["Cianjur","Cibeber","Palabuhanratu Junction","Sukabumi"]
  },
  {
    id: 8,
    nama: "Travel Cianjur Semarang",
    icon: "🌊",
    harga: 350000,
    hargaText: "Rp 350.000",
    kategori: "semarang",
    durasi: 2,
    featured: true,
    image: "img/travel/travel8.svg",
    jadwal: ["07:00","20:00"],
    fasilitas: ["AC Dingin","Musik","Door to Door","Charger USB","WiFi","Bagasi Gratis"],
    rute: ["Cianjur","Cipanas","Cikampek","Semarang"]
  },
  {
    id: 9,
    nama: "Travel Cianjur Yogyakarta",
    icon: "🏯",
    harga: 280000,
    hargaText: "Rp 280.000",
    kategori: "yogyakarta",
    durasi: 2,
    featured: true,
    image: "img/travel/travel9.svg",
    jadwal: ["06:00","18:00"],
    fasilitas: ["AC Dingin","Musik","Door to Door","Charger USB","WiFi","Bagasi Gratis"],
    rute: ["Cianjur","Cipanas","Cikampek","Purwokerto","Yogyakarta"]
  },
  {
    id: 10,
    nama: "Travel Cianjur Surabaya",
    icon: "⚓",
    harga: 420000,
    hargaText: "Rp 420.000",
    kategori: "semarang",
    durasi: 2,
    featured: false,
    image: "img/travel/travel10.svg",
    jadwal: ["06:00","16:00"],
    fasilitas: ["AC Dingin","Musik","Door to Door","Charger USB","WiFi","Bagasi Gratis"],
    rute: ["Cianjur","Cipanas","Semarang","Solo","Surabaya"]
  },
  {
    id: 11,
    nama: "Travel Cianjur Solo",
    icon: "🎭",
    harga: 250000,
    hargaText: "Rp 250.000",
    kategori: "yogyakarta",
    durasi: 2,
    featured: false,
    image: "img/travel/travel11.svg",
    jadwal: ["07:00","18:00"],
    fasilitas: ["AC Dingin","Musik","Door to Door","Charger USB","Bagasi Gratis"],
    rute: ["Cianjur","Cipanas","Semarang","Solo"]
  },
  {
    id: 12,
    nama: "Travel Bandara Cianjur (CGK)",
    icon: "✈️",
    harga: 200000,
    hargaText: "Rp 200.000",
    kategori: "jakarta",
    durasi: 1,
    featured: true,
    image: "img/travel/travel12.svg",
    jadwal: ["02:00","04:00","06:00","08:00","10:00","14:00","16:00","18:00","20:00"],
    fasilitas: ["AC Dingin","Door to Door","Charger USB","Antar Ke Terminal","Tepat Waktu","Bagasi Gratis"],
    rute: ["Cianjur","Cipanas","Cikampek","Soeta Airport"]
  }
];

/* ===========================
   STATE
=========================== */
let filteredTrips = [...trips];
let currentView = 'grid';
let visibleCount = 6;
let favorites = JSON.parse(localStorage.getItem('rt_favorites') || '[]');
let recentlyViewed = JSON.parse(localStorage.getItem('rt_recent') || '[]');

/* ===========================
   INIT
=========================== */
document.addEventListener('DOMContentLoaded', () => {
  // Theme
  const savedTheme = localStorage.getItem('rt_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('rt_theme', next);
  });

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  // Sync hero search
  document.getElementById('heroSearch').addEventListener('input', (e) => {
    document.getElementById('searchInput').value = e.target.value;
    applyFilters();
  });

  // Search clear button
  document.getElementById('searchInput').addEventListener('input', function () {
    document.getElementById('searchClear').style.display = this.value ? 'block' : 'none';
  });

  updateCounts();
  applyFilters();
  renderRecentlyViewed();
  initRangeSlider();
});

/* ===========================
   RANGE SLIDER
=========================== */
function initRangeSlider() {
  updatePriceRange();
}

function updatePriceRange() {
  const minEl = document.getElementById('rangeMinPrice');
  const maxEl = document.getElementById('rangeMaxPrice');
  let minVal = parseInt(minEl.value);
  let maxVal = parseInt(maxEl.value);

  if (minVal > maxVal) {
    if (this === minEl) { minVal = maxVal; minEl.value = minVal; }
    else { maxVal = minVal; maxEl.value = maxVal; }
  }

  document.getElementById('priceMin').textContent = 'Rp ' + minVal.toLocaleString('id');
  document.getElementById('priceMax').textContent = 'Rp ' + maxVal.toLocaleString('id');

  const pct1 = (minVal / 500000) * 100;
  const pct2 = (maxVal / 500000) * 100;
  const fill = document.getElementById('rangeFill');
  fill.style.left = pct1 + '%';
  fill.style.width = (pct2 - pct1) + '%';

  applyFilters();
}

/* ===========================
   UPDATE COUNTS
=========================== */
function updateCounts() {
  const categories = ['jakarta', 'bandung', 'semarang', 'yogyakarta', 'lain'];
  categories.forEach(cat => {
    const el = document.getElementById('count-' + cat);
    if (el) el.textContent = trips.filter(t => t.kategori === cat).length;
  });
}

/* ===========================
   APPLY FILTERS
=========================== */
function applyFilters() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const sort = document.getElementById('sortSelect').value;
  const minPrice = parseInt(document.getElementById('rangeMinPrice').value);
  const maxPrice = parseInt(document.getElementById('rangeMaxPrice').value);
  const featuredOnly = document.getElementById('featuredOnly').checked;

  const checkedDests = [...document.querySelectorAll('#destinationFilter input:checked')].map(el => el.value);
  const checkedDurs = [...document.querySelectorAll('.dur-filter:checked')].map(el => parseInt(el.value));
  const checkedFas = [...document.querySelectorAll('.fas-filter:checked')].map(el => el.value);

  let result = trips.filter(trip => {
    if (query && !trip.nama.toLowerCase().includes(query) && !trip.rute.some(r => r.toLowerCase().includes(query))) return false;
    if (trip.harga < minPrice || trip.harga > maxPrice) return false;
    if (featuredOnly && !trip.featured) return false;
    if (checkedDests.length && !checkedDests.includes(trip.kategori)) return false;
    if (checkedDurs.length && !checkedDurs.includes(trip.durasi)) return false;
    if (checkedFas.length) {
      const fasMap = { door: 'Door to Door', charger: 'Charger USB', wifi: 'WiFi' };
      if (!checkedFas.every(f => trip.fasilitas.includes(fasMap[f]))) return false;
    }
    return true;
  });

  // Sort
  if (sort === 'cheapest') result.sort((a, b) => a.harga - b.harga);
  else if (sort === 'priciest') result.sort((a, b) => b.harga - a.harga);
  else if (sort === 'name') result.sort((a, b) => a.nama.localeCompare(b.nama));
  else result.sort((a, b) => b.id - a.id); // newest

  filteredTrips = result;
  visibleCount = 6;
  renderCards();
  renderActiveFilters();
}

/* ===========================
   RENDER CARDS
=========================== */
function renderCards() {
  const grid = document.getElementById('cardsGrid');
  const empty = document.getElementById('emptyState');
  const loadWrap = document.getElementById('loadMoreWrap');
  const countEl = document.getElementById('resultCount');

  countEl.textContent = filteredTrips.length;

  if (filteredTrips.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    loadWrap.style.display = 'none';
    return;
  }

  empty.style.display = 'none';

  const visible = filteredTrips.slice(0, visibleCount);
  grid.innerHTML = visible.map(trip => cardHTML(trip)).join('');

  loadWrap.style.display = filteredTrips.length > visibleCount ? 'block' : 'none';
}

/* ===========================
   CARD HTML
=========================== */
function cardHTML(trip) {
  const isFav = favorites.includes(trip.id);
  return `
    <div class="travel-card" id="card-${trip.id}">
      <div class="card-thumb">
        <img
          src="${trip.image}"
          alt="${trip.nama}"
          loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        />
        <div class="card-thumb-fallback" style="display:none">${trip.icon}</div>
        ${trip.featured ? `<div class="badge-featured">⭐ Featured</div>` : ''}
        <button class="card-fav ${isFav ? 'active' : ''}" onclick="toggleFav(event, ${trip.id})">${isFav ? '❤️' : '🤍'}</button>
        <div class="card-price-badge">${trip.hargaText}</div>
      </div>
      <div class="card-body">
        <div class="card-category">${categoryLabel(trip.kategori)}</div>
        <div class="card-title">${trip.nama}</div>
        <button class="see-more-btn" onclick="toggleCardMeta(event, ${trip.id})">
          Lihat Detail
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="card-meta" id="meta-${trip.id}">
          <div class="meta-item"><strong>Durasi</strong>${trip.durasi} Hari</div>
          <div class="meta-item"><strong>Jadwal</strong>${trip.jadwal.slice(0, 4).join(', ')}${trip.jadwal.length > 4 ? '...' : ''}</div>
          <div class="meta-item"><strong>Rute</strong>${trip.rute.join(' → ')}</div>
          <div class="card-facilities">
            ${trip.fasilitas.map(f => `<span class="facility-tag">${f}</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button class="btn-view-details" onclick="openModal(${trip.id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          View Details
        </button>
      </div>
    </div>
  `;
}

function categoryLabel(kat) {
  const map = { jakarta: 'Jakarta & Jabodetabek', bandung: 'Bandung', semarang: 'Semarang & Jateng', yogyakarta: 'Yogyakarta & Solo', lain: 'Lainnya' };
  return map[kat] || kat;
}

/* ===========================
   TOGGLE CARD META
=========================== */
function toggleCardMeta(e, id) {
  e.stopPropagation();
  const meta = document.getElementById('meta-' + id);
  const btn = e.currentTarget;
  if (meta.classList.contains('open')) {
    meta.classList.remove('open');
    btn.innerHTML = 'Lihat Detail <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>';
  } else {
    meta.classList.add('open');
    btn.innerHTML = 'Sembunyikan <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>';
  }
}

/* ===========================
   FAVORITES
=========================== */
function toggleFav(e, id) {
  e.stopPropagation();
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('rt_favorites', JSON.stringify(favorites));
  const btn = e.currentTarget;
  btn.classList.toggle('active');
  btn.textContent = favorites.includes(id) ? '❤️' : '🤍';
}

/* ===========================
   LOAD MORE
=========================== */
function loadMore() {
  visibleCount += 6;
  renderCards();
}

/* ===========================
   ACTIVE FILTERS
=========================== */
function renderActiveFilters() {
  const wrap = document.getElementById('activeFilters');
  const tags = [];

  const query = document.getElementById('searchInput').value.trim();
  if (query) tags.push({ label: `"${query}"`, clear: () => { document.getElementById('searchInput').value = ''; applyFilters(); } });

  document.querySelectorAll('#destinationFilter input:checked').forEach(el => {
    tags.push({ label: categoryLabel(el.value), clear: () => { el.checked = false; applyFilters(); } });
  });
  document.querySelectorAll('.dur-filter:checked').forEach(el => {
    tags.push({ label: el.value + ' Hari', clear: () => { el.checked = false; applyFilters(); } });
  });
  document.querySelectorAll('.fas-filter:checked').forEach(el => {
    const map = { door: 'Door to Door', charger: 'Charger USB', wifi: 'WiFi' };
    tags.push({ label: map[el.value], clear: () => { el.checked = false; applyFilters(); } });
  });
  if (document.getElementById('featuredOnly').checked) {
    tags.push({ label: 'Featured Only', clear: () => { document.getElementById('featuredOnly').checked = false; applyFilters(); } });
  }

  if (tags.length === 0) {
    wrap.style.display = 'none';
    return;
  }
  wrap.style.display = 'flex';
  wrap.innerHTML = tags.map((t, i) =>
    `<span class="filter-tag">${t.label} <button onclick="clearTag(${i})">×</button></span>`
  ).join('');

  // Store clear fns
  wrap._clearFns = tags.map(t => t.clear);
}

function clearTag(idx) {
  const wrap = document.getElementById('activeFilters');
  wrap._clearFns[idx]();
}

/* ===========================
   RESET FILTERS
=========================== */
function resetAllFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('heroSearch').value = '';
  document.getElementById('searchClear').style.display = 'none';
  document.querySelectorAll('.filter-checkbox input').forEach(el => el.checked = false);
  document.getElementById('rangeMinPrice').value = 0;
  document.getElementById('rangeMaxPrice').value = 500000;
  document.getElementById('sortSelect').value = 'newest';
  updatePriceRange();
  applyFilters();
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('filterReset');
  if (btn) btn.addEventListener('click', resetAllFilters);
});

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('heroSearch').value = '';
  document.getElementById('searchClear').style.display = 'none';
  applyFilters();
}

/* ===========================
   VIEW TOGGLE
=========================== */
function setView(view) {
  currentView = view;
  const grid = document.getElementById('cardsGrid');
  if (view === 'list') {
    grid.classList.add('list-view');
    document.getElementById('listViewBtn').classList.add('active');
    document.getElementById('gridViewBtn').classList.remove('active');
  } else {
    grid.classList.remove('list-view');
    document.getElementById('gridViewBtn').classList.add('active');
    document.getElementById('listViewBtn').classList.remove('active');
  }
}

/* ===========================
   FILTER SECTION TOGGLE
=========================== */
function toggleFilterSection(header) {
  header.parentElement.classList.toggle('collapsed');
}

function toggleShowMore(bodyId, btnId) {
  const body = document.getElementById(bodyId);
  const btn = document.getElementById(btnId);
  if (body.style.display === 'none') {
    body.style.display = 'block';
    btn.textContent = '- Show Less';
  } else {
    body.style.display = 'none';
    btn.textContent = '+ Show More';
  }
}

/* ===========================
   SIDEBAR MOBILE
=========================== */
function openSidebar() {
  document.getElementById('filterSidebar').classList.add('mobile-open');
  document.getElementById('sidebarOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  document.getElementById('filterSidebar').classList.remove('mobile-open');
  document.getElementById('sidebarOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* ===========================
   RECENTLY VIEWED
=========================== */
function addToRecentlyViewed(id) {
  recentlyViewed = recentlyViewed.filter(i => i !== id);
  recentlyViewed.unshift(id);
  if (recentlyViewed.length > 5) recentlyViewed = recentlyViewed.slice(0, 5);
  localStorage.setItem('rt_recent', JSON.stringify(recentlyViewed));
  renderRecentlyViewed();
}

function renderRecentlyViewed() {
  const wrap = document.getElementById('recentlyViewed');
  const list = document.getElementById('rvList');
  if (recentlyViewed.length === 0) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'block';
  list.innerHTML = recentlyViewed.map(id => {
    const trip = trips.find(t => t.id === id);
    if (!trip) return '';
    return `<div class="rv-item" onclick="openModal(${id})">${trip.icon} ${trip.nama}</div>`;
  }).join('');
}

function clearRecentlyViewed() {
  recentlyViewed = [];
  localStorage.removeItem('rt_recent');
  renderRecentlyViewed();
}

/* ===========================
   MODAL
=========================== */
function openModal(id) {
  const trip = trips.find(t => t.id === id);
  if (!trip) return;

  addToRecentlyViewed(id);

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="modal-hero">
      <img src="${trip.image}" alt="${trip.nama}" onerror="this.style.display='none'" />
      <span style="z-index:1">${trip.icon}</span>
      ${trip.featured ? '<div class="badge-featured" style="position:absolute;top:16px;left:16px">⭐ Featured</div>' : ''}
    </div>
    <div class="modal-body">
      <div class="modal-title">${trip.nama}</div>
      <div class="modal-price">${trip.hargaText} <span style="font-size:15px;color:var(--text-muted);font-weight:400">/ orang</span></div>

      <div class="modal-section">
        <div class="modal-section-title">🗺️ Rute Perjalanan</div>
        <div class="modal-route">
          ${trip.rute.map((r, i) => `
            <span class="route-stop">${r}</span>
            ${i < trip.rute.length - 1 ? '<span class="route-arrow">→</span>' : ''}
          `).join('')}
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">🕐 Jadwal Keberangkatan</div>
        <div class="modal-jadwal">
          ${trip.jadwal.map(j => `<span class="jadwal-chip">${j}</span>`).join('')}
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">⚙️ Fasilitas</div>
        <div class="modal-facilities">
          ${trip.fasilitas.map(f => `<div class="modal-fac">✓ ${f}</div>`).join('')}
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">ℹ️ Informasi</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div class="modal-fac">📅 Durasi: ${trip.durasi} Hari</div>
          <div class="modal-fac">👥 Min. 1 Orang</div>
        </div>
      </div>

      <div class="modal-actions">
        <button class="modal-btn primary" onclick="window.location.href='tel:08822585093'">
          📞 Telepon Kami
        </button>
        <a class="modal-btn wa" href="https://wa.me/6285724615368?text=Halo%20Rayyan%20Trans%2C%20saya%20ingin%20booking%20${encodeURIComponent(trip.nama)}%20seharga%20${encodeURIComponent(trip.hargaText)}" target="_blank">
          💬 Booking WhatsApp
        </a>
      </div>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay') && !e.target.classList.contains('modal-close')) {
    if (!document.getElementById('modalOverlay').contains(e.target)) return;
    if (document.getElementById('modalBox').contains(e.target) && !e.target.classList.contains('modal-close')) return;
  }
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeSidebar();
  }
});

/* ===========================
   CHATBOT
=========================== */
let chatOpen = false;

function toggleChatbot() {
  chatOpen = !chatOpen;
  const box = document.getElementById('chatbotBox');
  if (chatOpen) {
    box.classList.add('open');
    box.style.display = 'flex';
    const dot = document.querySelector('.fab-dot');
    if (dot) dot.style.display = 'none';
  } else {
    box.classList.remove('open');
    setTimeout(() => { if (!chatOpen) box.style.display = 'none'; }, 300);
  }
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  appendChat('user', msg);
  input.value = '';
  setTimeout(() => botReply(msg.toLowerCase()), 700);
}

function appendChat(role, text) {
  const msgs = document.getElementById('chatbotMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg ' + role;
  div.innerHTML = `<div class="chat-bubble">${text}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function botReply(msg) {
  let reply = '';

  if (msg.includes('harga') || msg.includes('price') || msg.includes('tarif')) {
    if (msg.includes('jakarta')) reply = '🏙️ <strong>Harga Jakarta:</strong><br>Jakarta Rp 150.000 | Bekasi Rp 160.000 | Depok Rp 145.000 | Tangerang Rp 170.000';
    else if (msg.includes('bandung')) reply = '🌆 <strong>Harga Bandung:</strong><br>Cianjur → Bandung Rp 90.000';
    else if (msg.includes('semarang')) reply = '🌊 <strong>Harga Semarang:</strong><br>Cianjur → Semarang Rp 350.000 | Surabaya Rp 420.000';
    else if (msg.includes('yogya') || msg.includes('jogja')) reply = '🏯 <strong>Harga Yogyakarta:</strong><br>Cianjur → Yogyakarta Rp 280.000 | Solo Rp 250.000';
    else reply = '💰 <strong>Harga Rute Utama:</strong><br>Jakarta Rp 150.000 | Bandung Rp 90.000 | Bogor Rp 75.000 | Semarang Rp 350.000 | Yogyakarta Rp 280.000.<br><br>Tanya harga spesifik, contoh: <em>harga jakarta</em>';

  } else if (msg.includes('jadwal') || msg.includes('jam')) {
    if (msg.includes('jakarta')) reply = '🕐 <strong>Jadwal Jakarta:</strong><br>04:00 | 06:00 | 08:00 | 10:00 | 13:00 | 16:00 | 19:00';
    else if (msg.includes('bandung')) reply = '🕐 <strong>Jadwal Bandung:</strong><br>05:00 | 07:00 | 09:00 | 11:00 | 14:00 | 17:00 | 20:00';
    else reply = '🕐 Kami melayani berbagai jam keberangkatan. Ketik nama kota + jadwal, contoh: <em>jadwal jakarta</em>';

  } else if (msg.includes('rute') || msg.includes('tujuan') || msg.includes('kota')) {
    reply = '🗺️ <strong>Rute yang tersedia:</strong><br>Jakarta, Bandung, Bekasi, Depok, Bogor, Tangerang, Sukabumi, Semarang, Yogyakarta, Solo, Surabaya, dan Bandara CGK';

  } else if (msg.includes('booking') || msg.includes('pesan') || msg.includes('order')) {
    reply = '📱 Kami redirect ke WhatsApp untuk booking!';
    setTimeout(() => {
      window.open('https://wa.me/6285724615368?text=Halo%20Rayyan%20Trans%2C%20saya%20ingin%20booking%20travel', '_blank');
    }, 1000);

  } else if (msg.includes('fasilitas') || msg.includes('fitur') || msg.includes('layanan')) {
    reply = '⚙️ <strong>Fasilitas Kami:</strong><br>✓ AC Dingin<br>✓ Door to Door<br>✓ Bagasi Gratis<br>✓ Charger USB<br>✓ WiFi (rute tertentu)<br>✓ Sopir Berpengalaman';

  } else if (msg.includes('kontak') || msg.includes('hubungi') || msg.includes('telepon') || msg.includes('wa')) {
    reply = '📞 <strong>Kontak Kami:</strong><br>WhatsApp: <a href="https://wa.me/6285724615368" target="_blank" style="color:var(--primary)">0882-2585-093</a><br>Aktif 24 jam!';

  } else if (msg.includes('halo') || msg.includes('hai') || msg.includes('hello') || msg.includes('hi')) {
    reply = '👋 Halo! Selamat datang di <strong>Rayyan Trans</strong>! Saya bisa bantu info harga, jadwal, rute, atau booking. Ketik salah satunya!';

  } else if (msg.includes('bandara') || msg.includes('airport') || msg.includes('cgk') || msg.includes('soeta')) {
    reply = '✈️ <strong>Travel Bandara (CGK):</strong><br>Harga: Rp 200.000/orang<br>Jadwal: 02:00 – 20:00 (setiap 2 jam)<br>Langsung ke Terminal!';

  } else {
    reply = '🤔 Maaf, saya belum mengerti. Coba ketik:<br>• <em>harga jakarta</em><br>• <em>jadwal bandung</em><br>• <em>daftar rute</em><br>• <em>booking</em>';
  }

  appendChat('bot', reply);
}