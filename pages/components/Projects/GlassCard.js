import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';

function GlassCard(props){
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return (
        <div ref={tilt} {...rest} className="glass-container py-[2vh] md:py-0 md:px-[2vw]">
            <div className="glass-card">
                <div className="glass-content text-white">
                    <h2 className="font-montserratBold">01</h2>
                    <h3 className="font-montserratRegular">Card One</h3>
                    <p className="font-montserratRegular">Lorem ipsum dolor sit amet, consecteteur adipisicing elit, sed do
                        eiusmod tempor...
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GlassCard;