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

export { FeaturedCard, TrendingCard };
