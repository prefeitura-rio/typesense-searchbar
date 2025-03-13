import React from "react";
import ReactDOM from "react-dom";
import Header from "./app/page"

class SharedHeader extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    const mountPoint = document.createElement("div");
    shadowRoot.appendChild(mountPoint);

    ReactDOM.render(<Header />, mountPoint);
  }
}

customElements.define("shared-header", SharedHeader);
