(function () {
  const iframeWidget = "iframeWidget";
  const doc = document.currentScript;

  if (!doc) return;

  const src = doc.getAttribute("src")!;
  const srcIframe = src.slice(0, src.lastIndexOf("/"));

  const iFrame = document.createElement("iframe");
  iFrame.id = iframeWidget;
  iFrame.style.width = "100%";
  iFrame.style.height = "220px";
  iFrame.style.border = "none";
  iFrame.src = srcIframe;

  document.body.appendChild(iFrame);
})();