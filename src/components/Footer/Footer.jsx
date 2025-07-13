import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer bg-[#242424]">
      <div className="site-footer__container grid grid-cols-[1fr_minmax(343px,22fr)_1fr] lg:grid-cols-[1fr_28fr_1fr]">
        <div className="site-footer__wrapper col-[2/3] pt-10 pb-15 flex flex-col lg:flex-row justify-between">
          <div className="site-footer__content w-full flex flex-col lg:flex-row gap-[30px] xl:justify-between">
            <div className="site-footer__left flex flex-col lg:flex-row gap-10 lg:gap-20">
              <div className="site-footer__subscription email">
                <div className="email__content flex flex-col gap-[27px]">
                  <div className="email__text flex flex-col justify-center items-center lg:items-start text-(--color-white)">
                    <h3 className="email__title text-[20px] xl:text-[22px] font-normal font-[Lato,sans-serif] leading-[25px] xl:leading-[27px] tracking-[1px] mb-[2px] uppercase">
                      JOIN THE MOVEMENT
                    </h3>
                    <p className="email__description text-[14px] font-light font-[Lato,sans-serif] leading-[24px] xl:leading-[26px] tracking-[0.88px]">
                      Unlock early access to new Swiss masterpieces
                    </p>
                  </div>
                  <form action="#" className="email__form mb-2.5">
                    <div className="email__form-inner relative">
                      <input 
                        type="text" 
                        placeholder="Email*" 
                        className="email__input bg-(--color-white) h-[31px] z-1 border-1 border-[#bbbbbb] w-full px-[0.5em] text-[15px] font-light font-[Lato,sans-serif] 
                          leading-[30px] tracking-[0.5px] placeholder:text-[#3b3b3b] placeholder:font-light focus:outline-2 focus:outline-(--color-black) focus:outline-offset-[-3.5px] 
                          focus:rounded-[4px]"
                      />
                      <button 
                        type="submit" 
                        className="email__button h-[31px] absolute z-10 top-0 right-2.5 bg-none border-none text-(--color-white) flex items-center align-middle justify-center"
                      >
                        <svg className="email__button-icon text-(--color-black)" width="31" height="12" viewBox="0 0 31 12">
                          <g fill="currentColor" fillRule="evenodd" stroke="currentColor" strokeLinecap="square">
                            <path d="M24 1l5 5M24 11l5-5M0 6h28" />
                          </g>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <nav className="site-footer__nav hidden lg:block">
                <ul className="site-footer__nav-list flex gap-[30px]">
                  {[
                    {
                      title: "Shop",
                      items: ["Watches", "Collections", "Gifts", "Accessories"]
                    },
                    {
                      title: "Discover",
                      items: ["About", "Design", "Craftsmanship", "Stories"]
                    },
                    {
                      title: "Delivery",
                      items: ["Shipping", "Returns", "Servicing", "Packaging"]
                    },
                    {
                      title: "Support",
                      items: ["FAQ", "Size guide", "Engraving", "Contact"]
                    }
                  ].map((section) => (
                    <li className="site-footer__nav-column" key={section.title}>
                      <h5 className="site-footer__nav-title min-w-[98px] mb-2.5">{section.title}</h5>
                      <ul className="site-footer__nav-sublist">
                        {section.items.map((item) => (
                          <li className="site-footer__nav-item" key={item}>
                            <a href="#" className="site-footer__nav-link">
                              <span className="site-footer__nav-link-text">{item}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="site-footer__nav lg:hidden">
                <ul className="site-footer__nav-list flex flex-col">
                  {[
                    "Shop",
                    "Discover",
                    "Delivery",
                    "Support"
                  ].map((title) => (
                    <li className="site-footer__nav-column py-2.5 border-t-1 border-[#767676]" key={title}>
                      <button className="site-footer__nav-accordion-btn flex items-center justify-between w-full">
                        <h5 className="site-footer__nav-title">{title}</h5>
                        <svg 
                          className="site-footer__nav-add flex items-end text-(--color-white)" 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 10 10" 
                          width="10" 
                          height="10"
                        >
                          <path 
                            fill="currentColor" 
                            d="M9 9H5V5H1V4h4V0h1v4h4v1H6v4h1v1"
                          />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div className="site-footer__extras flex flex-col gap-15">

              <div className="site-footer__social-block flex flex-col gap-4 justify-center items-center min-w-[75px]">
                <h3 className="site-footer__social-title text-(--color-white) font-[Lato,sans-serif] text-[12px] lg:text-[14px] font-normal tracking-[0.67px] lg:tracking-[0.78px] leading-[30px] uppercase">
                  @VIERENTIME
                </h3>

                <div className="site-footer__social-list flex flex-row gap-7 items-center justify-center">
                  <a href="#" className="site-footer__social-link--instagram relative">
                    <svg className="site-footer__social-icon text-(--color-white) block h-5 w-auto" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                  <a href="#" className="site-footer__social-link--facebook relative">
                    <svg className="site-footer__social-icon text-(--color-white) block h-[21px] w-auto" viewBox="0 0 320 512">
                      <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </a>
                  <a href="#" className="site-footer__social-link--youtube relative">
                    <svg className="site-footer__social-icon text-(--color-white) block h-[15px] w-auto" viewBox="0 0 576 512">
                      <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="site-footer__payment-block min-w-[190px] flex flex-col items-center gap-[11px]">
                <span className="site-footer__payment-security flex flex-row items-center justify-center text-[#a2a2a2] text-[9.6px] font-normal font-[Lato,sans-serif] leading-[20.8px] tracking-[0.54px] uppercase">
                  <svg className="site-footer__payment-icon h-[14px] mr-[1ch]" width="15.8695652px" height="19px" viewBox="0 0 15.8695652 19">
                    <title>lock</title>
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g transform="translate(-939.5, -781.5)" fillRule="nonzero" stroke="#979797">
                        <g transform="translate(889, 776)">
                          <g transform="translate(51, 0)">
                            <g transform="translate(0, 6)">
                              <path d="M12.5329193,6.69767442 L12.3204969,6.69767442 L12.3204969,4.81395349 C12.3204969,2.15528039 10.1330881,0 7.43478261,0 C4.73647712,0 2.54906832,2.15528039 2.54906832,4.81395349 L2.54906832,6.69767442 L2.33664596,6.69767442 C1.04615203,6.69767442 0,7.72846069 0,9 L0,15.6976744 C0,16.9692137 1.04615203,18 2.33664596,18 L12.5329193,18 C13.8234132,18 14.8695652,16.9692137 14.8695652,15.6976744 L14.8695652,9 C14.8695652,7.72846069 13.8234132,6.69767442 12.5329193,6.69767442 Z M3.82360248,4.81395349 C3.82360248,2.84884731 5.44038292,1.25581401 7.43478261,1.25581401 C9.4291823,1.25581401 11.0459627,2.84884731 11.0459627,4.81395349 L11.0459627,6.69767442 L3.82360248,6.69767442 L3.82360248,4.81395349 Z M8.07204969,12.2232558 L8.07204969,13.8976744 C8.07204969,14.2444579 7.7867355,14.5255814 7.43478261,14.5255814 C7.08282972,14.5255814 6.79751553,14.2444579 6.79751553,13.8976744 L6.79751553,12.2232558 C6.53006957,12.0256175 6.37267081,11.7154437 6.37267081,11.3860465 C6.37267081,10.8080741 6.84819446,10.3395349 7.43478261,10.3395349 C8.02137076,10.3395349 8.49689441,10.8080741 8.49689441,11.3860465 C8.49689441,11.7154437 8.33949565,12.0256175 8.07204969,12.2232558 L8.07204969,12.2232558 Z" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  SSL Secure Checkout
                </span>

                <div className="site-footer__cards flex flex-row justify-center gap-2.5 items-center">
                  {[
                    { 
                      src: "a59df9ee346b1b5e65ddde87a0710630/d45ca/master-dark.webp",
                      alt: "MasterCard"
                    },
                    { 
                      src: "b312799972f84131ee5455f53dd6a6ae/ca18f/visa-dark.webp",
                      alt: "Visa"
                    },
                    { 
                      src: "ee3973626ea656def3a24f44bbf968d3/9fdfc/amex-dark.webp",
                      alt: "American Express"
                    },
                    { 
                      src: "ba3af3c768ec30ab02faac33fd8107e1/73e3f/jcb-dark.webp",
                      
                      alt: "JCB"
                    },
                    { 
                      src: "b407a75c1b3f027d592653b41dc1edd0/9fdfc/unionpay-dark.webp",
                      alt: "UnionPay"
                    },
                    { 
                      src: "ae906f1c54ef8c37f87971dfd34c0e9b/73e3f/discover-dark.webp",
                      alt: "Discovery Card"
                    },
                    { 
                      src: "918bf1ba0769a761eb936b27adfd75c6/9fdfc/diners-club-dark.webp",
                      alt: "Diner's Club"
                    }
                  ].map((item, i) => (
                    <div className="site-footer__card overflow-hidden" key={i}>
                      <img 
                        className="site-footer__card-img max-h-[14.999998px]"
                        src={`https://vieren.co/static/${item.src}`} 
                        alt={item.alt} 
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <aside className="site-footer__bottom bg-(--color-black) grid grid-cols-[1fr_minmax(343px,22fr)_1fr] lg:grid-cols-[1fr_28fr_1fr]">
        <div className="site-footer__bottom-container p-[20px_0] flex flex-col lg:flex-row gap-2.5 lg:gap-0 justify-between items-center align-middle col-[2/3]">
          
          <div className="site-footer__links flex gap-5 align-middle items-center mr-5 lg:mr-0">
            {["Terms & Conditions", "Privacy Policy"].map((link) => (
              <a href="#" className="site-footer__link flex items-center" key={link}>
                <span className="site-footer__link-text">{link}</span>
              </a>
            ))}
          </div>

          <span className="site-footer__copyright text-(--color-white) text-[9px] tracking-[0.5px] text-center font-light font-[Lato,sans-serif] leading-[20px] bg-transparent uppercase">
            © VIEREN 2025
          </span>

        </div>
      </aside>
    </footer>

  );
};

export default Footer;