import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef, } from 'react';

function DesktopGlassCard(props){
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        const executeTilt = async () => {
            VanillaTilt.init(tilt.current, options);
        };
        executeTilt();
    }, []);


    return (
        <a href={props.linkTo}>
            <div ref={tilt} {...rest} className="glass-container py-[2vh] md:py-0 md:px-[2vw]">
                <div onClick="" className="glass-card h-[40vh] md:w-[20vw] md:h-[50vh]">
                    <div className=" text-white">
                        <div className="glass-content">
                            <h2 className="font-montserratBold">{props.tempNum}</h2>
                            <h3 className="font-montserratRegular">{props.title}</h3>
                            <p className="font-montserratRegular pt-2">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default DesktopGlassCard;