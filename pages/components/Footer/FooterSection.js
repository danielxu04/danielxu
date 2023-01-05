import FooterIcons from './FooterIcons';

function FooterSection(){
    return (
        <div className="bg-transparent pt-10 2xs:pt-3 py-3 flex flex-col xl:block">
            <div className="flex justify-center pt-2 xl:pl-[1.5vw] xl:hidden xl:text-left">
                <FooterIcons />
            </div>
            <div className="flex justify-center xl:inline-block xl:text-right">
                <p className="text-purple-600 text-[0.65rem] 2xs:text-sm font-montserratRegular lighter-purple-glow xl:pl-[23vw] 2xl:pl-[27vw] xl:text-md">Created and designed by Daniel Xu, 2023.</p>
            </div>
            <div className="hidden justify-center pt-2 xl:pl-[1.5vw] xl:inline-block xl:text-left">
                <FooterIcons />
            </div>
        </div>
    );
}

export default FooterSection;