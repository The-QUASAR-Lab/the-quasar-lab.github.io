(async () => {
  // Add accessible result selection to the theme's existing ninja-keys component.
  await customElements.whenDefined("ninja-keys");
  const search = document.querySelector("ninja-keys");
  await search.updateComplete;
  const root = search.shadowRoot;
  const header = root.querySelector("ninja-header");
  await header.updateComplete;
  const input = header.shadowRoot.querySelector("input");
  const results = root.querySelector(".actions-list");
  const dialog = root.querySelector(".modal-content");

  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-label", "Site search");
  input.setAttribute("aria-label", "Search site");
  results.setAttribute("role", "listbox");
  results.setAttribute("aria-label", "Search results");
  results.tabIndex = 0;

  // Keep IDs and selection in the same shadow root as the focused listbox.
  async function updateResults() {
    const options = [...root.querySelectorAll("ninja-action")];
    await Promise.all(options.map((option) => option.updateComplete));
    results.removeAttribute("aria-activedescendant");
    options.forEach((option, index) => {
      option.id = `search-result-${index}`;
      option.setAttribute("role", "option");
      option.setAttribute("aria-label", option.shadowRoot.querySelector(".ninja-title").textContent.trim());
      option.setAttribute("aria-selected", String(option.selected));
      if (option.selected) results.setAttribute("aria-activedescendant", option.id);
    });
  }

  // Lit calls updated after filtering, keyboard selection, and mouse selection.
  const originalUpdated = search.updated;
  search.updated = function (changes) {
    originalUpdated.call(this, changes);
    updateResults();
  };
  await updateResults();

  root.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      event.stopPropagation();
      (root.activeElement === header ? results : input).focus();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      results.focus();
    }
  });

  const originalOpen = search.open;
  const originalClose = search.close;
  let trigger;
  search.open = function (...args) {
    trigger = document.activeElement;
    return originalOpen.apply(this, args);
  };
  search.close = function () {
    originalClose.call(this);
    trigger?.focus();
  };
})();
