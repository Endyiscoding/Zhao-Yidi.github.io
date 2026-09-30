(function () {
  var videos = document.querySelectorAll('[data-preview-video]');
  if (!videos.length || !('IntersectionObserver' in window)) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var video = entry.target;
      if (!entry.isIntersecting) {
        video.pause();
        return;
      }

      var source = video.querySelector('source[data-src]');
      if (source) {
        source.src = source.dataset.src;
        source.removeAttribute('data-src');
        video.load();
      }

      var play = video.play();
      if (play && typeof play.catch === 'function') play.catch(function () {});
    });
  }, { threshold: 0.25 });

  videos.forEach(function (video) { observer.observe(video); });
}());
