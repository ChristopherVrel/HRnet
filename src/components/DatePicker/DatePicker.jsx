import "./DatePicker.css";
import getFormatedDate from "../../utils/getFormatedDate";

const DatePicker = ({
    style = {},
    className = [],
    label = "Date",
    id = "date",
    autoComplete = "",
    value = "",
    onChange
}) => {
    const handleDate = (e) => {
        return getFormatedDate(new Date(e.target.value));
    }

    return (
        <div style={style} className={(className.length > 0) ? className.join(" ") : ""}>
            <label htmlFor={id}>{label}</label>
            <input autoComplete={autoComplete} id={id} name={id} type="date" value={value} onChange={(e) => onChange(handleDate(e))} />
        </div>
    );
}

export default DatePicker;