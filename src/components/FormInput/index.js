import { memo } from 'react';
import './styles.scss';

const FormInput = ({ ...props }) => {
  return (
    <input className="form-input" {...props} />
  )
}


export default memo(FormInput);