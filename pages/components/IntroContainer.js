function IntroContainer(){
    return (
        <div className="bg-black pt-6 flex flex-col w-screen md:flex-row">
            <div className="w-full md:w-1/2"></div>
            <div className="py-14 flex flex-col w-full items-center md:w-1/2">
                <div>
                    <h1 className="font-montserratBold text-5xl md:text-7xl text-violet-600">Hi.</h1>
                    <h1 className="font-montserratBold text-5xl md:text-7xl text-violet-600">I'm Daniel.</h1>
                </div>
            </div>
        </div>
    );
}

export default IntroContainer;