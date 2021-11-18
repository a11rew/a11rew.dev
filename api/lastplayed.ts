/**
 * Vercel Serverless Function to obtain last played from Spotify profile
 * using Spotify OAuth (https://developer.spotify.com/documentation/general/guides/authorization/code-flow/)
 */

/**
 * Even though this lambda works the page still uses Last.FM's API mainly for
 * its speeds (sub second compared to 5s response times) and Spotify returning out of date results.
 *
 * TODO:// Use Vercel's Edge functions to deal with coldstarts
 */

import axios from 'axios'
import qs from 'qs'
import { VercelResponse } from '@vercel/node'

const {
  SP_CLIENT: client,
  SP_SECRET: secret,
  SP_REFRESH: refresh,
} = process.env

const token = Buffer.from(`${client}:${secret}`).toString('base64')
const lastplayed_endpoint =
  'https://api.spotify.com/v1/me/player/recently-played'
const token_endpoint = 'https://accounts.spotify.com/api/token'

const refreshAccess = async (): Promise<string> => {
  /**
   * Use the infinitely active refresh token to obtain an access token
   * for current request
   */

  try {
    const res = await axios({
      method: 'POST',
      url: token_endpoint,

      // URL Encoding body
      data: qs.stringify({
        grant_type: 'refresh_token',
        refresh_token: refresh,
      }),

      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    return res.data.access_token
  } catch (error) {
    return error
  }
}

const lastPlayed = async (auth_token: string): Promise<unknown> => {
  try {
    const res = await axios({
      method: 'GET',
      url: lastplayed_endpoint,
      params: {
        limit: 1,
      },
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    })

    return res.data
  } catch (error) {
    return error
  }
}

export default async (_: unknown, res: VercelResponse): Promise<void> => {
  try {
    const authToken = await refreshAccess()
    const data = await lastPlayed(authToken)
    res.send(data)
  } catch (error) {
    res.status(500).send(error)
  }
}
