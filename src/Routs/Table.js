import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function CustomizedTables() {
    const [short, setShort] = useState([])

    useEffect(() => {
        const consumeData = async () => {
            try {
                let res = await axios.get(`${url}`)
                setShort(res.data.data)
                toast.success(res.data.message)
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
        consumeData()
    },[])
console.log(short);
    return (
        <div className='detail'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Full URL</StyledTableCell>
                            <StyledTableCell align="right">Short URL</StyledTableCell>
                            <StyledTableCell align="right">Clicks</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {short.length > 0 ? (
                            short.map((data, index) => (
                                <StyledTableRow key={index} >
                                    <StyledTableCell component="th" scope="row">
                                        <a href={data.LongUrl} target='_blank'>{data.LongUrl}</a>  
                                        </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <a href={url+'/'+data.shortUrl} target='_blank'>{url}/{data.shortUrl}</a>
                                        </StyledTableCell>
                                    <StyledTableCell align="right">{data.clicks}</StyledTableCell>
                                </StyledTableRow>
                            ))
                        ) : (
                            null
                        )}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}