import './Button.css'
function Button(props){
    return(
        <div className="btn" style={{backgroundColor:props.BackGroundColor,color:props.color}}>{props.text}</div>
    );
}
export default Button;