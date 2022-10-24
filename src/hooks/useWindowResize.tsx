import { useEffect, useState } from 'react'

const useWindowResize = () => {
const [width, setWidth]= useState<number>(window?.innerWidth)

    useEffect(() => {
        function handleWindowResize() {
            setWidth(window?.innerWidth)
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

  return {width}
}

export default useWindowResize