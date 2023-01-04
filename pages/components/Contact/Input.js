function Input(props){
    return (
        <input 
            className = "rounded-md bg-zinc-800 px-4 p-3 mt-[6vh] font-montserratRegular text-purple-300 purple-300-glow form-purple-box-shadow inline-block mx-auto text-left focus:outline-none w-[45vw]"
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