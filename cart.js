/**
 * cart.js — Computer Force shared cart logic
 * Uses sessionStorage so cart persists across page navigation
 */

// ── Helpers ──────────────────────────────────────────────
function getCart() {
  return JSON.parse(sessionStorage.getItem('cfCart') || '[]');
}

function saveCart(cart) {
  sessionStorage.setItem('cfCart', JSON.stringify(cart));
}

function addToCart(id, name, price, imgSrc) {
  var cart = getCart();
  var existing = cart.find(function(i){ return i.id === id; });
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: id, name: name, price: price, qty: 1, img: imgSrc });
  }
  saveCart(cart);
  renderAside();
  renderMobileBadge();
}

function removeFromCart(id) {
  var cart = getCart().filter(function(i){ return i.id !== id; });
  saveCart(cart);
  renderAside();
  renderMobileBadge();
  renderCheckoutPanel();
}

function cartTotal() {
  return getCart().reduce(function(sum, i){ return sum + i.price * i.qty; }, 0);
}

function cartCount() {
  return getCart().reduce(function(sum, i){ return sum + i.qty; }, 0);
}

// ── Render aside (desktop sidebar) ───────────────────────
function renderAside() {
  var tbody = document.getElementById('asideCartBody');
  if (!tbody) return;
  var cart = getCart();
  var html = '';
  if (cart.length === 0) {
    html = '<tr><td colspan="2" class="cart-empty-msg">Your cart is empty</td></tr>';
  } else {
    cart.forEach(function(item) {
      html += '<tr class="cart-item-row"><td>' + item.name +
        (item.qty > 1 ? ' x' + item.qty : '') + '</td><td>$' +
        (item.price * item.qty).toFixed(2) + '</td></tr>';
    });
    html += '<tr><td colspan="2" style="border-top:1px solid #ccc;padding-top:6px;">' +
      '<strong>Total: $' + cartTotal().toFixed(2) + '</strong></td></tr>';
  }
  tbody.innerHTML = html;
}

// ── Render mobile badge on bag button ────────────────────
function renderMobileBadge() {
  var badge = document.getElementById('cartBadge');
  if (!badge) return;
  var count = cartCount();
  if (count > 0) {
    badge.textContent = count > 9 ? '9+' : count;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

// ── Render checkout slide panel ───────────────────────────
function renderCheckoutPanel() {
  var body = document.getElementById('checkoutPanelBody');
  var success = document.getElementById('checkoutPanelSuccess');
  if (!body) return;
  var cart = getCart();
  if (cart.length === 0) {
    body.innerHTML = '<p class="checkout-panel-empty">Your cart is empty</p>';
    if (success) success.style.display = 'none';
    return;
  }
  var html = '<table class="checkout-panel-table"><thead><tr>' +
    '<th>Item</th><th>Qty</th><th>Price</th><th></th></tr></thead><tbody>';
  cart.forEach(function(item) {
    html += '<tr><td>' + item.name + '</td>' +
      '<td style="text-align:center">' + item.qty + '</td>' +
      '<td>$' + (item.price * item.qty).toFixed(2) + '</td>' +
      '<td><button class="cp-remove" onclick="removeFromCart(\'' + item.id +
      '\')" aria-label="Remove item">&#10005;</button></td></tr>';
  });
  html += '<tr class="cp-total-row"><td colspan="2"><strong>Total</strong></td>' +
    '<td colspan="2"><strong>$' + cartTotal().toFixed(2) + '</strong></td></tr>';
  html += '</tbody></table>';
  body.innerHTML = html;
  if (success) success.style.display = 'none';
}

function placeOrder() {
  saveCart([]);
  renderAside();
  renderMobileBadge();
  var body = document.getElementById('checkoutPanelBody');
  var success = document.getElementById('checkoutPanelSuccess');
  if (body) body.innerHTML = '';
  if (success) success.style.display = 'block';
}

// ── Checkout panel open/close ─────────────────────────────
function openCheckoutPanel() {
  renderCheckoutPanel();
  var panel = document.getElementById('checkoutPanel');
  if (panel) panel.classList.add('open');
  document.getElementById('panelOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutPanel() {
  var panel = document.getElementById('checkoutPanel');
  if (panel) panel.classList.remove('open');
  document.getElementById('panelOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ── Panel controls ─────────────────────────────────────────
function openNavPanel() {
  document.getElementById('navPanel').classList.add('open');
  document.getElementById('panelOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openBagPanel() {
  // On mobile, bag icon opens the checkout panel directly
  openCheckoutPanel();
}

function closeAllPanels() {
  ['navPanel','bagPanel','checkoutPanel'].forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.classList.remove('open');
  });
  var overlay = document.getElementById('panelOverlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ── Init on every page load ───────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  renderAside();
  renderMobileBadge();
  var overlay = document.getElementById('panelOverlay');
  if (overlay) overlay.addEventListener('click', closeAllPanels);
});
