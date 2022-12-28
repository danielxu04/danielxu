function MobileGlassCard(props){
    return (
        <a href={props.linkTo}>
            <div className="glass-container py-[2vh] md:py-0 md:px-[2vw]">
                <div className="glass-card h-[40vh] lg:w-[20vw] lg:h-[50vh]">
                    <div className=" text-white">
                        <div className="glass-content">
                            <h2 className="font-montserratBold">{props.tempNum}</h2>
                            <h3 className="font-montserratRegular">{props.title}</h3>
                            <p className="font-montserratRegular">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}


export default MobileGlassCard;
