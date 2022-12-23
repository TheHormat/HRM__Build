import React from "react";
import { useRouteMatch } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import "../css/AletSehifesi.css";
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
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Alet() {
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

  const state = useSelector((state) => state.aletlerReducer);
  useSelector((state) => state.basketReducerWish);
  useSelector((state) => state.basketReducerCart);
  useSelector((count) => count.countReducerCart);
  useSelector((count) => count.countReducerWish);

  const match = useRouteMatch();
  const currentItem = state.filter(
    (index) => Number(index.id) === Number(match.params.aletId)
  );

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
      {currentItem.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        currentItem.map((index, key) => (
          <section key={key}>
            <div className="dflex jc-center">
              <div className="w74">
                <div key={key} className="basket-element-container">
                  <div className="basket-element-left">
                    <div className="basket-element-image-zone">
                      <img className="basket-image" src={index.img} alt="" />
                      <div
                        onClick={(event) => toggleWish(index)}
                        className={`like ${index.liked}`}
                      ></div>
                      {index.newOrNot === "New" ? (
                        <div className="basket-new">
                          <p>Yeni</p>
                        </div>
                      ) : (
                        false
                      )}
                    </div>
                  </div>
                  <div className="basket-element-text-zone">
                    <div className="basket-element-text-zone-centering">
                      <h1 className="">{index.marka}&nbsp;</h1>
                      <h2 className="">{index.model}&nbsp;</h2>
                      <h4 className="">{index.description}&nbsp;</h4>
                      <h3 className="">${index.price}</h3>
                      <button
                        onClick={(event) => toggleCart(index)}
                        className={`basket-add-to-card ${index.carted_style}`}
                      >
                        {index.carted_text}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))
      )}
      <div className="dflex jc-center">
        <div className="w74">
          <h1 className="dflex jc-center my-5 px-2">Oxşar məhsullar</h1>
          <Slider className="responsive" {...settings}>
            {getAletler(currentItem[0].alet_novu).map((index, key) =>
              index.id === currentItem[0].id ? null : (
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
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Alet;
