import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // ✅ Correct import

class SharedHeader extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const container = document.createElement("div");
    shadowRoot.appendChild(container);

    const root = ReactDOM.createRoot(container);
    root.render(<Header />);
  }
}

customElements.define("shared-header", SharedHeader);
