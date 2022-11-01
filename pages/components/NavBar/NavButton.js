

function NavButton(props){
    return(
        <a href={props.id} className="block text-py-2 pr-7 pl-7 font-robotoMonoSemiBold text-violet-600 rounded hover:text-violet-500 text-lg">{props.text}</a>
    );
}

export default NavButton;