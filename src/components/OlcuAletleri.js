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

function Violins() {
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
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1488,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className="S7-Guitars py-5">
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
  );
}

export default Violins;
