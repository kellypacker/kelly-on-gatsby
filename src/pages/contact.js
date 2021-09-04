import React from 'react';
import { PropTypes } from 'prop-types';
import SEO from '../components/SEO';

const ContactPage = () => {
    console.log('contact');
    return (
        <>
            <SEO
                title="Contact"
                description="Contact Kelly Packer regarding general inquires, web development and artwork."
            />
            <div className="max-w-lg">
                <h1 className="text-3xl mt-4 mb-2">
                    Start <em>a</em> Conversation
                </h1>
                <p className="text-2xl">I would love to hear from you.</p>
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    className="mb-6"
                >
                    <p>
                        <label>
                            Name <input type="text" name="name" />
                        </label>
                    </p>
                    <p>
                        <label>
                            Email <input type="email" name="email" />
                        </label>
                    </p>

                    <p>
                        <label>
                            Message <textarea rows="10" name="message" />
                        </label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
        </>
    );
};

// ContactPage.propTypes = {
//     prop: PropTypes.
// };

export default ContactPage;
