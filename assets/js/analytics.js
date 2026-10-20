/* AHI analytics: basic consent mode. No Google requests before acceptance. */
(() => {
  'use strict';
  if (window.ahiAnalytics) return;
  const ID = 'G-EF8ZF37K5H';
  const KEY = 'ahi-analytics-consent';
  const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
  const production = location.protocol === 'https:' &&
    ['agilehealthinformatics.com', 'www.agilehealthinformatics.com'].includes(location.hostname);
  const disableKey = 'ga-disable-' + ID;
  let loaded = false;
  let choice = null;
  let expiryTimer;
  let returnFocus;
  let panel;
  let closeButton;
  let status;
  window[disableKey] = true;

  function readChoice() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY));
      if (saved && saved.version === 1 && ['accepted', 'rejected'].includes(saved.value) &&
          Number.isFinite(saved.expires) && saved.expires > Date.now() &&
          saved.expires <= Date.now() + MAX_AGE) return saved;
    } catch (_) { /* Unavailable storage leaves analytics off until an explicit choice. */ }
    return null;
  }

  function clearCookies() {
    const names = document.cookie.split(';').map(c => c.trim().split('=')[0])
      .filter(name => name === '_ga' || name.startsWith('_ga_'));
    const domains = ['', location.hostname, '.' + location.hostname,
      'agilehealthinformatics.com', '.agilehealthinformatics.com'];
    const paths = new Set(['/']);
    const segments = location.pathname.split('/').filter(Boolean);
    for (let i = 1; i <= segments.length; i++) {
      const path = '/' + segments.slice(0, i).join('/');
      paths.add(path); paths.add(path + '/');
    }
    for (const name of names) for (const domain of domains) for (const path of paths) {
      document.cookie = name + '=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=' + path +
        (domain ? '; domain=' + domain : '') + '; SameSite=Lax';
    }
  }

  function start() {
    if (loaded || !production || choice?.value !== 'accepted') return;
    loaded = true;
    window[disableKey] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      analytics_storage: 'denied', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    window.gtag('config', ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: MAX_AGE / 1000,
      cookie_update: false,
      cookie_path: '/',
      cookie_flags: 'SameSite=Lax;Secure',
      // Do not include URL queries or fragments in the initial page event.
      page_location: location.origin + location.pathname,
      page_referrer: safeReferrer(),
      content_group: location.pathname.startsWith('/resources/')
        ? location.pathname.split('/')[2] || 'resources' : 'corporate'
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    document.head.appendChild(script);
  }

  function safeReferrer() {
    try { const url = new URL(document.referrer); return url.origin + url.pathname; }
    catch (_) { return ''; }
  }

  function scheduleExpiry() {
    clearTimeout(expiryTimer);
    if (!choice) return;
    // Browsers cap timeouts at about 24.8 days. Recheck at least once a day.
    expiryTimer = setTimeout(() => {
      if (choice.expires <= Date.now()) apply(null);
      else scheduleExpiry();
    }, Math.min(24 * 60 * 60 * 1000, Math.max(0, choice.expires - Date.now())));
  }

  function apply(next) {
    choice = next;
    if (choice?.value === 'accepted') start();
    else {
      window[disableKey] = true;
      clearCookies();
      if (loaded) {
        // Remove Google's running listeners by reloading with tracking disabled.
        // Do not send a denied-consent ping on withdrawal.
        location.reload();
        return;
      }
    }
    scheduleExpiry();
    render();
  }

  function choose(value) {
    const next = { version: 1, value, expires: Date.now() + MAX_AGE };
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch (_) { /* Current page only. */ }
    apply(next);
    panel.hidden = true;
    returnFocus?.focus();
  }

  function render() {
    if (!panel) return;
    closeButton.hidden = !choice;
    status.textContent = choice ? 'Current choice: analytics ' +
      (choice.value === 'accepted' ? 'accepted.' : 'rejected.') : 'Analytics is currently off.';
    if (!production) status.textContent += ' Tracking is disabled on this preview.';
    panel.hidden = Boolean(choice);
  }

  function openSettings() {
    returnFocus = document.activeElement;
    render();
    panel.hidden = false;
    panel.querySelector('h2').focus();
  }

  function init() {
    panel = document.createElement('section');
    panel.id = 'ahi-analytics-consent';
    panel.className = 'ahi-consent';
    panel.setAttribute('aria-labelledby', 'ahi-consent-title');
    panel.setAttribute('role', 'region');
    panel.innerHTML = '<h2 id="ahi-consent-title" tabindex="-1">Optional website analytics</h2>' +
      '<p>May we use Google Analytics cookies to understand which resources are used and improve this website? ' +
      'You can use every resource without accepting and change your choice through Privacy settings.</p>' +
      '<p><a href="/privacy.html">Read the privacy notice</a></p>' +
      '<p class="ahi-consent-status" aria-live="polite"></p>' +
      '<div class="ahi-consent-actions"><button type="button" data-ahi-choice="accepted">Accept analytics</button>' +
      '<button type="button" data-ahi-choice="rejected">Reject analytics</button>' +
      '<button type="button" data-ahi-close>Close settings</button></div>';
    document.body.appendChild(panel);
    status = panel.querySelector('.ahi-consent-status');
    closeButton = panel.querySelector('[data-ahi-close]');
    panel.querySelectorAll('[data-ahi-choice]').forEach(button => {
      button.addEventListener('click', () => choose(button.dataset.ahiChoice));
    });
    closeButton.addEventListener('click', () => { panel.hidden = true; returnFocus?.focus(); });
    panel.addEventListener('keydown', event => {
      if (event.key === 'Escape' && choice) { panel.hidden = true; returnFocus?.focus(); }
    });
    document.querySelectorAll('[data-ahi-privacy-settings]').forEach(link => {
      link.addEventListener('click', event => { event.preventDefault(); openSettings(); });
    });
    apply(readChoice());
    if (location.pathname === '/privacy.html' && location.hash === '#analytics-settings') openSettings();
    window.addEventListener('storage', event => {
      if (event.key === KEY || event.key === null) apply(readChoice());
    });
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && choice && choice.expires <= Date.now()) apply(null);
    });
  }

  window.ahiAnalytics = Object.freeze({ openSettings });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
