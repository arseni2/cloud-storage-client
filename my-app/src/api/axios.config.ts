import axios from "axios";
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
    maxAge: 15 * 60 * 1000
})

export const instance = axios.create({
    baseURL: 'http://localhost:7000',
    adapter: cache.adapter
})