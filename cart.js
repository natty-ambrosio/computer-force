/**
 * Computer Force - cart.js
 * Product database and shopping cart management
 */

/* ===================== PRODUCT DATABASE ===================== */
const CF_PRODUCTS = [
  // Audio
  { id: 'sony-wh1000xm5', name: 'Sony WH-1000XM5', category: 'audio', price: 449.00,
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    description: 'Industry-leading noise cancelling headphones with 30-hour battery life. Features multipoint connection to two devices simultaneously and exceptional call quality with precise voice pickup.' },
  { id: 'bose-qc45', name: 'Bose QuietComfort 45', category: 'audio', price: 379.00,
    img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&q=80',
    description: 'Balanced audio performance with world-class noise cancelling. Comfortable around-ear fit for all-day wear with 24-hour battery life and built-in voice assistant.' },
  { id: 'jabra-evolve2-75', name: 'Jabra Evolve2 75', category: 'audio', price: 499.00,
    img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80',
    description: 'Professional wireless headset designed for concentration. Advanced 8-microphone technology, Hybrid ANC, and up to 36 hours of battery life.' },

  // Computers
  { id: 'dell-optiplex-3000', name: 'Dell OptiPlex 3000', category: 'computers', price: 899.00,
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    description: 'Compact and reliable desktop PC for business. Intel Core i5, 16GB RAM, 512GB SSD. Designed for efficiency and easy manageability in any workspace.' },
  { id: 'hp-prodesk-400', name: 'HP ProDesk 400 G9', category: 'computers', price: 1049.00,
    img: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=600&q=80',
    description: 'Business-ready desktop with Intel Core i7, 16GB RAM, 1TB SSD. Energy Star certified with tool-free chassis for easy upgrades.' },
  { id: 'lenovo-thinkcentre-m90s', name: 'Lenovo ThinkCentre M90s', category: 'computers', price: 1199.00,
    img: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&q=80',
    description: 'Small form factor PC with Intel Core i7, 32GB RAM, 512GB SSD. Designed for demanding workloads with enterprise security features.' },

  // Graphics Cards
  { id: 'nvidia-rtx-4070', name: 'NVIDIA GeForce RTX 4070', category: 'graphics-cards', price: 699.00,
    img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80',
    description: 'The RTX 4070 delivers excellent 1440p gaming performance. 12GB GDDR6X memory, DLSS 3, and hardware-accelerated ray tracing for stunning visuals.' },
  { id: 'amd-rx-7900xtx', name: 'AMD Radeon RX 7900 XTX', category: 'graphics-cards', price: 1299.00,
    img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80',
    description: "AMD's flagship graphics card with 24GB GDDR6 memory. Exceptional 4K gaming performance and advanced ray tracing capabilities." },
  { id: 'nvidia-rtx-4090', name: 'NVIDIA GeForce RTX 4090', category: 'graphics-cards', price: 2599.00,
    img: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&q=80',
    description: 'The ultimate graphics card with 24GB GDDR6X memory. Unmatched 4K and 8K performance with AI acceleration for content creators and gamers.' },

  // Keyboard & Mice
  { id: 'logitech-mx-keys', name: 'Logitech MX Keys', category: 'keyboard-mice', price: 199.00,
    img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
    description: 'Advanced wireless keyboard designed for creators. Backlit spherically-dished keys, smart illumination, and seamless multi-device connectivity via Bluetooth.' },
  { id: 'microsoft-ergonomic', name: 'Microsoft Ergonomic Keyboard', category: 'keyboard-mice', price: 149.00,
    img: 'https://images.unsplash.com/photo-1601445638532-645a82be32e9?w=600&q=80',
    description: 'Ergonomically designed with a split key layout and cushioned palm rest. Reduces wrist strain during long typing sessions with natural typing angle.' },
  { id: 'corsair-k100', name: 'Corsair K100 RGB', category: 'keyboard-mice', price: 299.00,
    img: 'https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=600&q=80',
    description: 'Ultra-high performance gaming keyboard with optical-mechanical switches rated for 150 million keypresses. Per-key RGB lighting and full iCUE software integration.' },

  // Laptops
  { id: 'macbook-air-m2', name: 'MacBook Air M2', category: 'laptops', price: 1899.00,
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80',
    description: 'Supercharged by the next-generation M2 chip, the redesigned MacBook Air features a 13.6-inch Liquid Retina display, 8GB unified memory, and up to 18 hours of battery life.' },
  { id: 'dell-xps-15', name: 'Dell XPS 15', category: 'laptops', price: 2099.00,
    img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
    description: '15.6-inch OLED display, Intel Core i9, 32GB RAM, 1TB SSD, NVIDIA GeForce RTX 4060. A powerhouse laptop for creative professionals and developers.' },
  { id: 'hp-spectre-x360', name: 'HP Spectre x360', category: 'laptops', price: 1749.00,
    img: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=600&q=80',
    description: 'Versatile 2-in-1 convertible with Intel Core i7, 16GB RAM, 512GB SSD. OLED touch display with 360° hinge and HP Sure View privacy screen.' },

  // Monitors
  { id: 'samsung-27-4k', name: 'Samsung 27" 4K Monitor', category: 'monitors', price: 549.00,
    img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80',
    description: 'Ultra HD 4K IPS display with 99% sRGB colour coverage. Perfect for photo editing and graphic design with USB-C connectivity and height-adjustable stand.' },
  { id: 'lg-ultrawide-34', name: 'LG UltraWide 34"', category: 'monitors', price: 749.00,
    img: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=600&q=80',
    description: '34-inch QHD ultrawide curved monitor. 3440×1440 resolution, 100Hz refresh rate, and 5ms response time for an immersive productivity and gaming experience.' },
  { id: 'asus-proart-32', name: 'ASUS ProArt 32" 4K', category: 'monitors', price: 899.00,
    img: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=600&q=80',
    description: 'Professional 32-inch 4K display with 99.5% Adobe RGB and 98% DCI-P3 coverage. Hardware calibration and ASUS ProArt Calibration technology for absolute colour accuracy.' },

  // Networking
  { id: 'netgear-nighthawk-ax12', name: 'Netgear Nighthawk AX12', category: 'networking', price: 499.00,
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    description: 'WiFi 6 router with 12 streams and up to 10.8 Gbps. Ideal for 4K/8K streaming, online gaming, and large smart home deployments.' },
  { id: 'tp-link-ax6000', name: 'TP-Link Archer AX6000', category: 'networking', price: 349.00,
    img: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&q=80',
    description: 'Next-gen WiFi 6 router with 8 antennas and OFDMA technology. Optimised for large homes with heavy multi-device usage and MU-MIMO support.' },
  { id: 'cisco-rv340', name: 'Cisco RV340 Dual WAN Router', category: 'networking', price: 279.00,
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
    description: 'Business-grade router with dual WAN ports, integrated firewall, VPN, and VLAN support. Reliable and secure networking for small and medium businesses.' },

  // Peripherals
  { id: 'logitech-mx-master-3', name: 'Logitech MX Master 3', category: 'peripherals', price: 149.00,
    img: 'https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?w=600&q=80',
    description: 'Advanced wireless mouse with ultra-fast MagSpeed electromagnetic scrolling. Ergonomic design with 7 customisable buttons and multi-device connectivity.' },
  { id: 'wacom-intuos-pro', name: 'Wacom Intuos Pro Medium', category: 'peripherals', price: 399.00,
    img: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=600&q=80',
    description: 'Professional pen tablet with 8192 levels of pressure sensitivity and tilt recognition. Ideal for digital illustration, photo editing, and graphic design.' },
  { id: 'elgato-stream-deck', name: 'Elgato Stream Deck MK.2', category: 'peripherals', price: 199.00,
    img: 'https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?w=600&q=80',
    description: '15 customisable LCD keys to control your content creation workflow. One-touch streaming, recording, scene switching, and app launching for creators.' },

  // Printing & Scanning
  { id: 'hp-laserjet-pro', name: 'HP LaserJet Pro M404dn', category: 'printing-scanning', price: 299.00,
    img: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80',
    description: 'Fast, reliable mono laser printer. Up to 40 ppm, automatic two-sided printing, and built-in Ethernet for shared network printing in small offices.' },
  { id: 'canon-pixma-ts9120', name: 'Canon PIXMA TS9120', category: 'printing-scanning', price: 199.00,
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    description: 'High-quality photo inkjet printer with 6 individual ink tanks. Wireless printing, touch screen display, and supports up to A3+ borderless photo printing.' },
  { id: 'epson-workforce-wf7820', name: 'Epson WorkForce WF-7820', category: 'printing-scanning', price: 249.00,
    img: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=600&q=80',
    description: 'A3+ capable business inkjet with auto-duplex printing, 250-sheet paper capacity, wireless connectivity, and ADF for effortless document scanning.' },

  // Software
  { id: 'microsoft-365', name: 'Microsoft 365 Business', category: 'software', price: 149.00,
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    description: 'Complete productivity suite including Word, Excel, PowerPoint, Outlook, and Teams. Includes 1TB OneDrive storage per user. Annual subscription.' },
  { id: 'adobe-creative-cloud', name: 'Adobe Creative Cloud', category: 'software', price: 599.00,
    img: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&q=80',
    description: 'Full suite of creative applications including Photoshop, Illustrator, Premiere Pro, After Effects, and more. Includes 100GB cloud storage and Adobe Fonts. Annual subscription.' },
  { id: 'norton-360-deluxe', name: 'Norton 360 Deluxe', category: 'software', price: 89.00,
    img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80',
    description: 'Comprehensive security for up to 5 devices. Includes antivirus, secure VPN, Dark Web Monitoring, password manager, and 50GB cloud backup.' },

  // Storage
  { id: 'samsung-870-evo-1tb', name: 'Samsung 870 EVO 1TB SSD', category: 'storage', price: 149.00,
    img: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80',
    description: 'Reliable SATA SSD with sequential read speeds up to 560 MB/s and write speeds up to 530 MB/s. Perfect for upgrading your desktop or laptop with significantly faster performance.' },
  { id: 'wd-my-passport-2tb', name: 'WD My Passport 2TB', category: 'storage', price: 119.00,
    img: 'https://images.unsplash.com/photo-1531492894-9d8b1c5ed72e?w=600&q=80',
    description: 'Portable hard drive with automatic backup software and USB 3.0 connectivity. Compatible with Windows and Mac, password protection and hardware encryption included.' },
  { id: 'seagate-barracuda-4tb', name: 'Seagate Barracuda 4TB', category: 'storage', price: 149.00,
    img: 'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=600&q=80',
    description: 'High-capacity internal hard drive for desktop PCs. 7200 RPM for fast performance, 256MB cache, and a 2-year limited warranty for peace of mind.' },

  // Tablets
  { id: 'ipad-pro-129', name: 'iPad Pro 12.9"', category: 'tablets', price: 1299.00,
    img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80',
    description: 'Powered by the Apple M2 chip with a stunning Liquid Retina XDR display. Supports Apple Pencil 2nd gen and Magic Keyboard. The ultimate iPad experience.' },
  { id: 'samsung-galaxy-tab-s8', name: 'Samsung Galaxy Tab S8+', category: 'tablets', price: 899.00,
    img: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=600&q=80',
    description: '12.4-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 1, 8GB RAM with S Pen included. Perfect for creativity, note-taking, and productivity on the go.' },
  { id: 'surface-pro-9', name: 'Microsoft Surface Pro 9', category: 'tablets', price: 1499.00,
    img: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&q=80',
    description: 'Intel Core i7 processor, 16GB RAM, 256GB SSD. Detachable keyboard transforms it into a full laptop. Windows 11 Pro with Surface Pen support.' }
];

