// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging ,onMessage,getToken} from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo559EKKPdql2cMvxSzT0DqNJZimJiudc",
  authDomain: "fir-notfications-41b1c.firebaseapp.com",
  projectId: "fir-notfications-41b1c",
  storageBucket: "fir-notfications-41b1c.appspot.com",
  messagingSenderId: "963307073623",
  appId: "1:963307073623:web:02395bba723ed9fc3cf312",
  measurementId: "G-0B6LV45QQV"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const messaging = getMessaging(app);


//every device will contain unique token with whose help we will send them the notification 
export const requestForToken=async ()=>{
   try {
        const currentToken = await getToken(messaging, { vapidKey: "BOHjqrcxrDimrgxQyx9FTbqZ-S3TMUg0cs65Q-hJS0TEKcUnW2RTGjdYZQk_wKxPO5pv7RkAltRkVlHsdMlCuqc" });
        if (currentToken) {
            console.log(currentToken);
        } else {
            console.log("No registeration token availabel ");
        }
    } catch (err) {
        console.log(err);
    }
}

export const onMessageLsitener=()=>{
    return new Promise((resolve)=>{
        onMessage(messaging,(payload)=>{
            console.log("OnMessage Payload",payload);
            resolve(payload);
        })
    })
}