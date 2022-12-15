import { Fragment, useState } from 'react';
import ContactForm from './ContactForm';
import icon from '../../assets/sprite.svg';

import classes from './ContactPage.module.css';

const ContactPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [didSubmit, setDidSubmit] = useState(false);

    const submitFormHandler = async (formData) => {
        setIsSubmitting(true);
        setError(null);
        try {
            const response = await fetch('https://roarbikes-store-default-rtdb.firebaseio.com/form.json', {
                method: 'PUT',
                body: JSON.stringify(formData),
                headers: {
                    // not really required by firebase but for other rest api
                    'content-Type': 'application./json',
                },
            });

            const data = await response.json();

            if (!response.ok) throw new Error('could not send data');

            console.log(data);
            setDidSubmit(true); // when d form has been submitted
        } catch (error) {
            setError(error.message);
        }
        setIsSubmitting(false);
    };

    const formSubscribeHandler = (e) => {
        e.preventDefault();
    };

    return (
        <Fragment>
            <section className={classes['section-contact']}>
                <h2>Contact Us</h2>
                {!didSubmit && <ContactForm onSubmit={submitFormHandler} isSubmitting={isSubmitting} error={error} />}
                {didSubmit && (
                    <div className={classes.success}>
                        <h3 className={classes['success-text']}>Email sent</h3>
                        <span className={classes['icon-cont']}>
                            <svg className={classes['success-icon']}>
                                <use xlinkHref={`${icon}#icon-check`} />
                            </svg>
                        </span>
                    </div>
                )}
            </section>
            <section className={classes.newsletter}>
                <div className={classes['newsletter-content']}>
                    <h2>Subscribe to our newsletter</h2>
                    <p>
                        Stay updated with our promotions, new products and new stocks arrivals, directly to your inbox.
                    </p>
                    <form className={classes['form-subscribe']} onSubmit={formSubscribeHandler}>
                        <input type="email" placeholder="Your email" />
                        <button>Suscribe</button>
                    </form>
                    <p>100% free, Unsubscribe any time!</p>
                </div>
            </section>
        </Fragment>
    );
};

export default ContactPage;
