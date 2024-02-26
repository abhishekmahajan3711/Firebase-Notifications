importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCo559EKKPdql2cMvxSzT0DqNJZimJiudc",
    authDomain: "fir-notfications-41b1c.firebaseapp.com",
    projectId: "fir-notfications-41b1c",
    storageBucket: "fir-notfications-41b1c.appspot.com",
    messagingSenderId: "963307073623",
    appId: "1:963307073623:web:02395bba723ed9fc3cf312",
    measurementId: "G-0B6LV45QQV"
  };

  firebase.initializeApp(firebaseConfig);

  const messaging=firebase.messaging();
  
messaging.onBackgroundMessage(function(payload) {
    console.log("Received background message", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload?.notification.body
    };

    // Use self.registration.showNotification, not self.registration.showNotificaitons
    self.registration.showNotification(notificationTitle, notificationOptions);
});
