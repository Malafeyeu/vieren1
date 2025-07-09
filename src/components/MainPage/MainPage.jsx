
export default function MainPage() {
  return (
    <main className="wrapper">
      <section className="relative overflow-hidden flex flex-col md:block">
        <div className="inset-0 w-full h-auto z-0 object-cover">
          <video
            className="relative w-full h-auto bg-transparent hidden md:block"
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
            className="relative w-full h-auto bg-transparent md:hidden"
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

        <div className="md:absolute md:bg-transparent bg-black w-full h-full py-13 md:py-0 lg:py-20 top-0 left-0 z-1">
          <div className="h-full grid md:grid-cols-[1fr_28fr_1fr] grid-cols-[1fr_minmax(343px,22fr)_1fr] items-center">
            <div className="grid md:grid-cols-[1fr_1fr] md:grid-rows-1 col-[2/3]">
              <div className="w-full h-auto m-[40px_auto] text-white space-y-6 md:max-w-[35vw]">
                <h1 class="text-[38px] leading-[43px] tracking-[2.5px] text-center uppercase font-normal font-[vieren-type-regular,Lato,sans-serif]">
                  CELEBRATE V
                </h1>
                <h4 class="text-[22px] leading-[31px] tracking-[0.3px] text-center font-light font-[Lato,sans-serif]">
                  Unlock priority access to VIEREN’s 5-Year Anniversary Collection — launching Fall 2025.
                </h4>

                <form className="m-[40px_8%_0]">
                  <input
                    type="email"
                    placeholder="Email"
                    class="appearance-none bg-white border border-[#bbbbbb] box-border px-[13px] w-full text-[#3b3b3b]
                    font-[Lato,sans-serif] font-light text-[15px] leading-[30px] tracking-[0.5px]
                    h-[45px] rounded-none mb-[15px]" 
                  />
                  <button
                    type="submit"
                    class="appearance-button overflow-visible bg-[#575757] text-white h-[45px] cursor-pointer
                    font-[Lato,sans-serif] font-normal text-[15px] tracking-[0.5px] text-center uppercase border-0
                    box-border py-[9px] w-full"
                  >
                    join the waitlist
                  </button>
                  <p class="text-white font-[Lato,sans-serif] font-light text-[11px] leading-[2] tracking-[0.61px] text-center mt-[1rem]">
                    By joining the list you agree to receive emails from VIEREN
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      <section className="section-content relative overflow-hidden flex flex-col md:block">
        <div className="sectionContent_container inset-0 w-full h-auto z-0 object-cover">
          <div className="picture-wrapper relative w-full h-auto bg-transparent hidden md:block">
            <img src="https://d3t8vy6km7cso3.cloudfront.net/2025/05/05210305/home-hero-scaled.jpeg?format=auto" alt="background, gold watches" className="picture-img" />
          </div>

          <div className="section-content__content md:absolute md:bg-transparent bg-black w-full h-full top-0 left-0 z-1">
            <div className="content-wrapper h-full grid md:grid-cols-[1fr_28fr_1fr] grid-cols-[1fr_minmax(343px,22fr)_1fr] items-center">
              <div className="grid md:grid-cols-[1fr_1fr] md:grid-rows-1 col-[2/3]">
                <div className="w-full h-auto m-[40px_auto_40px_100px] flex flex-col items-center text-white space-y-6 md:max-w-[35vw] col-[2/3]">
                  <h1 className="title-text text-[38px] leading-[43px] tracking-[2.5px] text-center uppercase font-normal font-[vieren-type-regular,Lato,sans-serif]">
                    STAND OUT IN GOLD
                  </h1>

                  <h4 className="description-text text-[22px] leading-[31px] tracking-[0.3px] text-center font-light font-[Lato,sans-serif]">
                    Fusing sound and style
                  </h4>

                  <button className="
                      btn-call-to_action min-w-[150px] appearance-button overflow-visible bg-[#575757] text-white min-h-[45px] cursor-pointer
                      font-[Lato,sans-serif] font-normal text-[14px] tracking-[0.4px] text-center uppercase border-0 leading-[45px] box-border px-[2em]
                    "
                  >
                    EXPLORE STEREO
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="section-content-container">
          <div className="video-wrapper">
            <video
              className="video-content"
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
          </div>

          <div className="section-content__content">
            <div className="content-wrapper">
              <div className="content__title">
                <h2 className="title-text">
                  "Bringing glamour to gender-neutral watchmaking"
                </h2>
              </div>

              <div className="content__description">
                <img src="https://d3t8vy6km7cso3.cloudfront.net/2024/06/17171716/hodinkee-logo.png?format=auto&width=1920" alt="HODINKEE" />
              </div>

              <div className="content__btn-call-to">
                <button className="btn-call-to_action">
                  DISCOVER THE ICON
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-header">
        <div className="section-header-container">
          <h2 className="section-header__title">
            SHOP SWISS LUXURY WATCHES
          </h2>
        </div>
      </section>

      <section className="section-content">
        <div className="section-content-container">
          <div className="luxury-content">
            <aside className="luxury-content__card">
              <div className="card__img">
                <a href="">
                  <img src="https://d3t8vy6km7cso3.cloudfront.net/2023/02/20135619/Matte-white_PLP_thumb-2.jpg?format=auto&width=1920" alt="MATTE WHITE watches" />
                </a>
              </div>
              <div className="card__title">
                <h2 className="title-text">
                  MATTE WHITE
                </h2>
              </div>
              <div className="card__price">
                <h5 className="price-text">
                  $3,500 USD
                </h5>
              </div>
            </aside>
            <aside className="luxury-content__card">
              <div className="card__img">
                <a href="">
                  <img src="https://d3t8vy6km7cso3.cloudfront.net/2023/02/20135626/Black-Croc_PLP_thumb-2.jpg?format=auto&width=1920" alt="BLACK CROC watches" />
                </a>
              </div>
              <div className="card__title">
                <h2 className="title-text">
                  BLACK CROC
                </h2>
              </div>
              <div className="card__price">
                <h5 className="price-text">
                  $4,500 USD
                </h5>
              </div>
            </aside>
            <aside className="luxury-content__card">
              <div className="card__img">
                <a href="">
                  <img src="https://d3t8vy6km7cso3.cloudfront.net/2023/02/20135618/Black-diamond_PLP_thumb-Copy.jpg?format=auto&width=1920" alt="BLACK DIAMOND watches" />
                </a>
              </div>
              <div className="card__title">
                <h2 className="title-text">
                  BLACK DIAMOND
                </h2>
              </div>
              <div className="card__price">
                <h5 className="price-text">
                  $5,500 USD
                </h5>
              </div>
            </aside>
          </div>

          <div className="section-content__btn-show">
            <button className="btn-show__new-content">
              SEE WHAT'S NEW
            </button>
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="section-content-container">
          <div className="show-products">
            <aside className="element">
              <a href="" className="element__link">
                <img src="https://d3t8vy6km7cso3.cloudfront.net/2025/04/28213432/home-mens.jpeg?format=auto&width=1920" alt="watches" />
              </a>
            </aside>

            <aside className="element">
              <a href="" className="element__link">
                <img src="https://d3t8vy6km7cso3.cloudfront.net/2025/04/28213439/home-womens.jpeg?format=auto&width=1920" alt="watches" />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-header">
        <div className="section-header-container">
          <a href="">
            <h2 className="section-header__title">
              AS SEEN ON @VIERENTIME
            </h2>
          </a>
        </div>
      </section>

      <section className="section-content">
        <div className="section-content-container">
          <div className="stars-content">
            <aside className="stars-content__card">
              <div className="card__img">
                <a href="">
                  <img src="https://d3t8vy6km7cso3.cloudfront.net/2025/02/17155259/sam-heughan-social.jpeg?format=auto&width=1920" alt="black croc watches" />
                </a>
              </div>
              <div className="card__title">
                <h5 className="title-text">
                  Sam Heughan in Black Croc
                </h5>
              </div>
            </aside>
            <aside className="stars-content__card">
              <div className="card__img">
                <a href="">
                  <img src="https://d3t8vy6km7cso3.cloudfront.net/2025/02/17155307/saweetie-social2.jpeg?format=auto&width=1920" alt="gold stereo diamond watches" />
                </a>
              </div>
              <div className="card__title">
                <h5 className="title-text">
                  Saweetie in Gold Stereo Diamond
                </h5>
              </div>
            </aside>
            <aside className="luxury-content__card">
              <div className="card__img">
                <a href="">
                  <img src="https://d3t8vy6km7cso3.cloudfront.net/2025/02/17155304/leon-bridges-social.jpeg?format=auto&width=1920" alt="gold stereo diamond watches" />
                </a>
              </div>
              <div className="card__title">
                <h5 className="title-text">
                  Leon Bridges in Gold Stereo Diamond
                </h5>
              </div>
            </aside>
          </div>

          <div className="section-content__btn-show">
            <button className="btn-show__new-content">
              SEE WHAT'S NEW
            </button>
          </div>
        </div>
      </section>

      <section className="section-header">
        <div className="section-header-container">
          <h2 className="section-header__title">
            DISTINCTLY VIEREN
          </h2>

          <h4>
            Experience modern artistry and Swiss craftsmanship in every limited edition timepiece.
          </h4>
        </div>
      </section>

      <section className="section-content">
        <div className="section-content-container">
          <div className="excel-content">
            <aside className="excel-content__card">
              <div className="card__img">
                <a href="">
                  <img src="https://d3t8vy6km7cso3.cloudfront.net/2024/11/28184422/ultra-thin-rectangular-case.jpeg?format=auto&width=1920" alt="rectangular icon" />
                </a>
              </div>
              <div className="card__title">
                <h4 className="title-text">
                  RECTANGULAR ICON
                </h4>
              </div>
              <div className="card__description">
                <h5 className="description-text">
                  Ultra-thin, gender-neutral rectangular case
                </h5>
              </div>
            </aside>
            <aside className="excel-content__card">
              <div className="card__img">
                <a href="">
                  <img src="https://d3t8vy6km7cso3.cloudfront.net/2024/11/28184449/certfied-swiss-made-automatic.jpeg?format=auto&width=1920" alt="certified swiss made" />
                </a>
              </div>
              <div className="card__title">
                <h4 className="title-text">
                  CERTIFIED SWISS MADE
                </h4>
              </div>
              <div className="card__description">
                <h5 className="description-text">
                  Powered by precision ETA-2671 automatic movements
                </h5>
              </div>
            </aside>
            <aside className="excel-content__card">
              <div className="card__img">
                <a href="">
                  <img src="https://d3t8vy6km7cso3.cloudfront.net/2024/11/28184441/gold-ring.jpeg?format=auto&width=1920" alt="award-winning designer" />
                </a>
              </div>
              <div className="card__title">
                <h4 className="title-text">
                  AWARD-WINNING DESIGNS
                </h4>
              </div>
              <div className="card__description">
                <h5 className="description-text">
                  Versatile styles by acclaimed designer Sunny Fong
                </h5>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="sectionContent_container">
          <div className="picture-wrapper">
            <img src="https://d3t8vy6km7cso3.cloudfront.net/2025/05/05210305/home-hero-scaled.jpeg?format=auto" alt="background, gold watches" className="picture-img" />
          </div>

          <div className="section-content__content">
            <div className="content-wrapper">
              <div className="content__title">
                <h2 className="title-text">
                  POWER YOUR TIME
                </h2>
              </div>

              <div className="content__description">
                <h4 className="description-text">
                  Experience the art of luxury watchmaking
                </h4>
              </div>

              <div className="content__btn-call-to">
                <button className="btn-call-to_action">
                  ABOUT VIEREN
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="support">
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
      </section>
    </main>
  );
};