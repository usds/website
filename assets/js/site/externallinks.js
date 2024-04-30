window.addEventListener('DOMContentLoaded', () => {
  try {
    const origin = (new URL(document.location.href))?.origin ?? "";
    // query selector is faster and removes any links that are obviously on our site.
    // Next we don't want mailto:, so we filter
    const links = [...document.querySelectorAll(`a:not([href*='${origin}'])`)].filter(a => a.href.startsWith("https://"));
    for (const link of links) {
      try {
        // could be HTMLButtonElement or HTMLLinkElement or HTMLAnchorElement
        if (!(link instanceof HTMLButtonElement || link instanceof HTMLAnchorElement || link instanceof HTMLLinkElement)) {
          continue;
        }
        // for staging/dev instance, we don't want treat fully qualified urls to usds.gov as external
        if (link.href.startsWith("https://www.usds.gov") || link.href.startsWith("https://usds.gov")) {
          continue;
        }
        // these are best practices for privacy/security
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");

        // do not add icon to these exceptions (social buttons)
        if (link.classList.contains("site-c-social-buttons__link")) {
          continue;
        }

        link.classList.add("usa-link--external");
      } catch (err) {
        console.error(err);
      }
    }
  } catch (err) {
    console.error(err);
  }
});

