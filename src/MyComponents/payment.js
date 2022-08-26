import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Service from "../Services/Service";
import { PaytmButton } from '../paytm-button/paytmButton';

export class Payment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bankName: '',
            amount: '',
            description: '',
            paymentDate: '',
            customerId: '',
            transactionId: '',
        }

       

        this.changeAmountHandler();
        this.changePaymentDateHandler();

        this.changeCardNumberHandler = this.changeCardNumberHandler.bind(this);
        this.changeBankNameHandler = this.changeBankNameHandler.bind(this);
        this.changeCardTypeHandler = this.changeCardTypeHandler.bind(this);
        this.changeExpiryHandler = this.changeExpiryHandler.bind(this);
        this.changeCVVIdHandler = this.changeCVVIdHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);

        this.savePayment = this.savePayment.bind(this);
    }

    //for save
    savePayment = (e) => {
        console.log(e);
        e.preventDefault();
        const bookingData = {
            amount: this.state.amount,
            bankName: this.state.bankName,
            cardNumber: this.state.cardNumber,
            cardType: this.state.cardType,
            customerId: this.state.customerId,
            description: this.state.description,
            paymentDate: this.state.paymentDate,
            transactionId: this.state.transactionId
        };
        Service.savePayment(bookingData).then((res) => {
            console.log(res);
            alert(res.data);
            //redirect to home
        })
    }


    changeBankNameHandler = (event) => {
        this.setState({ bankName: event.target.value });
    }
    changeCardTypeHandler = (event) => {
        this.setState({ cardType: event.target.value });
    }
    changeCardNumberHandler = (event) => {
        this.setState({ cardNumber: event.target.value });
    }
    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }
    changeExpiryHandler = (event) => {
        this.setState({ expirydate: event.target.value });
    }
    changeCVVIdHandler = (event) => {
        this.setState({ cvv: event.target.value });
    }

    changeAmountHandler = () => {
        this.state.amount = localStorage.getItem('bookingAmount');
        this.state.transactionId = "pay" + Math.floor(Math.random() * 100000);
        this.state.customerId = 11;
    }
    changePaymentDateHandler = () => {
        var today = new Date();
        var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate() + "  " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        this.state.paymentDate = date;
    }
    render() {
        return (
            <div>
                <div className="homecontainer">
                </div>
                <section
                    className="vh-100 bg-image"
                    style={{ backgroundColor: "#C3CCC6" }}
                >

                    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                    <div className="card" style={{ borderRadius: "1rem" }}>
                                       
                                            <div className="button-container">
                                                <PaytmButton />
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </section >
            </div >

        )
    }
}

export default Payment