/* Map category IDs to display names */
const CF_CATEGORY_NAMES = {
  'audio': 'Audio',
  'computers': 'Computers',
  'graphics-cards': 'Graphics Cards',
  'keyboard-mice': 'Keyboard & Mice',
  'laptops': 'Laptops',
  'monitors': 'Monitors',
  'networking': 'Networking',
  'peripherals': 'Peripherals',
  'printing-scanning': 'Printing & Scanning',
  'software': 'Software',
  'storage': 'Storage',
  'tablets': 'Tablets'
};

/* ===================== CART MANAGEMENT ===================== */
const CF_Cart = {
  _key: 'cf_cart',

  get: function () {
    return JSON.parse(localStorage.getItem(this._key) || '[]');
  },

  save: function (cart) {
    localStorage.setItem(this._key, JSON.stringify(cart));
  },

  add: function (productId, qty) {
    qty = parseInt(qty) || 1;
    var product = CF_PRODUCTS.find(function (p) { return p.id === productId; });
    if (!product) return;
    var cart = this.get();
    var existing = cart.find(function (item) { return item.id === productId; });
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty: qty });
    }
    this.save(cart);
    this.updateUI();
  },

  remove: function (productId) {
    var cart = this.get().filter(function (item) { return item.id !== productId; });
    this.save(cart);
    this.updateUI();
  },

  clear: function () {
    this.save([]);
    this.updateUI();
  },

  count: function () {
    return this.get().reduce(function (sum, item) { return sum + item.qty; }, 0);
  },

  total: function () {
    return this.get().reduce(function (sum, item) { return sum + item.price * item.qty; }, 0);
  },

  updateUI: function () {
    var cart = this.get();
    var countEl = document.getElementById('cart-count');
    var subtotalEl = document.getElementById('cart-subtotal');
    var itemsListEl = document.getElementById('cart-items-list');

    if (countEl) {
      var n = this.count();
      countEl.textContent = n + (n === 1 ? ' item' : ' items');
    }
    if (subtotalEl) {
      subtotalEl.textContent = '$' + this.total().toFixed(2);
    }
    if (itemsListEl) {
      if (cart.length === 0) {
        itemsListEl.innerHTML = '<p class="cart-empty-msg">No items yet.</p>';
      } else {
        itemsListEl.innerHTML = cart.map(function (item) {
          return '<div class="cart-mini-item">' +
            '<span class="cart-mini-name">' + item.name + '</span>' +
            '<span class="cart-mini-detail">&times;' + item.qty + ' &mdash; $' + (item.price * item.qty).toFixed(2) + '</span>' +
            '<button class="cart-mini-remove" onclick="CF_Cart.remove(\'' + item.id + '\')" title="Remove">&#10005;</button>' +
            '</div>';
        }).join('');
      }
    }
  }
};

/* Auto-update aside when page loads */
document.addEventListener('DOMContentLoaded', function () {
  CF_Cart.updateUI();
});
