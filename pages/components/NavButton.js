

function NavButton(props){
    return(
        <a href={props.id} className="block text-py-2 pr-4 pl-3 text-violet-600 rounded hover:text-violet-500">{props.text}</a>
    );
}

export default NavButton;