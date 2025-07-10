import "./MainPage.css";

export default function MainPage() {
  return (
    <main className="wrapper">

{/*BANNER*/}
      <section className="section-content">
        <div className="section-content-container">
          <div className="bg-wrapper">
            <video
              className="bg-content-desktop"
              loop
              autoPlay
              muted
              playsInline
              preload="metadata"
              poster="https://d3t8vy6km7cso3.cloudfront.net/2025/02/13213850/Celebrate-V_hero_d-cover.jpg?format=auto&width=1920"
            >
              <source
                src="https://d3t8vy6km7cso3.cloudfront.net/2025/02/13220818/Celebrate-V_hero_d-opt2.mp4"
                type="video/mp4"
              />
              Ваш браузер не поддерживает видео.
            </video>
            <video
              className="bg-content-mobile"
              loop
              autoPlay
              muted
              playsInline
              preload="metadata"
              poster="https://d3t8vy6km7cso3.cloudfront.net/2025/02/13213846/Celebrate-V_hero_m_1-cover.jpg?format=auto&width=800"
            >
              <source
                src="https://d3t8vy6km7cso3.cloudfront.net/2025/02/13223109/Celebrate-V_hero_m_1-opt.mp4"
                type="video/mp4"
              />
              Ваш браузер не поддерживает видео.
            </video>
          </div>

          <div className="section-content__content">
            <div className="content-wrapper">
              <div className="content-wrapper__grid">
                <div className="content-wrapper__flex lg:m-auto">
                  <h1 className="title-text whitespace-nowrap tracking-[2px] md:tracking-[2.5px] leading-[35px] md:leading-[43px] font-normal uppercase m-[10px_8px] lg:m-[0_0_30px_0]">
                    CELEBRATE V
                  </h1>
                  <h4 className="description-text">
                    Unlock priority access to VIEREN’s 5-Year Anniversary
                    Collection — launching Fall 2025.
                  </h4>

                  <form className="p-[40px_8%_0] w-full">
                    <input
                      type="email"
                      placeholder="Email"
                      className="appearance-none bg-white border border-[#bbbbbb] box-border px-[13px] w-full text-[#3b3b3b]
                      font-[Lato,sans-serif] font-light text-[15px] leading-[30px] tracking-[0.5px]
                      h-[45px] rounded-none mb-[15px]"
                    />
                    <button
                      type="submit"
                      className="appearance-button overflow-visible bg-[#575757] text-(--color-white) h-[45px] cursor-pointer
                      font-[Lato,sans-serif] font-normal text-[15px] tracking-[0.5px] text-center uppercase border-0
                      box-border py-[9px] w-full transition-colors duration-300 hover:bg-[#979797]"
                    >
                      join the waitlist
                    </button>
                    <p className="text-(--color-white) font-[Lato,sans-serif] font-light text-[11px] leading-[2] tracking-[0.61px] text-center mt-[1rem]">
                      By joining the list you agree to receive emails from
                      VIEREN
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/*SECTION 1*/}
      <section className="section-content ">
        <div className="section-content-container">
          <div className="bg-wrapper">
            <img
              src="https://d3t8vy6km7cso3.cloudfront.net/2025/05/05210305/home-hero-scaled.jpeg?format=auto"
              alt="background, gold watches"
              className="bg-content-desktop"
            />
            <img
              src="https://d3t8vy6km7cso3.cloudfront.net/2024/11/05133606/gold_banner_m-v5.jpg?format=auto&width=800"
              alt="background, gold watches"
              className="bg-content-mobile"
            />
          </div>

          <div className="section-content__content">
            <div className="content-wrapper">
              <div className="content-wrapper__grid">
                <div className="content-wrapper__flex lg:m-[40px_auto_40px_150px] col-[2/3]">
                  <h2 className="title-text text-(--color-white) whitespace-nowrap tracking-[2px] md:tracking-[2.5px] leading-[35px] md:leading-[43px] font-normal uppercase m-[10px_8px] lg:m-[0_0_30px]">
                    STAND OUT IN GOLD
                  </h2>

                  <h4 className="description-text text-(--color-white)">Fusing sound and style</h4>

                  <button className="btn-call-to_action bg-[#575757] hover:bg-[#979797] mt-10">
                    EXPLORE STEREO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/*SECTION 2*/}
      <section className="section-content">
        <div className="section-content-container">
          <div className="bg-wrapper">
            <video
              className="bg-content-desktop"
              loop
              autoPlay
              muted
              playsInline
              preload="metadata"
              poster="https://d3t8vy6km7cso3.cloudfront.net/2024/03/27125824/WAVES-hero-wide_2024_cover.jpg?format=auto&width=1920"
            >
              <source
                src="https://d3t8vy6km7cso3.cloudfront.net/2024/03/27125843/WAVES-hero-wide_2024_opt.mp4"
                type="video/mp4"
              />
              Ваш браузер не поддерживает видео.
            </video>

            <video
              className="bg-content-mobile"
              loop
              autoPlay
              muted
              playsInline
              preload="metadata"
              poster="https://d3t8vy6km7cso3.cloudfront.net/2024/03/27125820/Waves-hero-mobile_2024_cover.jpg?format=auto&width=800"
            >
              <source
                src="https://d3t8vy6km7cso3.cloudfront.net/2024/03/27125841/Waves-hero-mobile_2024_opt.mp4"
                type="video/mp4"
              />
              Ваш браузер не поддерживает видео.
            </video>
          </div>

          <div className="section-content__content">
            <div className="content-wrapper">
              <div className="content-wrapper__grid">
                <div className="content-wrapper__flex lg:m-auto">
                  <h2 className="title-text text-(--color-white) tracking-[0.38px] md:tracking-[0.49px] leading-[39px] md:leading-[47px] font-light m-[10px_8px] lg:m-[0_0_10px_0]">
                    "Bringing glamour to gender-neutral watchmaking"
                  </h2>

                  <div className="content__description m-[40px_22%_20px] lg:m-[40px_30%_20px]">
                    <img
                      src="https://d3t8vy6km7cso3.cloudfront.net/2024/06/17171716/hodinkee-logo.png?format=auto"
                      alt="HODINKEE"
                    />
                  </div>

                  <button className="btn-call-to_action bg-[#575757] hover:bg-[#979797] mt-10">
                    DISCOVER THE ICON
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/*HEADER SECTION 3*/}
      <section className="section-header lg:pb-5">
        <div className="section-header-container">
          <h2 className="section-header__title">SHOP SWISS LUXURY WATCHES</h2>
        </div>
      </section>
{/*SECTION 3*/}
      <section className="section-content m-[50px_3.3vw_0]">
        <div className="section-content-container">
          <div className="luxury-content flex flex-row gap-2.5">
            <article className="luxury-content__card h-auto">
              <a href="" className="h-auto">
                <div className="card__img group relative inline-block overflow-hidden">
                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2023/02/20135619/Matte-white_PLP_thumb-2.jpg?format=auto&width=1920"
                    alt="BLACK DIAMOND watches"
                    className="content-desktop hidden lg:block w-auto h-auto"
                  />
                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2025/03/22185731/mw-hover.jpeg?format=auto&width=1920"
                    alt="BLACK DIAMOND watches"
                    className="content-desktop-hover absolute inset-0 w-full h-full object-cover hidden group-hover:lg:block transition-all duration-300"
                  />

                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2023/02/20135619/Matte-white_PLP_thumb-2.jpg?format=auto&width=800"
                    alt="BLACK DIAMOND watches"
                    className="content-mobile lg:hidden w-auto h-auto"
                  />
                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2025/03/22185731/mw-hover.jpeg?format=auto&width=800"
                    alt="BLACK DIAMOND watches"
                    className="content-mobile-hover absolute inset-0 w-full h-full object-cover hidden group-hover:block transition-all duration-300"
                  />
                </div>
              </a>
              <div className="card__wrapper-content">
                <a href="">
                  <h2 className="card__title-text text-(--color-black)">MATTE WHITE</h2>
                </a>
                <span className="card__price-text text-(--color-black)">$3,500 USD</span>
              </div>
            </article>
            <article className="luxury-content__card">
              <a href="">
                <div className="card__img group relative inline-block overflow-hidden">
                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2023/02/20135626/Black-Croc_PLP_thumb-2.jpg?format=auto&width=1920"
                    alt="BLACK DIAMOND watches"
                    className="content-desktop hidden lg:block w-auto h-auto"
                  />
                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2025/03/22185727/bc-hover.jpeg?format=auto&width=1920"
                    alt="BLACK DIAMOND watches"
                    className="content-desktop-hover absolute inset-0 w-full h-full object-cover hidden group-hover:lg:block transition-all duration-300"
                  />

                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2023/02/20135626/Black-Croc_PLP_thumb-2.jpg?format=auto&width=800"
                    alt="BLACK DIAMOND watches"
                    className="content-mobile lg:hidden w-auto h-auto"
                  />
                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2025/03/22185727/bc-hover.jpeg?format=auto&width=800"
                    alt="BLACK DIAMOND watches"
                    className="content-mobile-hover absolute inset-0 w-full h-full object-cover hidden group-hover:block transition-all duration-300"
                  />
                </div>
              </a>
              <div className="card__wrapper-content">
                <a href="">
                  <h2 className="card__title-text text-(--color-black)">BLACK CROC</h2>
                </a>
                <span className="card__price-text text-(--color-black)">$4,500 USD</span>
              </div>
            </article>
            <article className="luxury-content__card">
              <a href="">
                <div className="card__img group relative inline-block overflow-hidden">
                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2023/02/20135618/Black-diamond_PLP_thumb-Copy.jpg?format=auto&width=1920"
                    alt="BLACK DIAMOND watches"
                    className="content-desktop"
                  />
                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2025/03/22185721/bd-hover.jpeg?format=auto&width=1920"
                    alt="BLACK DIAMOND watches"
                    className="content-desktop-hover"
                  />

                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2023/02/20135618/Black-diamond_PLP_thumb-Copy.jpg?format=auto&width=800"
                    alt="BLACK DIAMOND watches"
                    className="content-mobile"
                  />
                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2025/03/22185721/bd-hover.jpeg?format=auto&width=800"
                    alt="BLACK DIAMOND watches"
                    className="content-mobile-hover"
                  />
                </div>
              </a>

              <div className="card__wrapper-content">
                <a href="">
                  <h2 className="card__title-text">BLACK DIAMOND</h2>
                </a>
                <span className="card__price-text">$5,500 USD</span>
              </div>
            </article>
          </div>

          <div className="section-content__btn-call-to mt-12.5">
            <button className="btn-call-to_action bg-black hover:bg-[#575757]">
              FIND YOUR MASTERPIECE
            </button>
          </div>
        </div>
      </section>
{/*SECTION 4*/}
      <section className="section-content mt-[150px]">
        <div className="section-content-container">
          <div className="show-products lg:flex">
            <article className="show-products__element">
              <a href="">
                <img
                  src="https://d3t8vy6km7cso3.cloudfront.net/2025/04/28213432/home-mens.jpeg?format=auto&width=1920"
                  alt="watches"
                  className="bg-content-desktop"
                />
                <img
                  src="https://d3t8vy6km7cso3.cloudfront.net/2025/04/28213432/home-mens.jpeg?format=auto&width=800"
                  alt="watches"
                  className="bg-content-mobile"
                />
              </a>
            </article>

            <article className="show-products__element">
              <a href="">
                <img
                  src="https://d3t8vy6km7cso3.cloudfront.net/2025/04/28213439/home-womens.jpeg?format=auto&width=1920"
                  alt="watches"
                  className="bg-content-desktop"
                />
                <img
                  src="https://d3t8vy6km7cso3.cloudfront.net/2025/04/28213439/home-womens.jpeg?format=auto&width=800"
                  alt="watches"
                  className="bg-content-mobile"
                />
              </a>
            </article>
          </div>
        </div>
      </section>
{/*HEADER SECTION 5*/}
      <section className="section-header lg:pb-5">
        <div className="section-header-container">
          <a href="">
            <h2 className="section-header__title">AS SEEN ON @VIERENTIME</h2>
          </a>
        </div>
      </section>
{/*SECTION 5*/}
      <section className="section-content mt-10">
        <div className="section-content-container md:px-[6.5%]">
          <div className="stars-content flex flex-row">
            <article className="stars-content__card pl-(--padding-card) lg:pl-(--page-margin)">
              <a href="">
                <div className="card__img overflow-hidden">
                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2025/02/17155259/sam-heughan-social.jpeg?format=auto&width=1920"
                    alt="Sam Heughan in Black Croc"
                    className="content-desktop"
                  />
                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2025/02/17155259/sam-heughan-social.jpeg?format=auto&width=800"
                    alt="Sam Heughan in Black Croc"
                    className="content-mobile"
                  />
                </div>
              </a>
              <div className="card__stars-title">
                <h5 className="stars-title-text text-(--color-gray)">Sam Heughan in Black Croc</h5>
              </div>
            </article>
            <article className="stars-content__card pl-(--padding-card) pr-(--padding-card) lg:pl-(--padding-margin) lg:pr-(--padding-margin)">
              <a href="">
                <div className="card__img overflow-hidden">
                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2025/02/17155307/saweetie-social2.jpeg?format=auto&width=1920"
                    alt="Saweetie in Gold Stereo Diamond"
                    className="content-desktop"
                  />
                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2025/02/17155307/saweetie-social2.jpeg?format=auto&width=800"
                    alt="Saweetie in Gold Stereo Diamond"
                    className="content-mobile"
                  />
                </div>
              </a>
              <div className="card__stars-title">
                <h5 className="stars-title-text text-(--color-gray)">
                  Saweetie in Gold Stereo Diamond
                </h5>
              </div>
            </article>
            <article className="stars-content__card pr-(--padding-card) lg:pr-(--page-margin)">
              <a href="">
                <div className="card__img overflow-hidden">
                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2025/02/17155304/leon-bridges-social.jpeg?format=auto&width=1920"
                    alt="Leon Bridges in Gold Stereo Diamond"
                    className="content-desktop"
                  />
                  <img
                    src="https://d3t8vy6km7cso3.cloudfront.net/2025/02/17155304/leon-bridges-social.jpeg?format=auto&width=800"
                    alt="Leon Bridges in Gold Stereo Diamond"
                    className="content-mobile"
                  />
                </div>
              </a>
              <div className="card__stars-title">
                <h5 className="stars-title-text text-(--color-gray)">
                  Leon Bridges in Gold Stereo Diamond
                </h5>
              </div>
            </article>
          </div>

          <div className="section-content__btn-call-to mt-[60px]">
            <button className="btn-call-to_action bg-black hover:bg-[#575757]">
              SEE WHAT'S NEW
            </button>
          </div>
        </div>
      </section>
{/*HEADER SECTION 6*/}
      <section className="section-header bg-(--color-black) text-(--color-white) pt-25 md:pt-[130px]">
        <div className="section-header-container flex flex-col text-center">
          <h2 className="section-header__title mb-2.5">DISTINCTLY VIEREN</h2>

          <h4 className="section-header__subtitle text-[20px] md:text-[22px] text-center font-[Lato,sans-serif] tracking-[0.3px] leading-[29px] md:leading-[31px] font-light m-[5px_0_10px]">
            Experience modern artistry and Swiss craftsmanship in every limited
            edition timepiece.
          </h4>
        </div>
      </section>
{/*SECTION 6*/}
      <section className="section-content bg-(--color-black) text-(--color-white)">
        <div className="section-content-container p-[40px_0_100px] lg:p-[40px_3.5%_130px]">
          <div className="excel-content flex flex-row lg:gap-5">
            <article className="excel-content__card pl-(--padding-card) lg:pl-(--page-margin)">
              <div className="card__img overflow-hidden mb-4">
                <img
                  src="https://d3t8vy6km7cso3.cloudfront.net/2024/11/28184422/ultra-thin-rectangular-case.jpeg?format=auto&width=1920"
                  alt="rectangular icon"
                  className="content-desktop"
                />
                <img
                  src="https://d3t8vy6km7cso3.cloudfront.net/2024/11/28184422/ultra-thin-rectangular-case.jpeg?format=auto&width=800"
                  alt="rectangular icon"
                  className="content-mobile"
                />
              </div>
              <div className="card__excel-title">
                <h4 className="excel-title-text">
                  RECTANGULAR ICON
                </h4>
              </div>
              <div className="card__excel-description">
                <h5 className="excel-description-text">
                  Ultra-thin, gender-neutral rectangular case
                </h5>
              </div>
            </article>
            <article className="excel-content__card pl-(--padding-card) pr-(--padding-card) lg:pl-(--padding-margin) lg:pr-(--padding-margin)">
              <div className="card__img overflow-hidden mb-4">
                <img
                  src="https://d3t8vy6km7cso3.cloudfront.net/2024/11/28184449/certfied-swiss-made-automatic.jpeg?format=auto&width=1920"
                  alt="MADE"
                  className="content-desktop"
                />
                <img
                  src="https://d3t8vy6km7cso3.cloudfront.net/2024/11/28184449/certfied-swiss-made-automatic.jpeg?format=auto&width=800"
                  alt="MADE"
                  className="content-mobile"
                />
              </div>
              <div className="card__excel-title">
                <h4 className="excel-title-text">
                  CERTIFIED SWISS MADE
                </h4>
              </div>
              <div className="card__excel-description">
                <h5 className="excel-description-text text-center">
                  Powered by precision ETA-2671 automatic movements
                </h5>
              </div>
            </article>
            <article className="excel-content__card pr-(--padding-card) lg:pr-(--page-margin)">
              <div className="card__img overflow-hidden mb-4">
                <img
                  src="https://d3t8vy6km7cso3.cloudfront.net/2024/11/28184441/gold-ring.jpeg?format=auto&width=1920"
                  alt="DESIGNS"
                  className="content-desktop"
                />
                <img
                  src="https://d3t8vy6km7cso3.cloudfront.net/2024/11/28184441/gold-ring.jpeg?format=auto&width=800"
                  alt="DESIGNS"
                  className="content-mobile"
                />
              </div>
              <div className="card__excel-title">
                <h4 className="excel-title-text">
                  AWARD-WINNING DESIGNS
                </h4>
              </div>
              <div className="card__excel-description">
                <h5 className="excel-description-text text-center">
                  Versatile styles by acclaimed designer Sunny Fong
                </h5>
              </div>
            </article>
          </div>
        </div>
      </section>
{/*SECTION 7*/}
      <section className="section-content">
        <div className="section-content-container">
          <div className="bg-wrapper">
            <img
              src="https://d3t8vy6km7cso3.cloudfront.net/2024/11/05140058/power-your-time_d-v4-scaled.jpg?format=auto"
              alt="background, gold watches"
              className="bg-content-desktop"
            />
            <img
              src="https://d3t8vy6km7cso3.cloudfront.net/2024/11/24195528/power-your-time-m2.jpeg?format=auto&width=800"
              alt="background, gold watches"
              className="bg-content-mobile"
            />
          </div>

          <div className="section-content__content">
            <div className="content-wrapper">
              <div className="content-wrapper__grid">
                <div className="content-wrapper__flex m-auto col-[2/3]">
                  <h2 className="title-text tracking-[2px] md:tracking-[2.5px] leading-[35px] md:leading-[43px] font-normal uppercase m-[10px_8px] lg:m-[0_0_20px]">
                    POWER YOUR TIME
                  </h2>

                  <h4 className="description-text">
                    Experience the art of luxury watchmaking
                  </h4>

                  <button className="btn-call-to_action bg-[#575757] hover:bg-[#979797] mt-10">ABOUT VIEREN</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="support">
        <div className="support-container">
          <aside className="support__card">
            <div className="card__img">
              <img src="/static/6b5e24c4126a076489fe23840731b277/08e10/free-shipping.png" alt="free shipping" />
            </div>
            <div className="card__title">
              <h4 className="title-text">
                Complimentary Shipping
              </h4>
            </div>
          </aside>

          <aside className="support__card">
            <div className="card__img">
              <img src="/static/b13002354cdfcb6a43a99495c18b00b2/1e106/30-day-returns-2.png" alt="returns" />
            </div>
            <div className="card__title">
              <h4 className="title-text">
                30 Day Returns
              </h4>
            </div>
          </aside>

          <aside className="support__card">
            <div className="card__img">
              <img src="/static/d8bae71c3d00144f4d6ca2e561683690/ec1a6/warranty.png" alt="warranty" />
            </div>
            <div className="card__title">
              <h4 className="title-text">
                2 Year Warranty
              </h4>
            </div>
          </aside>
        </div>
      </section> */}
    </main>
  );
}
