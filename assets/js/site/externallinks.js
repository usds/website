window.addEventListener('DOMContentLoaded', () => {
  try {
    const origin = (new URL(document.location.href))?.origin ?? "";
    // query selector is faster and removes any links that are obviously on our site.
    // Next we don't want mailto:, so we filter
    const links = [...document.querySelectorAll(`a:not([href*='${origin}'])`)].filter(a => a.href.startsWith("https://"));
    for (const link of links) {
      try {
        if (!(link instanceof HTMLElement)) {
          continue;
        }
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
        link.classList.add("usa-link--external");
      } catch (err) {
        console.error(err);
      }
    }
  } catch (err) {
    console.error(err);
  }
});

