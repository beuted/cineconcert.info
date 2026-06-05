import { Link } from 'react-router-dom'

export default function FlipBox({ title, subtitle, image, overlayColor, backColor, link }) {
  return (
    <Link to={link} className="flip-box-link">
      <div className="flip-box">
        <div
          className="flip-box-front"
          style={{
            backgroundImage: `url(${image})`,
            '--overlay-color': overlayColor,
          }}
        >
          <div className="flip-box-inner">
            <h1>{title}</h1>
          </div>
        </div>
        <div
          className="flip-box-back"
          style={{ '--back-color': backColor }}
        >
          <div className="flip-box-inner">
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <span className="btn-accent">Pour en savoir plus</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
