import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';

function DesktopGlassCard(props){
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return (
        <div ref={tilt} {...rest} className="glass-container py-[2vh] md:py-0 md:px-[2vw]">
            <div className="glass-card h-[40vh] md:w-[20vw] md:h-[50vh]">
                <div className=" text-white">
                    <div className="glass-content">
                        <h2 className="font-montserratBold">{props.tempNum}</h2>
                        <h3 className="font-montserratRegular">{props.title}</h3>
                        <p className="font-montserratRegular">Lorem ipsum dolor sit amet, consecteteur adipisicing elit, sed do
                            eiusmod tempor...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesktopGlassCard;