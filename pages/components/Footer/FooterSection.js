import FooterIcons from './FooterIcons';

function FooterSection(){
    return (
        <div className="text-center justify-center bg-transparent py-3 block">
            <div className="inline-block text-right">
                <p className="text-purple-600 font-montserratRegular lighter-purple-glow pl-[27vw] text-md">Created and designed by Daniel Xu, 2023.</p>
            </div>
            <div className="lg:pl-[1.5vw] inline-block text-left">
                <FooterIcons />
            </div>
        </div>
    );
}

export default FooterSection;