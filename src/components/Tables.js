
/*
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Deni from "../../public/images/Deni.jpg"
import Dinu from "../../public/images/Dinu.jpg"
import Bianca from "../../public/images/Bianca.jpg"
import Ioana from "../../public/images/Ioana.jpg"
import Cristina from "../../public/images/Cristina.jpg"
import Balaj from "../../public/images/Balaj.jpg"
import {FormattedMessage} from "react-intl";





const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

let id = 0;
function createData(avatar,name, sectia, email, telefon,spital) {
    id += 1;
    return { id,avatar, name, sectia, email, telefon,spital };
}



const rows = [
    createData(Balaj,'Balaj Cristian', 'Oncologie', "Cristian.Balaj@gmail.com", "0742793650","Spitalul Regina Maria"),
    createData(Dinu,'Dinu Seras', 'Ginecologie', 'Dinu.Marele@gmail.com', '0766456423',"Spitalul Regina Maria"),
    createData(Deni,'Deni Tralala', 'Psihiatrie', 'dedehsm@yahoo.it', '0765123478',"Spitalul Regina Maria"),
    createData(Ioana,'Taran Ioana', 'Chirurgie', 'Ioana.Taran@gmail.com', '0744778956',"Spitalul Judetean Cluj"),
    createData(Bianca,'Tusa Bianca', 'Cardiologie', 'Bia.Tusa@gmail.com', '0722567898',"Spitalul Judetean Cluj"),
    createData(Cristina,'Popescu Cristina', 'Neurologie', 'Cristina.Popescu@gmail.com', '0756257856',"Spitalul Judetean Cluj"),
];

 export class CustomizedTable extends React.Component {
    render() {
        let classes = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell><FormattedMessage id="Table.Poza" defaultMessage="Poza Profil" /></CustomTableCell>
                            <CustomTableCell ><FormattedMessage id="Table.Nume" defaultMessage="Nume" /></CustomTableCell>
                            <CustomTableCell align="right"><FormattedMessage id="Table.Sectia" defaultMessage="Sectia" /></CustomTableCell>
                            <CustomTableCell align="right">Email </CustomTableCell>
                            <CustomTableCell align="right"><FormattedMessage id="Table.Telefon" defaultMessage="Telefon" /> </CustomTableCell>
                            <CustomTableCell align="center"><FormattedMessage id="Table.Spital" defaultMessage="Spitalul " /></CustomTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell ><img className="image_table" src={row.avatar}/></CustomTableCell>
                                <CustomTableCell>{row.name}</CustomTableCell>
                                <CustomTableCell align="right">{row.sectia}</CustomTableCell>
                                <CustomTableCell align="right">{row.email}</CustomTableCell>
                                <CustomTableCell align="right">{row.telefon}</CustomTableCell>
                                <CustomTableCell align="right">{row.spital}</CustomTableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

*/