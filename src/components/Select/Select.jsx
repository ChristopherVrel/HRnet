import "./Select.css";

const Select = ({
    className,
    style,
    items = [],
    value,
    setValue,
    label = "Label",
    id = "label",
    nested
}) => {
    return (
        <div style={(style) ? style : null} className={`select${(className) ? ` ${className}` : ""}`}>
            <label htmlFor={id}>{label}</label>
            <select   
                onChange={e => setValue(e.target.value)} 
                value={value}
                name={id} id={id}>
                {
                    items.map((e, i) => <option key={`${id}-${i}`}>{(nested && e.hasOwnProperty(nested)) ? e[nested] : e}</option>)
                }
            </select>
        </div>
    );
}

export default Select;