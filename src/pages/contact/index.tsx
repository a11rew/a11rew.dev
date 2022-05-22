import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Seo from '@components/Seo'
import ContactForm from './ContactForm'

const Contact: React.FC = (): ReactElement => {
  return (
    <Wrapper>
      <Seo title="Reach me" />
      <CallToAction>Contact.</CallToAction>

      <EmailMessage>
        Or if you&apos;d rather, send me an email at{' '}
        <a href="mailto:hi@a11rew.dev"> hi@a11rew.dev.</a>
      </EmailMessage>
      <div>
        <ContactForm />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-weight: 300;
  padding-bottom: 2em;

  @media (max-width: 600px) {
    font-size: initial;
    margin-top: unset;
  }
`

const CallToAction = styled.h1`
  font-size: var(--fontSize-4);

  @media (max-width: 600px) {
    font-size: 3.5rem;
    margin-top: unset;
  }

  @media (max-width: 375px) {
    font-size: 2.5rem;
    margin-top: unset;
  }
`

const EmailMessage = styled.p`
  a {
    text-decoration: none;
  }

  margin-bottom: 5em;
`

export default Contact
