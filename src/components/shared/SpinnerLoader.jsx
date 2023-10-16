import React from 'react';

//Spinner
import { Dna, ThreeCircles } from 'react-loader-spinner';

const SpinnerLoader = () => {
    return (
        <div style={{ width: "100%" ,minHeight: "100%" ,padding: "1rem" }} >  
            <ThreeCircles
                height="200"
                width="100%"
                color="#c1c1ff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    );
};

export default SpinnerLoader;