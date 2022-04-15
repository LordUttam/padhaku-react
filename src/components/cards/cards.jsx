function FeaturedCard(props) {
  const featImg = props.featImg;
  const imgAlt = props.featImgAlt;
  const cardTitle = props.cardTitle;
  const cardSubtitle = props.cardSubtitle;

  return (
    <div className="card card--horizontal">
      <div className="card__image">
        <img src={featImg} alt={imgAlt} />
      </div>

      <div className="card__header">
        <h2 className="card__title">{cardTitle}</h2>
        <h3 className="card__subtitle font--gray">{cardSubtitle}</h3>
      </div>

      <div className="card__actions m--y-0-5 p--y-1 btn__container">
        <button className="btn btn--primary shadow-hover--none p--y-2">
          Explore
        </button>
      </div>
    </div>
  );
}

function TrendingCard(props) {
  const trendImg = props.trendImg;
  const bookTitle = props.bookTitle;
  const author = props.author;
  const price = props.price;

  return (
    <div className="card">
      <div className="card__image">
        <img src={trendImg} alt={bookTitle} />
      </div>

      <div className="card__header">
        <h2 className="card__title">{bookTitle}</h2>
        <h3 className="card__subtitle font--gray">{author}</h3>
        <h3 className="card__subtitle font--gray">{price}</h3>
      </div>

      <div className="card__actions m--y-0-5 p--y-1 btn__container">
        <button className="btn btn--primary shadow-hover--none p--y-2">
          Buy Now
        </button>
        <button className="btn btn--outline shadow-hover--none p--y-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function ProductCard({ productDetails }) {
  const { prodImg, bookTitle, author, price, origPrice, inStock } =
    productDetails;

  return (
    <div className="card__container justify--center items--center m--y-1">
      <div className="card m--0-auto">
        <div className="card__image">
          <img src={prodImg} alt={bookTitle} />
        </div>

        <div className="card__header">
          <h2 className="card__title">{bookTitle}</h2>
          <h3 className="card__subtitle font--gray">{author}</h3>
          <p className="card__text">
            <span className="text--strike text--gray">₹{origPrice}</span>
            <span className="text--sm text--bold">₹{price}</span>
          </p>
        </div>

        <div className="card__actions m--y-0-5 p--y-1 btn__container">
          <button className="btn btn--primary shadow-hover--none p--y-2">
            Buy Now
          </button>
          <button className="btn btn--outline shadow-hover--none p--y-2">
            Add to Cart
          </button>
        </div>

        {inStock ? null : <span className="card__overlay">Out of Stock</span>}

        <span className="card__heart-btn flex flex--center">
          <i className="bx bxs-heart"></i>
        </span>
      </div>
    </div>
  );
}

export { FeaturedCard, TrendingCard, ProductCard };
