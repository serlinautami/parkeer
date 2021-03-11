import { memo, useState, useEffect } from 'react';
import './styles.scss';
import useDimensions from "react-use-dimensions";

const AppContainer = ({ children }) => {

  const [appContainerRef, size] = useDimensions();
  const [minSize, setMinSize] = useState(null);

  


  useEffect(() => {
    if(!minSize) {
      setMinSize(size?.height)      
    }
  }, [minSize, size?.height])

  console.log('minSize', minSize)



  return (
    <div ref={appContainerRef} className="app-container" {...(minSize && { style: { minHeight: minSize } })}>
      {children}
    </div>
  )
}

export default memo(AppContainer);