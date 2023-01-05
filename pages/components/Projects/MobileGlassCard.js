function MobileGlassCard(props){
    return (
        <a href={props.linkTo}>
            <div className="glass-container py-[2vh] md:py-0 md:px-[7vw]">
                <div className="mobile-glass-card h-[50vh] md:h-[35vh] lg:h-[28vh] lg:w-[60vw] xl:w-[20vw] xl:h-[40vh]">
                    <div className=" text-white pt-[10vh] md:pt-[6vh] md:px-10 lg:px-6">
                        <div className="mobile-glass-content text-center">
                            <h2 className="font-montserratBold pr-2 pt-1 md:pt-2">{props.tempNum}</h2>
                            <h3 className="font-montserratRegular pt-2 sm:pt-0">{props.title}</h3>
                            <p className="font-montserratRegular md:mt-2 pt-3 px-6 leading-6 lg:text-[1vh] lg:blur-none">{props.description}</p>
                            <hr className="relative mt-6 mb-0 w-[5vw] m-auto opacity-20 border-[0.75px]"></hr>
                            <div className="justify-center text-center languages">
                                <p className="font-montserratRegular relative pt-8">{props.lf}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}


export default MobileGlassCard;
