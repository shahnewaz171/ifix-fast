import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie17yBnWqJxKskHjiOEbItP8GGyoYO9mnR10WVA16nY4Emu4SznTJFfJyq9YsoLVoXLyQOTiEfDQJLIHOpFDhsL002U4Q2fIU');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;