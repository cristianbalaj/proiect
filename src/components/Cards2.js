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
import picture from "./Hospital2.jpg"
import {Popup2} from "./Pop_up2";
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


export class Hospital2 extends React.Component {
    render() {
        let classes = this.props;
        return (
            <Card >
                <CardActionArea>
                    <img className="image_card" src={picture}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" >
                            <FormattedMessage id="Card2.Nume" defaultMessage="Spitalul Regina Maria" />
                        </Typography>
                        <Typography component="p">
                           <p><FormattedMessage id="Card1.Adresa" defaultMessage="Adresa" />: Calea Dorobantilor nr. 29 ,Cluj Napoca, Jud Cluj</p>
                            <p>Call center: 021 9268</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button  size="small" color="primary" >
                        <Popup2 />
                    </Button>
                    <a href="https://www.reginamaria.ro/spitale/spitalul-cluj">
                        <input className="myButton" type="Button" value="Site"  />
                    </a>
                </CardActions>
            </Card>
        );
    }
}
Hospital2.propTypes = {
    classes: PropTypes.object.isRequired,
};

