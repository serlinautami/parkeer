import { memo } from 'react';
import './styles.scss';

const FormLabel = ({ children }) => {
  return (
    <label className="form-label">{children}</label>
  )
}

export default memo(FormLabel);