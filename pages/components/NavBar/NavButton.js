function NavButton(props){
    return(
        <a href={props.id} className="block text-py-2 pr-7 pl-7 font-robotoMonoSemiBold text-purple-800 purple-glow rounded text-lg hover:text-violet-500 hover:scale-110 hover:translate-y-1">{props.text}</a>
    );
}

export default NavButton;