import axios from 'axios'
import NewSeries from '../Components/NewSeries';

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (newSeries) => api.post('series', newSeries) 

const apis = {
    loadGenres: loadGenres,
    saveSeries: saveSeries
}

export default apis