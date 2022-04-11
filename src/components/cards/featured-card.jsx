export default function FeaturedCard(props) {
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
