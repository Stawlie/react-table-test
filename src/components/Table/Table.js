import React from "react";
import './styles.css'
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/all'

export default function Table(props) {
    return (
        <table className={'table'}>
            <thead>
                <tr>
                    <th onClick={props.onSort.bind(null, 'id')} className={'pointer'}>
                        id
                        {props.sortId === 'id' ? props.sortType === 'desc' ? <BsFillCaretDownFill /> : <BsFillCaretUpFill /> : null}
                    </th>
                    <th onClick={props.onSort.bind(null, 'firstName')} className={'pointer'}>
                        firstName
                        {props.sortId === 'firstName' ? props.sortType === 'desc' ? <BsFillCaretDownFill /> : <BsFillCaretUpFill /> : null}
                    </th>
                    <th onClick={props.onSort.bind(null, 'lastName')} className={'pointer'}>
                        lastName
                        {props.sortId === 'lastName' ? props.sortType === 'desc' ? <BsFillCaretDownFill /> : <BsFillCaretUpFill /> : null}
                    </th>
                    <th onClick={props.onSort.bind(null, 'email')} className={'pointer'}>
                        email
                        {props.sortId === 'email' ? props.sortType === 'desc' ? <BsFillCaretDownFill /> : <BsFillCaretUpFill /> : null}
                    </th>
                    <th onClick={props.onSort.bind(null, 'phone')} className={'pointer'}>
                        phone
                        {props.sortId === 'phone' ? props.sortType === 'desc' ? <BsFillCaretDownFill /> : <BsFillCaretUpFill /> : null}
                    </th>
                </tr>
            </thead>
            <tbody>
            {props.data.map((item, index) => (
                <tr key={index} onClick={props.onSelect.bind(null, item)}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}