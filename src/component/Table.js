import React from 'react';

const Table = ({ data }) => {
    return <table className="table">
        <thead>
            <tr>
                <th className="table__th">Name</th>
                <th className="table__th">Area</th>
                <th className="table__th">Address</th>
            </tr>
        </thead>
        <tbody>
            {data.map((el, i) => <tr key={i}>
                <td className="table__td">{el.name}</td>
                <td className="table__td">{el.area}</td>
                <td className="table__td">{el.address}</td>
            </tr>)}
        </tbody>
    </table>
}

export default Table;