import React from 'react';
import './loader.css';

type LoaderPropTypes = {
  color?: string;
};

function Loader({ color = '#fff' }: LoaderPropTypes) {
  return (
    <div
      className="spin"
      style={{ '--bg-color': color } as React.CSSProperties}
    />
  );
}

Loader.defaultProps = {
  color: '#fff',
};

export default Loader;
