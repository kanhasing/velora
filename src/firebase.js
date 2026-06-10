import { initializeApp } from "firebase/app"

import { getFirestore } from "firebase/firestore"

import { getAuth } from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyAjW-AXXeio1xt5cCAVwDcgxVmPohb-3pU",

  authDomain: "velora-97771.firebaseapp.com",

  projectId: "velora-97771",

  storageBucket: "velora-97771.firebasestorage.app",

  messagingSenderId: "325384480380",

  appId: "1:325384480380:web:02cfc284baeda94dd14bf9",

  measurementId: "G-DR4M0GSW4Z",

}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const auth = getAuth(app)