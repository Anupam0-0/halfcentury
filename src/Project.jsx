import React from "react";
import "./base.css"

const Project = () => (
  <div className="">
    <header className="frame">
      <h1 className="frame__title">On-Scroll 3D Carousel</h1>
      <nav className="frame__links">
        <a className="line" href="https://tympanus.net/codrops/?p=93330">Article</a>
        <a className="line" href="https://github.com/codrops/3DCarousel/">Code</a>
        <a className="line" href="https://tympanus.net/codrops/demos/">All demos</a>
      </nav>
      <nav className="frame__tags">
        <a className="line" href="https://tympanus.net/codrops/demos/?tag=3d">#3d</a>
        <a className="line" href="https://tympanus.net/codrops/demos/?tag=carousel">#carousel</a>
        <a className="line" href="https://tympanus.net/codrops/demos/?tag=page-transition">#page-transition</a>
      </nav>
    </header>
    <main id="smooth-content">
      <div className="scene-wrapper">
        {/* Carousel 1 */}
        <div className="scene">
          <h2 className="scene__title" data-speed="0.7">
            <a href="#preview-1"><span>Haute Couture Nights — Paris</span></a>
          </h2>
          <div className="carousel">
            <div className="carousel__cell">
              <div className="card" style={{ "--img": "url(../assets/img1.webp)" }}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{ "--img": "url(../assets/img2.webp)" }}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{ "--img": "url(../assets/img3.webp)" }}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{ "--img": "url(../assets/img4.webp)" }}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
    <div className="preview-wrapper">
      <div className="preview" id="preview-1">
        <header className="preview__header">
          <h2 className="preview__title"><span>Haute Couture Nights — Paris</span></h2>
          <button className="preview__close">Close ×</button>
        </header>
        <div className="grid">
          <figure aria-labelledby="caption1" className="grid__item" role="img">
            <div className="grid__item-image" style={{ backgroundImage: "url(assets/img1.webp)" }}></div>
            <figcaption className="grid__item-caption" id="caption1">
              <h3>Kai Vega</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption2" className="grid__item" role="img">
            <div className="grid__item-image" style={{ backgroundImage: "url(assets/img2.webp)" }}></div>
            <figcaption className="grid__item-caption" id="caption2">
              <h3>Riven Juno</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption3" className="grid__item" role="img">
            <div className="grid__item-image" style={{ backgroundImage: "url(assets/img3.webp)" }}></div>
            <figcaption className="grid__item-caption" id="caption3">
              <h3>Lex Orion</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption4" className="grid__item" role="img">
            <div className="grid__item-image" style={{ backgroundImage: "url(assets/img4.webp)" }}></div>
            <figcaption className="grid__item-caption" id="caption4">
              <h3>Ash Kairos</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption5" className="grid__item" role="img">
            <div className="grid__item-image" style={{ backgroundImage: "url(assets/img5.webp)" }}></div>
            <figcaption className="grid__item-caption" id="caption5">
              <h3>Juno Sol</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption6" className="grid__item" role="img">
            <div className="grid__item-image" style={{ backgroundImage: "url(assets/img6.webp)" }}></div>
            <figcaption className="grid__item-caption" id="caption6">
              <h3>Soren Nyx</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption7" className="grid__item" role="img">
            <div className="grid__item-image" style={{ backgroundImage: "url(assets/img7.webp)" }}></div>
            <figcaption className="grid__item-caption" id="caption7">
              <h3>Quinn Axon</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption8" className="grid__item" role="img">
            <div className="grid__item-image" style={{ backgroundImage: "url(assets/img8.webp)" }}></div>
            <figcaption className="grid__item-caption" id="caption8">
              <h3>Zara Voss</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption9" className="grid__item" role="img">
            <div className="grid__item-image" style={{ backgroundImage: "url(assets/img9.webp)" }}></div>
            <figcaption className="grid__item-caption" id="caption9">
              <h3>Hale B.</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption10" className="grid__item" role="img">
            <div className="grid__item-image" style={{ backgroundImage: "url(assets/img10.webp)" }}></div>
            <figcaption className="grid__item-caption" id="caption10">
              <h3>Gundra Wex</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption61" className="grid__item" role="img">
            <div className="grid__item-image" style={{ backgroundImage: "url(assets/img11.webp)" }}></div>
            <figcaption className="grid__item-caption" id="caption61">
              <h3>Extra One</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption62" className="grid__item" role="img">
            <div className="grid__item-image" style={{ backgroundImage: "url(assets/img12.webp)" }}></div>
            <figcaption className="grid__item-caption" id="caption62">
              <h3>Extra Two</h3>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
);

export default Project;