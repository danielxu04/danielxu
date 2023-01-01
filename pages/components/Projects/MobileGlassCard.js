function MobileGlassCard(props){
    return (
        <a href={props.linkTo}>
            <div className="glass-container py-[2vh] md:py-0 md:px-[7vw]">
                <div className="glass-card h-[50vh] md:h-[35vh] lg:w-[20vw] lg:h-[50vh]">
                    <div className=" text-white pt-10 pb-5 md:pt-0 md:pb-0 md:px-10">
                        <div className="glass-content">
                            <h2 className="font-montserratBold">{props.tempNum}</h2>
                            <h3 className="font-montserratRegular">{props.title}</h3>
                            <p className="font-montserratRegular md:mt-2">{props.description}</p>
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
