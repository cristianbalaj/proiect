import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Button from "./Cards";
import {FormattedMessage} from "react-intl";
import CardContent from "./Home";




export class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>

                <input className="myButton" type="Button" value="Vezi Medici" onClick={() => this.openModal()} />
                <Modal
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1> <FormattedMessage id="Card.Medici" defaultMessage="Medicii din acest spital:" /></h1>
                        <p>Taran Ioana</p>
                        <p>Tusa Bianca</p>
                        <p>Popescu Cristina</p>
                        <a className="X_button" href="javascript:void(0);" onClick={() => this.closeModal()}>X</a>
                    </div>
                </Modal>
            </section>
        );
    }
}