import React from 'react'
import styled from 'styled-components'

const ContactForm: React.FC = (): React.ReactElement => {
  return (
    <FormWrapper>
      <h5>Get in touch.</h5>
      <div>
        <label htmlFor="name">
          Name
          <input id="name" />
        </label>
        <label htmlFor="email">
          Email
          <input id="email" />
        </label>
      </div>
      <Message htmlFor="message">
        Message
        <textarea id="message" rows={6} />
      </Message>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  width: fit-content;

  h5 {
    margin: unset;
    margin: 60px 0;
    font-size: 2rem;
    font-weight: 500;

    @media (max-width: 600px) {
      font-size: 1.5rem;
      margin-bottom: 40px;
    }
  }

  label {
    font-size: 1.5rem;
    display: inline-flex;
    flex-direction: column;
    gap: 10px;
    margin-right: 60px;

    @media (max-width: 600px) {
      font-size: initial;
      margin-top: 10px;
    }
  }

  input {
    color: unset;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(var(--color-primary-dec), 0.3);
    padding-bottom: 5px;
    transition: all 0.2s ease-in-out;

    &:focus {
      border: none;
      border-bottom: 1px solid var(--color-primary);
      outline: none;
    }
  }
`

const Message = styled.label`
  display: flex;
  width: 80%;
  margin-top: 40px;
  transition: all 0.2s ease-in-out;

  textarea {
    color: unset;
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba(var(--color-primary-dec), 0.3);

    background-color: transparent;
    /* background-color: rgba(255, 255, 255, 0.05); */

    &:focus {
      border: none;
      border-bottom: 1px solid var(--color-primary);
      outline: none;
      opacity: 100%;
    }
  }
`

const SubmitButton = styled.button`
  font-size: 1.5rem;
  background-color: var(--color-primary);
  color: white;
  margin-top: 40px;
  padding: 10px 40px;
  border-radius: 4px;

  @media (max-width: 600px) {
    font-size: initial;
  }
`

export default ContactForm
