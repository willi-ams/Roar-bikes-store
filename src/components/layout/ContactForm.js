import { useState, useRef } from 'react';
import classes from './ContactForm.module.css';

const ContactForm = (props) => {
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const addressInputRef = useRef();
    const numberInputRef = useRef();
    const subjectInputRef = useRef();
    const messageInputRef = useRef();

    const [formIsValid, setFormIsValid] = useState({
        enteredNameIsValid: true,
        enteredEmailIsValid: true,
        enteredAddressIsValid: true,
        enteredNumberIsValid: true,
        enteredSubjectIsValid: true,
        enteredMessageIsValid: true,
    });

    const formSubmissionHandler = (e) => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredNumber = numberInputRef.current.value;
        const enteredSubject = subjectInputRef.current.value;
        const enteredMessage = messageInputRef.current.value;

        const enteredNameIsValid = enteredName.trim() !== '';
        const enteredEmailIsValid = enteredEmail.includes('@');
        const enteredAddressIsValid = enteredAddress.trim() !== '';
        const enteredNumberIsValid = enteredNumber.trim() !== '';
        const enteredSubjectIsValid = enteredSubject !== 'Not-chosen';
        const enteredMessageIsValid = enteredMessage.trim() !== '';

        setFormIsValid({
            enteredNameIsValid,
            enteredEmailIsValid,
            enteredAddressIsValid,
            enteredNumberIsValid,
            enteredSubjectIsValid,
            enteredMessageIsValid,
        });

        const formContentIsValid =
            enteredNameIsValid &&
            enteredEmailIsValid &&
            enteredAddressIsValid &&
            enteredNumberIsValid &&
            enteredSubjectIsValid &&
            enteredMessageIsValid;

        if (!formContentIsValid) return;

        // here we send the form to the backend if all d inputs are correct
        props.onSubmit({
            name: enteredName,
            email: enteredEmail,
            address: enteredAddress,
            phoneNo: enteredNumber,
            subject: enteredSubject,
            message: enteredMessage,
        });
    };

    // classes for the input valid and invalid state
    const nameInputClasses = formIsValid.enteredNameIsValid ? classes['form-wrapper'] : classes['form-wrapper-invalid'];
    const emailInputClasses = formIsValid.enteredEmailIsValid
        ? classes['form-wrapper']
        : classes['form-wrapper-invalid'];
    const addressInputClasses = formIsValid.enteredAddressIsValid
        ? classes['form-wrapper']
        : classes['form-wrapper-invalid'];
    const numberInputClasses = formIsValid.enteredNumberIsValid
        ? classes['form-wrapper']
        : classes['form-wrapper-invalid'];
    const subjectInputClasses = formIsValid.enteredSubjectIsValid
        ? classes['form-wrapper']
        : classes['form-wrapper-invalid'];
    const messageInputClasses = formIsValid.enteredMessageIsValid
        ? classes['form-wrapper']
        : classes['form-wrapper-invalid'];

    return (
        <form className={classes.form} onSubmit={formSubmissionHandler}>
            <div className={classes['form-box']}>
                <div className={nameInputClasses}>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" ref={nameInputRef} />
                    {!formIsValid.enteredNameIsValid && (
                        <div className={classes['error-text']}>* Name is required.</div>
                    )}
                </div>
                <div className={emailInputClasses}>
                    <label htmlFor="email">Your email</label>
                    <input type="email" id="email" ref={emailInputRef} />
                    {!formIsValid.enteredEmailIsValid && (
                        <div className={classes['error-text']}>* Email is required.</div>
                    )}
                </div>
            </div>
            <div className={addressInputClasses}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" ref={addressInputRef} />
                {!formIsValid.enteredAddressIsValid && (
                    <div className={classes['error-text']}>* Your address is required.</div>
                )}
            </div>
            <div className={numberInputClasses}>
                <label htmlFor="number">Telephone</label>
                <input type="text" id="number" ref={numberInputRef} />
                {!formIsValid.enteredNumberIsValid && (
                    <div className={classes['error-text']}>* Telephone no. is required.</div>
                )}
            </div>
            <div className={subjectInputClasses}>
                <select id="subject" className={classes.subject} ref={subjectInputRef}>
                    <option value="Not-chosen">Choose subject</option>
                    <option value="product">Product</option>
                    <option value="support">Support</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="dealership">Dealership</option>
                    <option value="compliant">Compliant</option>
                </select>
                {!formIsValid.enteredSubjectIsValid && <div className={classes['error-text']}>* Select a field.</div>}
            </div>
            <div className={messageInputClasses}>
                <label htmlFor="message"></label>
                <textarea id="mssage" cols="30" rows="14" ref={messageInputRef} placeholder="Your message"></textarea>
                {!formIsValid.enteredMessageIsValid && (
                    <div className={classes['error-text']}>* message is required.</div>
                )}
            </div>
            <div className={classes['form-wrapper-button']}>
                <button>{props.isSubmitting ? 'Submitting...' : 'Send message'}</button>
                {props.error && <p className={classes['error-button-text']}>* Error.. try again!</p>}
            </div>
        </form>
    );
};

export default ContactForm;
