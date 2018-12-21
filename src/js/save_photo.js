import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import './config'

const d = document

export default function savePhoto() {
    d.addEventListener('submit', e => {
        if(e.target.matches('#form-save-photo')){
            e.preventDefault()
            alert('Funciona!!!')
        }
    })
}