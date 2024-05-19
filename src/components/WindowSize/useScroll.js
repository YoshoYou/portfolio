import { useState } from "react";


function useScroll() 
{
    const [ totalWidth, setWidth ] = useState( 0 );
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    window.onscroll = () =>
    {
        const currentHeight = document.documentElement.scrollTop;
        setWidth(( currentHeight / totalHeight ) * 100);
        return totalWidth;
        
    }
    
}
export default useScroll;