

function NavButton(props){
    return(
        <a href={props.id} className="block text-py-2 pr-4 pl-3 text-white rounded hover:bg-violet-500">{props.text}</a>
    );
}

export default NavButton;