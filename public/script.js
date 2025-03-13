(function () {
  // Check if Next.js Web Component is already loaded
  if (window.SharedHeaderLoaded) return;
  window.SharedHeaderLoaded = true;

  // Dynamically load React and ReactDOM (only if needed)
  if (!window.React) {
    const reactScript = document.createElement("script");
    reactScript.src = "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js";
    document.head.appendChild(reactScript);
  }

  if (!window.ReactDOM) {
    const reactDOMScript = document.createElement("script");
    reactDOMScript.src = "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js";
    document.head.appendChild(reactDOMScript);
  }

  // Dynamically load the Next.js Web Component
  const headerScript = document.createElement("script");
  headerScript.src = "https://typesense-searchbar.vercel.app/header-component.js";
  document.head.appendChild(headerScript);

  // Wait for the script to load, then replace <div id="shared-header">
  headerScript.onload = function () {
    const headerElement = document.getElementById("shared-header");
    if (headerElement) {
      const headerComponent = document.createElement("shared-header");
      headerElement.replaceWith(headerComponent);
    }
  };
})();
