import React, { Fragment } from "react";
import { connect } from "react-redux";
import { url } from "gravatar";
import { Link } from "react-router-dom";

const Tours = ({ product }) => {
  return (
    <Fragment>
      <div className="tours">
        <div className="title">
          <h1>We have the best tours</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            eligendi sapiente eaque nisi? Ducimus, adipisci consequuntur dolorem
            inventore molestiae earum?
          </p>
        </div>
        <div className="flex-row">
          {product &&
            product.products.slice(0, 3).map((item) => (
              <Fragment key={item._id}>
                <div
                  style={{
                    backgroundImage: `url(
                    http://localhost:5000/${item.images[0]}
                  )`,
                  }}
                  className="tour"
                >
                  <div className="date">12 janvier 2995</div>
                  <div className="text">
                    <h1>{item.title}</h1>
                    <h4>From {item.price}$</h4>
                    <div className="star">⭐ ⭐ ⭐ ⭐ ⭐</div>
                  </div>
                  <div className="more">
                    <Link to={`/product/${item._id}`}>
                      <button className="btn">SEE MORE </button>
                    </Link>
                  </div>
                  <div className="overlay"></div>
                </div>
              </Fragment>
            ))}
        </div>
      </div>
      {product &&
        product.products.map((item) =>
          item.title === "Bahamas" ? (
            <div
              style={{
                backgroundImage: `url(
                http://localhost:5000/${item.images[1]}
              )`,
              }}
              className="deluxe"
            >
              <div className="white-delux">
                <div className="content">
                  <div className="title">
                    <h1> {item.title} DELUXE PACKAGE</h1>
                    <h4>⭐ ⭐ ⭐ ⭐ ⭐</h4>
                  </div>
                  <div className="text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Assumenda expedita unde deleniti eveniet totam aperiam,
                    repudiandae ducimus officia quas quia ratione et ab rerum
                    accusamus delectus amet eos facere! Nostrum expedita
                    tempora, ratione doloribus commodi corrupti autem doloremque
                    nobis inventore.
                  </div>
                  <div className="more">
                    <Link to={`/product/${item._id}`}>
                      <button className="btn primary">SEE MORE</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="overlay"></div>
            </div>
          ) : null
        )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps)(Tours);
