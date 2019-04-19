import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import picture from "./Hospital.jpg"
import { FormattedMessage } from "react-intl";


const styles = {
    card: {
        maxWidth: 200,
    },
    media: {
        height: 100,
    },
};


export class HomePage extends React.Component {
    render() {
        let classes = this.props;
        return (
            <Card className="card_props">
                <CardActionArea>
                    <CardContent>
                        <FormattedMessage id="Main.Title" defaultMessage="Tema 1 DAW" />
                        <Typography component="p">
                            <FormattedMessage id="Main.Description" defaultMessage="Proiectați și implementați o interfața cu utilizatorul folosind pagini web pentru o aplicație de evaluare si
                            clasificare a medicilor si a spitalelor din Romania" />
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href="http://users.utcluj.ro/~ianghel/DAW/3_Laborator/DAW_Teme_2019.pdf">
                    <Button onclick="location.href='http://google.com';" size="small" color="primary">
                        <FormattedMessage id="Main.Button" defaultMessage="Vezi cerinte" />
                    </Button>
                    </a>

                </CardActions>
            </Card>
        );
    }
}
HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

