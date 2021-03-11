import { memo } from 'react';
import './styles.scss';

const FormGroup = ({ children }) => {
  return (
    <div className="form-group">
      {children}
    </div>
  )
}

export default memo(FormGroup);