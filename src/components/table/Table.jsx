import "./table.scss"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows = [
        {
            id: 1143155,
            product: "Рюкзак от танцевальной студии",
            customer: "Иван Петров",
            date: "29 октября",
            amount: 40,
            status: "Одобрено",
        },
        {
            id: 1143156,
            product: "Футбока от танцевальной студии",
            customer: "Алексанжр Сидоров",
            date: "30 октября",
            amount: 100,
            status: "Рассматривается",
        },
    ]

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">ID для отслеживания</TableCell>
                        <TableCell className="tableCell">Название товара</TableCell>
                        <TableCell className="tableCell">Дата</TableCell>
                        <TableCell className="tableCell">Сумма</TableCell>
                        <TableCell className="tableCell">Покупатель</TableCell>
                        <TableCell className="tableCell">Статус</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">{row.product}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.customer}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;