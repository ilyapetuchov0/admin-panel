import "./datatable.scss"

import { DataGrid } from '@mui/x-data-grid';

const Datatable = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'Имя', width: 130 },
        { field: 'lastName', headerName: 'Фамилия', width: 130 },
        {field: 'age', headerName: 'Возраст', type: 'number', width: 90,},
        {field: 'group', headerName: 'Группа ученика', type: 'string', sortable: true, width: 160,},
    ];

    const rows = [
        { id: 1, lastName: 'Петров', firstName: 'Иван', age: 15, group: 'Хип-хоп'},
        { id: 2, lastName: 'Иванова', firstName: 'Анастасия', age: 14, group: 'Брейк-данс'},
        { id: 3, lastName: 'Романов', firstName: 'Даниил', age: 15, group: 'Танго'},
        { id: 4, lastName: 'Калинин', firstName: 'Фёдор', age: 15, group: 'Вальс'},
        { id: 5, lastName: 'Петров', firstName: 'Иван', age: 15, group: 'Самба'},
        { id: 6, lastName: 'Долгорукова', firstName: 'Евгения', age: 15, group: 'Танго'},
        { id: 7, lastName: 'Петров', firstName: 'Иван', age: 15, group: 'Хип-хоп'},

    ];
    return (
        <div className="datatable">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;