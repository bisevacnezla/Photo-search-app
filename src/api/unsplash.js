import React from 'react'
import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID MlcExWn-zCuDvp7Zp8-lLTxPQz6m1Hq6Efc4yIc-GUc'
    }
})