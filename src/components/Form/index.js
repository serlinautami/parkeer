import { memo } from 'react';


const Form = ({ children, ...props }) => {
  return (
    <form className="form" {...props}>{children}</form>
  )
}

export default memo(Form);