(function () {
  const headerContainer = document.createElement('div');
  headerContainer.id = 'my-nextjs-header';
  headerContainer.style.position = 'fixed';
  headerContainer.style.top = '0';
  headerContainer.style.left = '0';
  headerContainer.style.width = '100%';
  headerContainer.style.zIndex = '9999';
  headerContainer.style.pointerEvents = 'none'; // Allow clicks to pass through initially

  // Load your Next.js app
  const appScript = document.createElement('script');
  appScript.src = 'https://typesense-searchbar.vercel.app/_next/static/chunks/embed.js'; // Update with actual path
  appScript.onload = () => {
    headerContainer.style.pointerEvents = 'auto'; // Enable interactions after loading
  };

  document.body.appendChild(headerContainer);
  document.body.appendChild(appScript);
})();