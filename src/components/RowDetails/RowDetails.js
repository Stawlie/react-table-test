import React from "react";
import './styles.css'

function RowDetails(props) {
    return (
        <div className={'row-details'}>
            Выбран пользователь: <b>{props.row.firstName + ' ' + props.row.lastName}</b>
            Описание:
            <textarea value={props.row.description} readOnly/>
            Адрес проживания: <b>{props.row.address.streetAddress}</b>
            Город: <b>{props.row.address.city}</b>
            Провинция/штат: <b>{props.row.address.state}</b>
            Индекс: <b>{props.row.address.zip}</b>
        </div>
    )
}

export default RowDetails