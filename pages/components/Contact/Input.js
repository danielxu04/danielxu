function Input(props){
    return (
        <input 
            className = "rounded-md bg-zinc-800 px-4 p-3 mt-8 font-montserratRegular text-purple-300 focus:outline-none w-[30vw] "
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