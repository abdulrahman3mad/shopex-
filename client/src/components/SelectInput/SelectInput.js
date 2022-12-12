function SelectInput({ optionValues, labelTxt, defaultValue }) {
    return (
        <>
            <label htmlFor="items-per-page">{labelTxt} :</label>
            <select className="form-select primary-border-focus ms-3" aria-label="Default select example" id="items-per-page" defaultValue={defaultValue}>
                {optionValues.map((option) => <option key={option} value={option}>{option}</option>)}
            </select >
        </>
    )
}

export default SelectInput