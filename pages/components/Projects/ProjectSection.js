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
    const privilegeWalkLink = "https://github.com/danielxu04/privilegewalk";
    const codeManLink = "https://github.com/danielxu04/code-man";
    const simonGameLink = "https://danielxu04.github.io/simon-game/";
    const stockSentimentLink = "https://github.com/danielxu04/stock-sentiment/blob/main/notebook.ipynb"
    const creditCardApprovalsLink = "https://github.com/danielxu04/credit-card-approvals/blob/main/jupyter-notebook.ipynb"

    // languages and frameworks
    const expenseTrackerLF = "React.js, CSS";
    const privilegeWalkLF = "Next.js, Tailwind, Firebase";
    const codeManLF = "Java";
    const simonGameLF = "HTML/CSS, JavaScript, jQuery";
    const stockSentimentLF = "pandas, Matplotlib, VADER";
    const creditCardApprovalsLF = "pandas, NumPy, scikit-learn";



    return (
        <div id="projects" className="mb-[10vh] md:mb-[3vh] lg:mb-0 flex flex-col">
            <div className="flex flex-col center-items justify-center xl:hidden">
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="Expense Tracker" 
                        tempNum='01'
                        description="An expense tracker web application programmed using React, including an expense graph to help users visualize their annual expenses, relative to
                        their monthly purchases."
                        linkTo = {expenseTrackerLink}
                        lf = {expenseTrackerLF}
                    />
                </div>
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="Privilege Walk" 
                        tempNum='02'
                        description="An interactive Privilege Walk built with Next.js and Tailwind, a branch of the Discourse Agency
                        Website. A game-based exercise that helps users recognize various privileges in society."
                        linkTo = {privilegeWalkLink}
                        lf = {privilegeWalkLF}
                    />
                </div>
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="CodeMan" 
                        tempNum='03'
                        description="A 'Pokemon' inspired 2D game coded using Java OOP, based with JPanel, JFrame, and Graphics2D. Features self-created
                        pixel art, game tiles, and a 70x60 tile world map."
                        linkTo = {codeManLink}
                        lf = {codeManLF}
                    />
                </div>
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="Simon Game" 
                        tempNum='04'
                        description="Put your memory skills to the test with a childhood classic, the Simon Game. Integrates CSS animations and sound effects
                        with button clicks using jQuery to enhance UX."
                        linkTo = {simonGameLink}
                        lf = {simonGameLF}
                    />
                </div>
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="Stock Sentiment Analysis" 
                        tempNum='05'
                        description="Data Manipulation project with Python and pandas to scrape news headlines for Facebook and Tesla, then apply sentiment 
                        analysis to produce investment insight."
                        linkTo = {stockSentimentLink}
                        lf = {stockSentimentLF}
                    />
                </div>
                <div data-aos="fade-up">
                    <MobileGlassCard 
                        title="Credit Card Approvals" 
                        tempNum='06'
                        description="Machine learning model that predicts if credit card application will get approved. Employs Logistic Regression
                        models to visualize approval status."
                        linkTo = {creditCardApprovalsLink}
                        lf = {creditCardApprovalsLF}
                    />
                </div>
            </div>
            <div className="justify-center hidden xl:flex xl:flex-row xl:pt-[6vh] xl:pb-[2vh]">
                <DesktopGlassCard 
                    title="Expense Tracker" 
                    tempNum='01'
                    description="An expense tracker web application programmed using React, including an expense graph to help users visualize their annual expenses, relative to
                    their monthly purchases."
                    linkTo = {expenseTrackerLink}
                    lf = {expenseTrackerLF}
                />
                <DesktopGlassCard 
                    title="Privilege Walk" 
                    tempNum='02'
                    description="An interactive Privilege Walk built with Next.js and Tailwind, a branch of the Discourse Agency
                    Website. A game-based exercise that helps users recognize various privileges in society."
                    linkTo = {privilegeWalkLink}
                    lf = {privilegeWalkLF}
                />
                <DesktopGlassCard 
                    title="CodeMan" 
                    tempNum='03'
                    description="A 'Pokemon' inspired 2D game coded using Java OOP, based with JPanel, JFrame, and Graphics2D. Features self-created
                    pixel art, game tiles, and a 70x60 tile world map."
                    linkTo = {codeManLink}
                    lf = {codeManLF}
                />
            </div>
            <div className="justify-center hidden xl:flex xl:flex-row xl:pt-[6vh] xl:pb-[2vh]" data-aos='fade-up'>
                <DesktopGlassCard 
                    title="Simon Game" 
                    tempNum='04'
                    description="Put your memory skills to the test with a childhood classic, the Simon Game. Integrates CSS animations and sound effects
                    with button clicks using jQuery to enhance UX."
                    linkTo = {simonGameLink}
                    lf = {simonGameLF}
                />
                <DesktopGlassCard 
                    title="Stock Sentiment" 
                    tempNum='05'
                    description="Data Manipulation project with Python and pandas to scrape news headlines for Facebook and Tesla, then apply sentiment 
                    analysis to produce investment insight."
                    linkTo = {stockSentimentLink}
                    lf = {stockSentimentLF}
                />
                <DesktopGlassCard 
                    title="Credit Approvals" 
                    tempNum='06'
                    description="Machine learning model that predicts if acredit card application will get approved. Employs Logistic Regression
                    models to visualize how various features affect approval status."
                    linkTo = {creditCardApprovalsLink}
                    lf = {creditCardApprovalsLF}
                />
            </div>
        </div>
    );
}


export default ProjectSection;