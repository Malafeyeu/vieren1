import "./Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <aside className="site-header__message bg-(--color-black)">
        <div className="site-header__message-container p-[10px_38px] flex flex-row items-center justify-center relative">
          <div className="site-header__viewport text-(--color-white) relative w-[375px] overflow-hidden cursor-grab">
            <div className="site-header__animate animate-slide-loop flex justify-center min-w-full">
              <div className="site-header__content-item min-w-full text-[14px] font-normal font-[Lato,sans-serif] leading-[24px] tracking-[1px] text-center">
                <a href="" className="site-header__link underline bg-transparent">Join the waitlist</a>
                &nbsp;to our new V Collection
              </div>
              <div className="site-header__content-item min-w-full text-[14px] font-normal font-[Lato,sans-serif] leading-[24px] tracking-[1px] text-center">
                NEW!
                <a href="" className="site-header__link underline bg-transparent">&nbsp;Shop Gold Waves</a>
              </div>
              <div className="site-header__content-item min-w-full text-[14px] font-normal font-[Lato,sans-serif] leading-[24px] tracking-[1px] text-center">
                Free shipping to US and Canada
              </div>
            </div>
          </div>
          <button className="site-header__message-close absolute bg-transparent right-[13px] top-[50%] translate-y-[-50%]">
            <svg width="24px" height="24px" viewBox="0 -960 960 960">
              <g fill="#ffffff" fillRule="evenodd">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </g>
            </svg>
          </button>
        </div>
      </aside>

      <div className="site-header__container h-[65px] min-h-[101px] md:min-h-[141px] m-[0_0_-101px] md:m-[0_0_-142px]">
        <div className="site-header__wrapper relative top-0 left-0 right-0 z-10">
          <div className="site-header__grid p-[20px_0] grid grid-cols-[1fr_minmax(343px,22fr)_1fr] lg:grid-cols-[1fr_28fr_1fr]">
            <div className="site-header__content col-[2/3] flex justify-between items-center min-h-[25px]">
              
              <nav className="site-header__nav hidden lg:block">
                <ul className="site-header__nav-list flex flex-row gap-10 text-(--color-white) list-none">
                  {["watches", "design", "craft", "about", "stories"].map((item) => (
                    <li key={item} className="site-header__nav-item">
                      <a href="" className="site-header__nav-link after:bottom-[-4px] after:h-[0.5px]">
                        <span className="site-header__nav-link-text leading-[1px]">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="site-header__logo text-(--color-white) absolute left-[50%] translate-x-[-50%] top-[13px]">
                <a href="#">
                  <svg className="site-header__logo-svg h-[50px] lg:h-[75px]" viewBox="0 0 262.57 148.81">
                    <g fill="currentColor">
                        <path d="M123.27,53.52a73.05,73.05,0,0,1,7,18.57l1.86,2,.06-63.79L122.8,0l0,52.63C122.92,52.92,123.1,53.21,123.27,53.52Z"></path>
                        <path d="M120.42,49.13V29.43L111,19.08V42.17C114.08,42.69,117.32,45,120.42,49.13Z"></path>
                        <path d="M143.3,53.52a73,73,0,0,0-7,18.57l-1.87,2-.06-63.79L143.78,0l.05,52.63C143.65,52.92,143.47,53.21,143.3,53.52Z"></path>
                        <path d="M146.15,49.13V29.43l9.43-10.35V42.17C152.5,42.69,149.25,45,146.15,49.13Z"></path>
                        <path d="M81.91,97.08h30.14v5H87.71V118.4h21.76v5H87.71v17.7H113v5H81.91Z"></path>
                        <path d="M177.25,97.08h30.13v5H183V118.4h21.77v5H183v17.7h25.31v5h-31.1Z"></path>
                        <path d="M57.52,97.08h5.8V146h-5.8Z"></path>
                        <polygon points="21.88 148.66 43.65 94.89 36.77 97.24 21.82 133.48 6.9 97.28 0 94.89 21.73 148.54 21.82 148.81 21.83 148.79 21.83 148.81 21.88 148.66"></polygon>
                        <polygon points="229.47 145.87 224.08 145.87 224.08 95.45 229.47 103.58 229.47 145.87"></polygon>
                        <polygon points="257.18 97.18 262.57 95.18 262.57 147.61 257.18 139.47 257.18 97.18"></polygon>
                        <polygon points="224.07 95.45 261.25 137.94 262.56 147.62 225.81 105.61 224.07 95.45"></polygon>
                        <path d="M151,125.16a14.61,14.61,0,0,0,6.76-5.28,13.85,13.85,0,0,0,2.45-8,13.56,13.56,0,0,0-4.61-10.69q-4.6-4.06-12.2-4.06h-14V146H135V126.55h0V101.91h7.6c3.78,0,6.66.85,8.66,2.55s3,4.15,3,7.37-1,5.72-3.05,7.37-5.08,2.48-9.12,2.48h-7l3.2,4.83h4.88c1.11,0,1.82,0,2.12-.06L158.2,146h6.89Z"></path>
                      </g>
                  </svg>
                </a>
              </div>

              <nav className="site-header__nav order-2">
                <ul className="site-header__nav-list flex flex-row gap-8 lg:gap-10 text-(--color-white) list-none items-center">
                  <li className="site-header__nav-item">
                    <button className="site-header__nav-btn flex items-center after:bottom-[-10px] after:h-[1px]">
                      <span className="site-header__nav-btn-text leading-[1.15px]">$usd</span>
                    </button>
                  </li>
                  <li className="site-header__nav-item hidden lg:block">
                    <svg className="site-header__nav-icon" width="13" height="15" viewBox="0 0 13 15">
                      <g fill="currentColor" fillRule="evenodd">
                          <path
                            fill="currentColor"
                            d="M1.071 5.69c0-2.547 2.078-4.619 4.632-4.619 2.553 0 4.63 2.072 4.63 4.618 0 1.515-.738 2.857-1.87 3.7-.017.01-.037.014-.052.028-.009.007-.013.017-.02.025-.76.542-1.686.865-2.688.865-2.554 0-4.632-2.072-4.632-4.618m11.778 8.17L9.522 9.904c1.154-1.041 1.883-2.542 1.883-4.216C11.405 2.547 8.852 0 5.703 0 2.553 0 0 2.548 0 5.69c0 3.142 2.553 5.69 5.703 5.69 1.084 0 2.094-.309 2.958-.833l3.368 4.002c.107.126.258.191.41.191.122 0 .245-.042.345-.126.227-.19.256-.529.065-.755"
                          ></path>
                        </g>
                    </svg>
                  </li>
                  <li className="site-header__nav-item">
                    <svg className="site-header__nav-icon" width="12" height="15" viewBox="0 0 12 15">
                      <g fill="currentColor" fillRule="evenodd">
                        <path d="M10.87 13.726H1.071V4.633H2.46v.89c0 .211.021.418.056.619h1.073c-.05-.199-.084-.404-.084-.62v-.89h4.934v.89c0 .216-.034.421-.084.62h1.073c.034-.201.056-.408.056-.62v-.89h1.387v9.094zM5.97 1.07c1.348 0 2.443 1.114 2.464 2.49H3.508c.02-1.376 1.116-2.49 2.463-2.49zm3.51 2.49C9.46 1.594 7.895.001 5.97.001 4.048 0 2.482 1.593 2.462 3.56H.001v11.236h11.94V3.561h-2.46z"></path>
                      </g>
                    </svg>
                  </li>
                </ul>
              </nav>

              <button className="site-header__burger lg:hidden order-1">
                <svg className="site-header__burger-icon w-auto h-[15px] text-(--color-white)" width="33" height="25" viewBox="0 0 33 25">
                  <g fill="currentColor" fillRule="evenodd">
                    <path d="M0 11h33v3H0zM0 0h33v3H0zM0 22h33v3H0z"></path>
                  </g>
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
