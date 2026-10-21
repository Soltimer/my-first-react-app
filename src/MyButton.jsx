function MyButton(props) {
    return (
        <button style=
        {{
        color: props.color, 
        boxShadow: `0 0 ${props.shadowSize}px gray`,
        fontSize: props.fontSize
        }}>
        
        {props.children}
        </button>
    );
}

export default Button;