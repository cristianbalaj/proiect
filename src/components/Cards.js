import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import picture from "./Hospital.jpg"
import {Popup} from "./Pop_up";
import {FormattedMessage} from "react-intl";

const styles = {
    card: {
        maxWidth: 200,
    },
    media: {
        height: 100,
    },
};


export class Hospital1 extends React.Component {
    render() {
        let classes = this.props;
        return (
            <Card>
                <CardActionArea>
                    <img className="image_card" src={picture}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <FormattedMessage id="Card1.Nume" defaultMessage="Spitalul Judetean Cluj-Napoca"/>
                        </Typography>
                        <Typography component="p">
                            <p><FormattedMessage id="Card1.Adresa" defaultMessage="Adresa"/>: Strada Clinicilor, nr. 3-5
                                ,Cluj Napoca, Jud Cluj</p>
                            <p>Call center: 0264 597 852</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Popup/>
                    </Button>
                    <a href="https://scjucluj.ro/">
                        <input className="myButton" type="Button" value="Site"/>

                    </a>
                </CardActions>
            </Card>
        );
    }
}

Hospital1.propTypes = {
    classes: PropTypes.object.isRequired,
};

