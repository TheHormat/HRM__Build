import React from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  addToWish,
  deleteFromWish,
  getAletler,
  addCount,
  removeCount,
  addCountWish,
  removeCountWish,
} from "../redux";
import { Link } from "react-router-dom";

function Sec04Hero() {
  var settings1 = {
    infinite: false,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 20,
  };
  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 20,
    responsive: [
      {
        breakpoint: 1998,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1488,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 748,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useSelector((state) => state.basketReducerWish);
  useSelector((state) => state.basketReducerCart);
  useSelector((count) => count.countReducerCart);
  useSelector((count) => count.countReducerWish);

  const dispatch = useDispatch();

  const toggleCart = (data) => {
    if (data.cartstate === false) {
      data.cartstate = true;
      data.carted_text = "Səbətdən çıxar";
      data.carted_style = "carted_red_bg";
      dispatch(addCount(data.price));
      dispatch(addToCart(data));
    } else {
      data.cartstate = false;
      data.carted_text = "Səbətə əlavə et";
      data.carted_style = "";
      dispatch(removeCount(data.price));
      dispatch(deleteFromCart(data));
    }
  };

  const toggleWish = (data) => {
    if (data.wishstate === false) {
      data.wishstate = true;
      data.liked = "like-clicked";
      dispatch(addCountWish(1));
      dispatch(addToWish(data));
    } else {
      data.wishstate = false;
      data.liked = "";
      dispatch(removeCountWish(1));
      dispatch(deleteFromWish(data));
    }
  };
  return (
    <div>
      <section className="S4-Hero">
        <div className="dflex full-center">
          <div className="w74 s4_shekil_zonasi">
            <Slider className="responsive-hero-slider" {...settings1}>
              <div className="responsive-hero-slide dflex jc-center">
                <img
                  src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                  alt=""
                />
              </div>
              <div className="responsive-hero-slide dflex jc-center">
                <img
                  src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                  alt=""
                />
              </div>
              <div className="responsive-hero-slide dflex jc-center">
                <img
                  src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>
              <div className="responsive-hero-slide dflex jc-center">
                <img
                  src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="S7-Guitars py-5">
        <div className="dflex full-center">
          <div className="w74">
            <Slider className="responsive" {...settings}>
              {getAletler("DESTLER").map((index, key) => (
                <div key={key} className="slides">
                  <div className="card cards graycard">
                    <div className="card-img-top-container">
                      <Link key={key} to={`/butun_aletler/${index.id}`}>
                        <img className="card-img-top" src={index.img} alt="" />
                      </Link>
                    </div>
                    <div className="card-body">
                      <p className="card-text card-text-upper">
                        {index.marka}
                        <br />
                        {index.model}
                      </p>
                      <p className="card-text">
                        <span>${index.price}</span>
                      </p>
                      <button
                        onClick={(event) => toggleCart(index)}
                        href="#addtocard"
                        className={`btn btn-light border-dark w-100 addtocard ${index.carted_style}`}
                      >
                        {index.carted_text}
                      </button>
                    </div>
                    {index.newOrNot === "New" ? (
                      <div className="sliders-top-left">
                        <h6>New</h6>
                      </div>
                    ) : (
                      false
                    )}
                    <div
                      onClick={(event) => toggleWish(index)}
                      className={`like ${index.liked}`}
                    ></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section className="S8-Pianos py-5">
        <div className="dflex full-center">
          <div className="w74">
            <Slider className="responsive" {...settings}>
              {getAletler("ELEKTRIK").map((index, key) => (
                <div key={key} className="slides">
                  <div className="card cards graycard">
                    <div className="card-img-top-container">
                      <Link key={key} to={`/butun_aletler/${index.id}`}>
                        <img className="card-img-top" src={index.img} alt="" />
                      </Link>
                    </div>
                    <div className="card-body">
                      <p className="card-text card-text-upper">
                        {index.marka}
                        <br />
                        {index.model}
                      </p>
                      <p className="card-text">
                        <span>${index.price}</span>
                      </p>
                      <button
                        onClick={(event) => toggleCart(index)}
                        href="#addtocard"
                        className={`btn btn-light border-dark w-100 addtocard ${index.carted_style}`}
                      >
                        {index.carted_text}
                      </button>
                    </div>
                    {index.newOrNot === "New" ? (
                      <div className="sliders-top-left">
                        <h6>Yeni</h6>
                      </div>
                    ) : (
                      false
                    )}
                    <div
                      onClick={(event) => toggleWish(index)}
                      className={`like ${index.liked}`}
                    ></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section className="S9-Viols py-5">
        <div className="dflex full-center">
          <div className="w74">
            <Slider className="responsive" {...settings}>
              {getAletler("OLCU").map((index, key) => (
                <div key={key} className="slides">
                  <div className="card cards graycard">
                    <div className="card-img-top-container">
                      <Link key={key} to={`/butun_aletler/${index.id}`}>
                        <img className="card-img-top" src={index.img} alt="" />
                      </Link>
                    </div>
                    <div className="card-body">
                      <p className="card-text card-text-upper">
                        {index.marka}
                        <br />
                        {index.model}
                      </p>
                      <p className="card-text">
                        <span>${index.price}</span>
                      </p>
                      <button
                        onClick={(event) => toggleCart(index)}
                        href="#addtocard"
                        className={`btn btn-light border-dark w-100 addtocard ${index.carted_style}`}
                      >
                        {index.carted_text}
                      </button>
                    </div>
                    {index.newOrNot === "New" ? (
                      <div className="sliders-top-left">
                        <h6>New</h6>
                      </div>
                    ) : (
                      false
                    )}
                    <div
                      onClick={(event) => toggleWish(index)}
                      className={`like ${index.liked}`}
                    ></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sec04Hero;
