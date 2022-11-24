import {configureStore} from '@reduxjs/toolkit'
import { arrSinhVien } from './reducers/userReducer'

export const store = configureStore({
    reducer:{
        arrSinhVien:arrSinhVien
    }
})