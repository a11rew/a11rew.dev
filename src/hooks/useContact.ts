import { useState } from 'react'

interface ReqBody {
  name: string
  email: string
  message: string
}

const useContact = (): {
  contactLoading: boolean
  contactError: any
  postContact: (body: ReqBody) => Promise<any>
  contactSuccess: boolean
} => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const postContact = async (body: ReqBody) => {
    setIsLoading(true)
    try {
      await fetch('/api/contactme', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      setIsLoading(false)
      setIsSuccess(true)
    } catch (err: any) {
      setError(err)
    }

    // Reset state
    setTimeout(() => {
      setIsSuccess(false)
      setError('')
    }, 3000)
  }

  return {
    contactLoading: isLoading,
    postContact,
    contactError: error,
    contactSuccess: isSuccess,
  }
}

export default useContact
