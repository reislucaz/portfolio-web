import { useForm, ValidationError } from '@formspree/react';
import './index.css'

function ContactForm() {
    const [state, handleSubmit] = useForm("meqwqyjr");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="input-form"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <label htmlFor="email">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          className="input-form"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" id="button-contact" disabled={state.submitting}>
          Enviar
        </button>
      </form>
    );
  }

  export default ContactForm
