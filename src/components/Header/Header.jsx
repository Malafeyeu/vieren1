const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="navigate">
          <ul className="navigate__list">
            {["watches", "design", "craft", "about", "stories"].map((item) => (
              <li key={item} className="list-item">
                <span className="list-item__link">{item}</span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="logo">
          <svg className="" width="24" height="38" viewBox="0 0 24 38">
            <g fill="#FFF" fill-rule="nonzero">
              <path d="M6.814 27.442a37.888 37.888 0 0 1 3.556 9.521l.95 1.053V5.304L6.568 0v26.985l.246.457zM4.984 24.552v-9.866L.232 9.504v11.561c1.554.266 3.193 1.419 4.752 3.487zM16.608 27.442a37.814 37.814 0 0 0-3.54 9.521l-.945 1.053-.011-32.712L16.864 0v26.985c-.063.15-.154.3-.256.457zM18.448 24.552v-9.866L23.2 9.504v11.561c-1.554.266-3.193 1.419-4.752 3.487z"></path>
            </g>
          </svg>
        </div>

        <nav className="navigate">
          <ul className="navigate__list">
            <li className="list-item">
              <span className="list-item__link">$usd</span>
            </li>
            <li className="list-item">
              <svg width="13" height="15" viewBox="0 0 13 15">
                <g fill="currentColor" fill-rule="evenodd">
                  <path
                    fill="currentColor"
                    d="M1.071 5.69c0-2.547 2.078-4.619 4.632-4.619 2.553 0 4.63 2.072 4.63 4.618 0 1.515-.738 2.857-1.87 3.7-.017.01-.037.014-.052.028-.009.007-.013.017-.02.025-.76.542-1.686.865-2.688.865-2.554 0-4.632-2.072-4.632-4.618m11.778 8.17L9.522 9.904c1.154-1.041 1.883-2.542 1.883-4.216C11.405 2.547 8.852 0 5.703 0 2.553 0 0 2.548 0 5.69c0 3.142 2.553 5.69 5.703 5.69 1.084 0 2.094-.309 2.958-.833l3.368 4.002c.107.126.258.191.41.191.122 0 .245-.042.345-.126.227-.19.256-.529.065-.755"
                  ></path>
                </g>
              </svg>
            </li>
            <li className="list-item">
              <svg width="12" height="15" viewBox="0 0 12 15">
                <g fill="currentColor" fill-rule="evenodd">
                  <path d="M10.87 13.726H1.071V4.633H2.46v.89c0 .211.021.418.056.619h1.073c-.05-.199-.084-.404-.084-.62v-.89h4.934v.89c0 .216-.034.421-.084.62h1.073c.034-.201.056-.408.056-.62v-.89h1.387v9.094zM5.97 1.07c1.348 0 2.443 1.114 2.464 2.49H3.508c.02-1.376 1.116-2.49 2.463-2.49zm3.51 2.49C9.46 1.594 7.895.001 5.97.001 4.048 0 2.482 1.593 2.462 3.56H.001v11.236h11.94V3.561h-2.46z"></path>
                </g>
              </svg>
            </li>
          </ul>
        </nav>

        <button className="navigate__burger hidden">
          <svg
            className="w-auto h-[15px] text-(--color-white)"
            width="33"
            height="25"
            viewBox="0 0 33 25"
          >
            <g fill="currentColor" fill-rule="evenodd">
              <path d="M0 11h33v3H0zM0 0h33v3H0zM0 22h33v3H0z"></path>
            </g>
          </svg>
        </button>
      </div>
      <aside className="siteMessage">
        <div className="siteMessage-container">
          <div className="viewport">
            <a href="#">Join the waitlist</a>
          </div>

          <button className="siteMessage__close">
            <svg width="24px" height="24px" viewBox="0 -960 960 960">
              <g fill="#ffffff" fill-rule="evenodd">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </g>
            </svg>
          </button>
        </div>
      </aside>
    </header>
  );
};

export default Header;
