import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xgedowww");

  if (state.succeeded) {
      return <p>Obrigado pelo contato!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <p>Envie uma mensagem</p>
      <div>
        <label htmlFor="name">
          Nome
        </label>
        <input
          id="name"
          type="text" 
          name="name"
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
      </div>
      <div>
        <label htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div>
        <label htmlFor="message">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows="8"
          cols="50"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>
    </form>
  );
}

export default ContactForm;
