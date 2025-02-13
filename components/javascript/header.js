class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        /* Nav container */
        .nav-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 4rem;
          background-color: var(--secondary-blue);
        }
        .nav-logo {
          width: 4rem;
          border-radius: 90px;
        }
        .nav-list {
          display: flex;
          flex-direction: row;
          list-style-type: none;
          gap: 0.5rem;
        }
        .nav-list-image {
          width: 2rem;
        }
      </style>
      <header class="header-container">
      <nav class="nav-container">
        <a href="./../../html/index.html" class="nav-link">
          <img src="./../../assets/icons/gabriel-franca-memoji.png" alt="Memoji - Gabriel França" class="nav-logo"/>
        </a>
        <ul class="nav-list">
          <li>
            <a href="https://www.linkedin.com/in/gabriel-frnca/" target="_blank">
              <img src="./../../assets/icons/linkedin.png" alt="Linkedin - Gabriel França" class="nav-list-image"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/GabrielFAlmeida" target="_blank">
              <img src="./../../assets/icons/github.png" alt="Github - Gabriel França" class="nav-list-image"/>
            </a>
          </li>
          <li>
            <a href="https://judge.beecrowd.com/pt/profile/1092625" target="_blank">
              <img src="./../../assets/icons/beecrowd.png" alt="Beecrowd - Gabriel França" class="nav-list-image"/>
            </a>
          </li>
      </nav>
    </header>`;
  }
}

customElements.define("header-component", Header);
