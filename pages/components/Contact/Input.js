function Input(props){
    return (
        <input 
            className = "rounded-md bg-zinc-800 px-4 py-3 text-purple-300 focus:outline-none"
            name = {props.name}
            id = {props.id}
            type = {props.type}
            placeholder = {props.placeholder}
            onChange = {props.onChange}
            onBlur = {props.onBlur}
            value = {props.value}
        />
    );
}

export default Input;