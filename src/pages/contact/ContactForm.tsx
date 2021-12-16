import React, { useState } from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import useContact from '../../hooks/useContact'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

interface FormData {
  name: string
  message: string
  email: string
}

const ContactForm: React.FC = (): React.ReactElement => {
  const { contactLoading, postContact, contactError, contactSuccess } =
    useContact()
  const [formData, setFormData] = useState<FormData>({
    message: '',
    email: '',
    name: '',
  })

  return (
    <FormWrapper
      onSubmit={e => {
        e.preventDefault()
        postContact(formData)
      }}
    >
      <h5>Get in touch.</h5>
      <div>
        <label htmlFor="name">
          Name
          <input
            id="name"
            required
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            required
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            type="email"
          />
        </label>
      </div>
      <Message htmlFor="message">
        Message
        <textarea
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
        />
      </Message>
      <SubmitWrapper>
        <SubmitButton type="submit" disabled={contactLoading}>
          Submit
        </SubmitButton>
        <div>
          {contactLoading && !contactSuccess && !contactError && (
            <Loader type="TailSpin" color="#00BFFF" height={25} width={25} />
          )}
          {contactError && 'Something went wrong try again'}
          {contactSuccess && 'Submitted :)'}
        </div>
      </SubmitWrapper>
    </FormWrapper>
  )
}

const SubmitWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  gap: 25px;
`

const FormWrapper = styled.form`
  width: fit-content;

  h5 {
    margin: unset;
    margin: 60px 0;
    font-size: 1.7rem;
    font-weight: 500;

    @media (max-width: 600px) {
      font-size: 1.2rem;
      margin-bottom: 40px;
    }
  }

  label {
    font-size: 1.2rem;
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
  font-size: 1.2rem;
  background-color: var(--color-primary);
  color: white;
  padding: 10px 40px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (max-width: 600px) {
    font-size: initial;
  }
`

export default ContactForm
