function NavButton(props){
    return(
        <a href={props.id} className="block text-py-2 px-5 lg:px-7 font-ubuntuMedium text-purple-800 purple-glow rounded text-lg hover:text-violet-500 hover:scale-110 hover:translate-y-1">{props.text}</a>
    );
}

export default NavButton;