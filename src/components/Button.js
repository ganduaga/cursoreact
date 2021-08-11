const Button = (props) =>{
return(
  <div>
  <button className='btn' onClick={props.onClick}>{props.text}
  </button>
  </div>
)
}
export default Button
