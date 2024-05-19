import { useEffect, useState } from "react";

function UseWindowResize ()
{

 
    const [ windowSize, seetWindowSize ] = useState( {
        width: undefined,
        height: undefined,
    } );

    useEffect( () =>
    {

        function handleResize ()
        {
            seetWindowSize( {
                width: window.innerWidth,
                height: window.innerHeight,
            } );
        }
        window.addEventListener( "resize", handleResize );

        handleResize ();

        return ()=>window.removeEventListener("resize",handleResize)
    }, [] );
    return windowSize;
}
export default UseWindowResize