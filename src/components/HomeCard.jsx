import { motion } from 'framer-motion';
import { STAGGER_ITEM } from '../constants';

/**
 * A single card in the home section grid.
 * Receives all data via props – pure presentational component (SRP).
 *
 * @param {object}  props
 * @param {string}  props.id         - Element id for the outer div.
 * @param {string}  props.imageSrc   - Image URL.
 * @param {string}  props.imageAlt   - Alt text for the image.
 * @param {string}  props.imageClass - Extra class names on the img tag.
 * @param {string}  props.heading    - Card heading.
 * @param {string}  props.bodyText   - Paragraph body text.
 * @param {string}  props.linkHref   - href for the CTA button.
 * @param {string}  props.linkClass  - Extra class names on the CTA button.
 * @param {string}  props.linkLabel  - Text label for the CTA button.
 */
const HomeCard = ({
  id,
  imageSrc,
  imageAlt,
  imageClass,
  heading,
  bodyText,
  linkHref,
  linkClass,
  linkLabel,
}) => (
  <motion.div className="col-sm-4" id={id} variants={STAGGER_ITEM}>
    <img
      src={imageSrc}
      className={`img-fluid rounded-circle ${imageClass}`}
      alt={imageAlt}
      style={{ width: '98%' }}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
    <div className="homeText">
      <h3 className="media-heading">{heading}</h3>
      <p>{bodyText}</p>
      <a href={linkHref} className={`btn btn-primary btn-lg ${linkClass}`}>
        {linkLabel}
      </a>
    </div>
  </motion.div>
);

export default HomeCard;
