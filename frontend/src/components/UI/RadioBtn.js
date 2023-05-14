import './RadioBtn.scss'

const RadioButton = (props) => {

    const isSelected = props.checked === props.value

  return (
    <>
      <input
      className='radio-btn'
        type="radio"
        name={props.name}
        value={props.value}
        id={props.name + '-' + props.value}
        checked={isSelected}
        onChange={props.onChange}
      />
      <label htmlFor={props.name + '-' + props.value} className={isSelected ? 'active' : ''}>{props.title}</label>
    </>
  );
};

export default RadioButton;
