(() => {
  "use strict";
  const STORAGE_KEY = "geschenkmeister_analytics_consent";
  const MEASUREMENT_ID = "G-KS58E7XWMR";
  let analyticsLoaded = false;

  function loadAnalytics() {
    if (analyticsLoaded) return;
    analyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(MEASUREMENT_ID);
    document.head.appendChild(script);
  }

  function getConsent() {
    try { return localStorage.getItem(STORAGE_KEY); }
    catch (error) { return null; }
  }

  function setConsent(value) {
    try { localStorage.setItem(STORAGE_KEY, value); }
    catch (error) {}
  }

  function removeBanner() {
    const banner = document.getElementById("cookie-consent");
    if (banner) banner.remove();
  }

  function acceptAnalytics() {
    setConsent("accepted");
    removeBanner();
    loadAnalytics();
  }

  function rejectAnalytics() {
    setConsent("rejected");
    removeBanner();
  }

  function resetConsent() {
    try { localStorage.removeItem(STORAGE_KEY); }
    catch (error) {}
    window.location.reload();
  }

  function showBanner() {
    if (document.getElementById("cookie-consent")) return;
    const banner = document.createElement("section");
    banner.id = "cookie-consent";
    banner.className = "cookie-consent";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-modal", "true");
    banner.setAttribute("aria-labelledby", "cookie-consent-title");
    banner.innerHTML = `
      <div class="cookie-consent__inner">
        <div class="cookie-consent__text">
          <h2 id="cookie-consent-title">Datenschutz-Einstellungen</h2>
          <p>
            Wir verwenden Google Analytics nur mit deiner Zustimmung, um zu verstehen,
            welche Inhalte genutzt werden. Ohne Zustimmung wird Google Analytics nicht geladen.
            Details findest du im <a href="index.html#datenschutz">Datenschutz</a>.
          </p>
        </div>
        <div class="cookie-consent__actions">
          <button type="button" class="cookie-button cookie-button--secondary" id="cookie-reject">Ablehnen</button>
          <button type="button" class="cookie-button cookie-button--primary" id="cookie-accept">Akzeptieren</button>
        </div>
      </div>`;
    document.body.appendChild(banner);
    document.getElementById("cookie-accept").addEventListener("click", acceptAnalytics);
    document.getElementById("cookie-reject").addEventListener("click", rejectAnalytics);
  }

  function init() {
    const consent = getConsent();
    if (consent === "accepted") loadAnalytics();
    else if (consent !== "rejected") showBanner();

    document.querySelectorAll("[data-cookie-settings]").forEach((el) => {
      el.addEventListener("click", (event) => {
        event.preventDefault();
        resetConsent();
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
