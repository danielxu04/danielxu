function MobileNavButton(props){
    return(
        <a 
            href={props.id} 
            className="nav-items text-py-2 px-5 lg:px-7 font-ubuntuMedium text-purple-800 purple-glow rounded text-lg"
        >{props.text}</a>
    );
}

export default MobileNavButton;