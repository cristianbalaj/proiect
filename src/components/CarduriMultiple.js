import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Spital2 from "./Hospital.jpg"

import {FormattedMessage} from "react-intl";

import Spital1 from "./Hospital2.jpg"
import Modal from 'react-awesome-modal';


const styles = {
    card: {
        maxWidth: 200,
    },
    media: {
        height: 100,
    },
};

let id_spitale = 0;

function createData_spitale(avatar, name, address, telefon, button) {
    id_spitale += 1;
    return {id_spitale, avatar, name, address, telefon, button};
}


const rows_spitale = [
    createData_spitale(Spital1, 'Spitalul Judetean Cluj', 'Strada Clinicilor, nr. 3-5 ,Cluj Napoca, Jud Cluj', "0264 597 852", "https://scjucluj.ro/"),
    createData_spitale(Spital2, 'Spitalul Regina Maria', 'Calea Dorobantilor nr. 29 ,Cluj Napoca, Jud Cluj', "021 9268", "https://www.reginamaria.ro/spitale/spitalul-cluj")
];


export class Doctors_Cards extends React.Component {

    state = {
        isLoading: true,
        home: [],
        error: null
    };

    fetchUsers() {
        fetch("http://127.0.0.1:8000/doctors")
            .then(res => {
                console.log('reeeees',res);
               return res.json()
            })
            .then(data =>
                this.setState({
                    home: data,
                    isLoading: false
                })
            )
            .catch(error => this.setState({
                error, isLoading: false
            }));

    }

    componentDidMount() {
        this.fetchUsers();
    }


    render() {
        const {isLoading, home, error} = this.state;
        return (

            <Card className='doctor_props'>

                {error ? <p>{error.message}</p> : null}
                <CardActionArea>

                    {!isLoading ? (
                        home.map((home, index) => {
                        const {nume,an_absolvire,specializare,poza,spitale} = home;
                        return (

                        <div key={"key"+index}>
                        <img className="image_doctors" />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {nume}
                        </Typography>
                        <Typography component="p">

                        <p>{specializare}</p>
                        <p> {an_absolvire}</p>
                        <p> {spitale}</p>

                        </Typography>
                        </CardContent>
                        </div>

                        );
                    })
                        ) : (
                        <h3>Loading...</h3>
                        )}

                </CardActionArea>
            </Card>
        );

    }
}

Doctors_Cards.propTypes = {
    classes: PropTypes.object.isRequired,
};
/*
export class Hospitals extends React.Component {
    render() {
        let classes = this.props;
        return (
            rows_spitale.map(row_spital => (


                <Card>
                    <CardActionArea>
                        <img className="image_card" src={row_spital.avatar}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {row_spital.name}
                            </Typography>
                            <Typography component="p">
                                <p><FormattedMessage id="Card1.Adresa" defaultMessage="Adresa"/>: {row_spital.address}
                                </p>
                                <p>Call center: {row_spital.telefon}</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>


                    {rows.map((doctors) => {
                        if (doctors.spital === row_spital.name) {
                            return (
                                <div className="cards_grid_2">
                                    <CardActions className="cards_grid_2">


                                        <Card className="cards_grid_2">
                                            <CardActionArea>
                                                <div className="row">
                                                    <div className="column"><img className="image_doctors"
                                                                                 src={doctors.avatar}/></div>


                                                    <div className="column"><CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {doctors.name}
                                                        </Typography>
                                                        <Typography component="p">

                                                            <p><FormattedMessage id="Doctori.sectia"
                                                                                 defaultMessage="Sectia"/>: {doctors.sectia}
                                                            </p>
                                                            <p><FormattedMessage id="Doctori.email"
                                                                                 defaultMessage="Email"/>: {doctors.email}
                                                            </p>
                                                            <p><FormattedMessage id="Doctori.telefon"
                                                                                 defaultMessage="Telefon"/>: {doctors.telefon}
                                                            </p>
                                                            <p><FormattedMessage id="Doctori.spital"
                                                                                 defaultMessage="Spital"/>: {doctors.spital}
                                                            </p>

                                                        </Typography>
                                                    </CardContent>
                                                    </div>
                                                </div>
                                            </CardActionArea>

                                        </Card>

                                    </CardActions>
                                </div>

                            );
                        }
                    })}
                    <a href={row_spital.button}>
                        <input className="myButton" type="Button" value="Site"/>

                    </a>
                </Card>
            )));
    }
}


Hospitals.propTypes = {
    classes: PropTypes.object.isRequired,
};
*/

