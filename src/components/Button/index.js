import { memo } from 'react';
import './styles.scss';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  )
}


export default memo(Button);