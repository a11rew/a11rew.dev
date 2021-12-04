/**
 * Serverless function to accept contact form submission and send to my (andrewglago@gmail.com) email
 */

import { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

interface ReqBody {
  name: string
  email: string
  message: string
}

const validate = (body: ReqBody) => {
  if (!body.name || !body.email || !body.message)
    throw Error('Validation failed')
  let regexp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!body.email.match(regexp)) {
    throw Error('Validation failed')
  }
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_ACCOUNT,
    pass: process.env.MAIL_PASS,
  },
})

export default async (
  req: VercelRequest,
  res: VercelResponse
): Promise<void> => {
  try {
    if (req.method === 'POST') {
      try {
        validate(req.body)
      } catch (err: any) {
        res.status(400).send('Validation failed')
      }

      transporter.sendMail(
        {
          from: req.body.email,
          to: 'andrewglago@gmail.com, andrewglago1@gmail.com',
          subject: `Message from ${req.body.email} - ${req.body.name} - a11rew.dev Contact Form Submission`,
          text: req.body.message,
        },
        (err: any) => {
          if (err) {
            res.status(500).send(err)
          } else {
            res.status(200).send('Sent successfully')
          }
        }
      )
    } else {
      res.send('Contact api')
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
