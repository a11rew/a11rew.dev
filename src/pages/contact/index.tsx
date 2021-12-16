import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Seo from '@components/Seo'
import ContactForm from './ContactForm'

const Contact: React.FC = (): ReactElement => {
  return (
    <Wrapper>
      <Seo title="Reach me" />
      <CallToAction> We should work together!</CallToAction>
      <IntroMessage>
        I&apos;m always looking to connect with other developers, designers and
        product people in general.
        <br />
        Re: an idea, positions or just to say hello, drop me a line below.
      </IntroMessage>
      <EmailMessage>
        Or if you&apos;d rather, send me{' '}
        <a href="mailto:andrewglago1@gmail.com">an email directly.</a>
      </EmailMessage>
      <div>
        <ContactForm />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
  padding-bottom: 2em;

  @media (max-width: 600px) {
    font-size: initial;
    margin-top: unset;
  }
`

const CallToAction = styled.h1`
  color: unset;
  font-weight: 300;
  font-size: 5rem;

  @media (max-width: 600px) {
    font-size: 3.5rem;
    margin-top: unset;
  }

  @media (max-width: 375px) {
    font-size: 2.5rem;
    margin-top: unset;
  }
`

const IntroMessage = styled.p``

const EmailMessage = styled.p`
  a {
    text-decoration: none;
  }
`

export default Contact