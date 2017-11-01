import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyDG26hdQM4SsoWf85qEVQqfpbOGtDq1sCc',
  authDomain: 'sensorsdatabase.firebaseapp.com',
  databaseURL: 'https://sensorsdatabase.firebaseio.com',
  projectId: 'sensorsdatabase',
  storageBucket: 'sensorsdatabase.appspot.com',
  messagingSenderId: '716682422710'
})

export const db = app.database()
export const deviceRef = db.ref('/')
