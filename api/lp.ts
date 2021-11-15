/**
 * Vercel Serverless Function to obtain last played from Spotify profile
 * using Spotify OAuth (https://developer.spotify.com/documentation/general/guides/authorization/code-flow/)
 */

import axios from 'axios'
import { VercelRequest, VercelResponse } from '@vercel/node'

const {
  GATSBY_SP_CLIENT: client,
  GATSBY_SP_SECRET: secret,
  GATSBY_SP_REFRESH: refresh,
} = process.env

const token = Buffer.from(`${client}:${secret}`).toString('base64')
const lp_endpoint = 'https://api.spotify.com/v1/me/player/recently-played'
const token_endpoint = 'https://accounts.spotify.com/api/token'

const refreshAccess = async (): Promise<string> => {
  try {
    const res = await axios.post(
      token_endpoint,
      {
        grant_type: 'refresh_token',
        refresh_token: refresh,
      },
      {
        headers: {
          Authorization: `Basic ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    return res.data
  } catch (error) {
    return error
  }
}

const lp = async (req: VercelRequest, res: VercelResponse): Promise<void> => {
  try {
    // const ref = await refreshAccess()
    res.send(token)
  } catch (error) {
    res.status(500).send(error)
  }
}

export default lp
