import React from 'react';
import PropTypes from 'prop-types';
import { IMAGES } from '../../assets';


const Image = ({ 
  source,
  alt,
  title,
  isBg,
  style,
  className,
  children 
}) => {

  const getSource = x => {
    if(IMAGES[x]) {
      return IMAGES[x]
    }

    return x;
  }

  if(isBg) {
    return (
      <div
        style={{
          ...(source && { backgroundImage: `url(${getSource(source)})` }),
          ...style
        }}
        className={className}
      >
        {children}
      </div>
    )
  }

  return (
    <img 
      src={getSource(source)}
      alt={alt}
      title={title}
      style={style}
      className={className}
    />
  )
}

Image.propTypes = {
  source: PropTypes.any,
  alt: PropTypes.string,
  title: PropTypes.string,
  isBg: PropTypes.bool,
  style: PropTypes.any,
  className: PropTypes.any,
  children: PropTypes.any
};
Image.defaultProps = {
  source: null,
  alt: '',
  title: '',
  isBg: false,
  style: null,
  className: '',
  children: null
};


export default React.memo(Image);