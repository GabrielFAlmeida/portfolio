class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        /* Footer container */
          .footer-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.2rem;
            padding: 1rem 4rem;
            background-color: var(--secondary-blue);
          }
        .footer-container a,
        p {
          font-size: 0.8rem;
          font-weight: 600;
          line-height: 1rem;
          color: var(--terceary-blue);
        }
        .brand-logo {
          width: 2rem;
          margin-right: 0.4rem;
        }
      </style>
      <footer class="footer-container">
        <img
          class="brand-logo"
          src="./../../assets/icons/gabriel-franca-logo.png"
          alt="Logo - Gabriel França"
        />
        <p>&copy</p>
          <a href="https://www.linkedin.com/in/gabriel-frnca/" target="_blank">Gabriel França</a>
        <p>
          - 2025.
        </p>
      </footer>`;
  }
}

customElements.define("footer-component", Footer);
