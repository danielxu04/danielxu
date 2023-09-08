import {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import DesktopGlassCard from "./DesktopGlassCard";
import MobileGlassCard from "./MobileGlassCard";

function ProjectSection(){

    // initialize aos
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    // hyperlinks
    const expenseTrackerLink = "https://expensetracker-dx.netlify.app/";
    const privilegeWalkLink = "https://privilegewalk.ca/";
    const dreamscapeLink = "https://uw-dreamscape.vercel.app/"
    const codeManLink = "https://github.com/danielxu04/code-man";
    const simonGameLink = "https://danielxu04.github.io/simon-game/";
    const stockSentimentLink = "https://github.com/danielxu04/stock-sentiment/blob/main/notebook.ipynb";
    const creditCardApprovalsLink = "https://github.com/danielxu04/credit-card-approvals/blob/main/jupyter-notebook.ipynb";
    const dynamicForexTraderLink = 'https://github.com/danielxu04/DynamicForexTrader';
    const derivaPriceLink = 'https://github.com/danielxu04/DerivaPrice';
    const flavorFeedLink = 'https://github.com/Daniel-Mindy/FlavorFeed';


    // languages and frameworks
    const expenseTrackerLF = "React.js, JavaScript, CSS";
    const privilegeWalkLF = "Next.js, Tailwind, Firebase";
    const codeManLF = "Java";
    const simonGameLF = "HTML/CSS, JavaScript, jQuery";
    const stockSentimentLF = "Python, Pandas, Matplotlib, NLTK";
    const creditCardApprovalsLF = "Python, Pandas, NumPy, SciKit";
    const dreamscapeLF = "Next.js, Tailwind, Firebase, TypeScript, DALLE-2"
    const dynamicForexTraderLF = "Python, Pandas, OANDA, TensorFlow, Keras, SciKit";
    const derivaPriceLF = 'Python, Pandas, SciPy, Numpy, Matplotlib, MATLAB'
    const flavorFeedLF = 'React.js, TypeScript, Python, Flask, MySQL, PlanetScale'



    return (
        <div id="projects" className="mb-[10vh] md:mb-[3vh] lg:mb-0 flex flex-col">
            <div className="flex flex-col center-items justify-center xl:hidden">
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="ForexTrader" 
                        tempNum='01'
                        description="An algorithmic trading system featuring a deep neural network, dynamically implementable strategies, and vectorized/iterative backtesters 
                            for the facilitation of Forex trading."
                        linkTo = {dynamicForexTraderLink}
                        lf = {dynamicForexTraderLF}
                    />
                </div>
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="DerivaPrice" 
                        tempNum='02'
                        description="A theoretical derivative pricing calculator using pricing models such as Black-Scholes, Binomial, Markowitz, along with 
                        Monte Carlo simulations for put/call option pricing."
                        linkTo = {derivaPriceLink}
                        lf = {derivaPriceLF}
                    />
                </div>
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="Dreamscape" 
                        tempNum='03'
                        description="An innovative 'dream journal' social media platform, integrating generative machine learning to produce a unique/cohesive 
                        image based on user prompts."
                        linkTo = {dreamscapeLink}
                        lf = {dreamscapeLF}
                    />
                </div>
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="FlavorFeed" 
                        tempNum='04'
                        description="An application all about recipes and food! Connect with others, save your favourite recipes, and craft novel culinary creations.
                        Finding a recipe is as easy as listing your ingredients!"
                        linkTo = {flavorFeedLink}
                        lf = {flavorFeedLF}
                    />
                </div>
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="Stock Sentiment Analysis" 
                        tempNum='05'
                        description="Data Manipulation project with Python and Pandas to scrape news headlines for Facebook and Tesla, then applying sentiment 
                        analysis to produce investment insight."
                        linkTo = {stockSentimentLink}
                        lf = {stockSentimentLF}
                    />
                </div>
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="Credit Card Approvals" 
                        tempNum='06'
                        description="Machine learning model that predicts if acredit card application will get approved. Employs Logistic Regression
                        models to visualize how various attributes affect approval status."
                        linkTo = {creditCardApprovalsLink}
                        lf = {creditCardApprovalsLF}
                    />
                </div>
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="CodeMan" 
                        tempNum='07'
                        description="A 'Pokemon' inspired 2D game coded using Java OOP, based with JPanel, JFrame, and Graphics2D. Features self-created
                        pixel art, game tiles, and a 70x60 tile world map."
                        linkTo = {codeManLink}
                        lf = {codeManLF}
                    />
                </div>
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="Expense Tracker" 
                        tempNum='08'
                        description="An expense tracker web application programmed using React, featuring an expense graph to help users visualize their annual expenses, relative to
                        their monthly purchases."
                        linkTo = {expenseTrackerLink}
                        lf = {expenseTrackerLF}
                    />
                </div>
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="Simon Game" 
                        tempNum='09'
                        description="Put your memory skills to the test with a childhood classic, the Simon Game. Integrates CSS animations and sound effects
                        with button clicks using jQuery to enhance UX."
                        linkTo = {simonGameLink}
                        lf = {simonGameLF}
                    />
                </div>
            </div>
            <div className="justify-center hidden xl:flex xl:flex-row xl:pt-[6vh] xl:pb-[2vh]" data-aos="fade-up">
                <DesktopGlassCard 
                    title="ForexTrader" 
                    tempNum='01'
                    description="An algorithmic trading system featuring a deep neural network, dynamically implementable strategies, and vectorized/iterative backtesters for Forex trading."
                    linkTo = {dynamicForexTraderLink}
                    lf = {dynamicForexTraderLF}
                />
                <DesktopGlassCard 
                    title="DerivaPrice" 
                    tempNum='02'
                    description="A theoretical derivative pricing calculator using pricing models such as Black-Scholes, Binomial, Markowitz, along with 
                    Monte Carlo simulations for put/call option pricing."
                    linkTo = {derivaPriceLink}
                    lf = {derivaPriceLF}
                />
                <DesktopGlassCard 
                    title="Dreamscape" 
                    tempNum='03'
                    description="An innovative 'dream journal' social media platform, integrating generative machine learning to produce a unique/cohesive 
                    image based on user prompts."
                    linkTo = {dreamscapeLink}
                    lf = {dreamscapeLF}
                />
            </div>
            <div className="justify-center hidden xl:flex xl:flex-row xl:pt-[6vh] xl:pb-[2vh]" data-aos="fade-up">
                <DesktopGlassCard 
                    title="FlavorFeed" 
                    tempNum='04'
                    description="An application all about recipes and food! Connect with others, save your favourite recipes, and craft novel culinary creations.
                    Finding a recipe is as easy as listing your ingredients!"
                    linkTo = {flavorFeedLink}
                    lf = {flavorFeedLF}
                />
                <DesktopGlassCard 
                    title="Stock Sentiment" 
                    tempNum='05'
                    description="Data Manipulation project with Python and Pandas to scrape news headlines for Facebook and Tesla, then applying sentiment 
                    analysis to produce investment insight."
                    linkTo = {stockSentimentLink}
                    lf = {stockSentimentLF}
                />
                <DesktopGlassCard 
                    title="Credit Approvals" 
                    tempNum='06'
                    description="Machine learning model that predicts if acredit card application will get approved. Employs Logistic Regression
                    models to visualize how various attributes affect approval status."
                    linkTo = {creditCardApprovalsLink}
                    lf = {creditCardApprovalsLF}
                />
            </div>
            <div className="justify-center hidden xl:flex xl:flex-row xl:pt-[6vh] xl:pb-[2vh]" data-aos='fade-up'>
                <DesktopGlassCard 
                    title="Expense Tracker" 
                    tempNum='07'
                    description="An expense tracker web application programmed using React, featuring an expense graph to help users visualize their annual expenses, relative to
                    their monthly purchases."
                    linkTo = {expenseTrackerLink}
                    lf = {expenseTrackerLF}
                />
                <DesktopGlassCard 
                    title="CodeMan" 
                    tempNum='08'
                    description="A 'Pokemon' inspired 2D game coded using Java OOP, based with JPanel, JFrame, and Graphics2D. Features self-created
                    pixel art, game tiles, and a 70x60 tile world map."
                    linkTo = {codeManLink}
                    lf = {codeManLF}
                />
                <DesktopGlassCard 
                    title="Simon Game" 
                    tempNum='09'
                    description="Put your memory skills to the test with a childhood classic, the Simon Game. Integrates CSS animations and sound effects
                    with button clicks using jQuery to enhance UX."
                    linkTo = {simonGameLink}
                    lf = {simonGameLF}
                />
            </div>
        </div>
    );
}


export default ProjectSection;