import React from "react";

function Search(props) {

    const [value, setValue] = React.useState('')

    return (
        <div className="input-group mb-3 mt-3">
            <input
                type="text"
                className="form-control"
                placeholder="Введите текст"
                aria-describedby="button-addon2"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    id="button-addon2"
                    style={{borderRadius: '4px' }}
                    onClick={() => props.onSearch(value)}
                >Найти
                </button>
            </div>
        </div>
    )
}

export default Search