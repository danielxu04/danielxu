import FooterIcons from './FooterIcons';

function FooterSection(){
    return (
        <div className="flex flex-row text-center justify-center bg-transparent py-3">
            <div className="container mx-auto justify-between flex flex-wrap items-center">
                <p className="text-purple-800 font-montserratRegular purple-glow pl-[35vw]">Made by Daniel Xu in 2023.</p>
                <FooterIcons />
            </div>
        </div>
    );
}

export default FooterSection;