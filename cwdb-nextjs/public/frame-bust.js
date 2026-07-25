(function () {
  if (window.top === window.self) return;
  try {
    window.top.location = window.self.location;
  } catch (e) {
    try {
      window.top.location.href = window.self.location.href;
    } catch (e2) {
      /* framed in a cross-origin sandbox; best-effort only */
    }
  }
})();
