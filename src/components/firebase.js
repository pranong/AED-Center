import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyBBIohzEGezqgyRer-v_y-oBy4VqJIUjuk',
  authDomain: 'sensorsdatabase.firebaseapp.com',
  databaseURL: 'https://sensorsdatabase.firebaseio.com',
  projectId: 'sensorsdatabase',
  storageBucket: 'sensorsdatabase.appspot.com',
  messagingSenderId: '716682422710'
})

export const auth = app.auth()
export const db = app.database()
export const deviceRef = db.ref('Device')
export const userRef = db.ref('User')
export const eventRef = db.ref('Event')
export const logRef = db.ref('log')
export const notiRef = db.ref('noti/1')
export const noti2Ref = db.ref('noti/2')
export const numnotiRef = db.ref('numnoti')
