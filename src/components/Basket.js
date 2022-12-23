import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  addToWish,
  deleteFromWish,
  addCount,
  removeCount,
  addCountWish,
  removeCountWish,
} from "../redux";
import { Link } from "react-router-dom";
import "../css/Basket.css";

function Basket() {
  useSelector((count) => count.countReducerWish);
  const countReducerCart = useSelector((count) => count.countReducerCart);
  useSelector((state) => state.basketReducerWish);
  const basketReducerCart = useSelector((state) => state.basketReducerCart);

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
      <div className="dflex jc-center">
        <div className="w74">
          {basketReducerCart.map((index, key) => (
            <div key={key} className="basket-element-container">
              <div className="basket-element-left">
                <div className="basket-element-image-zone">
                  <Link key={key} to={`/butun_aletler/${index.id}`}>
                    <img className="basket-image" src={index.img} alt="" />
                  </Link>
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
          ))}
          {countReducerCart < 0.005 ? (
            <div className="basket-empty dflex jc-center ai-center">
              <p>
                <span>Səbətinizə</span>
                <br />
                məhsul əlavə etməmisiniz
              </p>
            </div>
          ) : (
            <div className="count-container">
              <p>Hamısı birlikdə : {countReducerCart}$</p>
              <button className="basket-add-to-card">Alış et</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Basket;
