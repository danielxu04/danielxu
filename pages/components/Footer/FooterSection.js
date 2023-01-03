import FooterIcons from './FooterIcons';

function FooterSection(){
    return (
        <div className="flex flex-row text-center justify-center bg-transparent py-3">
            <div className="container mx-auto justify-between flex flex-wrap items-center">
                <p className="text-purple-300 font-montserratRegular purple-300-glow pl-[40vw]">Created by Daniel Xu 2023.</p>
                <FooterIcons />
            </div>
        </div>
    );
}

export default FooterSection;