(function () {
  const headerContainer = document.createElement('div');
  headerContainer.id = 'my-nextjs-header';
  headerContainer.style.position = 'fixed';
  headerContainer.style.top = '0';
  headerContainer.style.left = '0';
  headerContainer.style.width = '100%';
  headerContainer.style.zIndex = '9999';
  headerContainer.style.pointerEvents = 'none'; // Allow clicks to pass through initially

  // Load your custom header script
  const appScript = document.createElement('script');
  appScript.src = 'https://typesense-searchbar.vercel.app/embed.js'; // Your actual Vercel URL
  appScript.onload = () => {
    headerContainer.style.pointerEvents = 'auto'; // Enable interactions after loading
  };

  // Append the header container to the body
  document.body.appendChild(headerContainer);
  document.body.appendChild(appScript);
})();