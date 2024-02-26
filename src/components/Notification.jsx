import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { requestForToken, onMessageLsitener } from '../firebase';
import { onMessage } from 'firebase/messaging';


const Notification = () => {

    const [notification, setNotification] = useState({ title: "", body: "" });


    const ToastDisplay = () => {
        return (
            <div>
                <p>{notification?.title}</p>
                <p>{notification?.body}</p>
            </div>

        )
    }

    const notify = () => toast(<ToastDisplay />);

    useEffect(() => {
        if (notification?.title) {
            notify();
        }
    }, [notification]);

    requestForToken();

    onMessageLsitener()
        .then((payload) => {
            setNotification({
                title: payload?.notification?.title,
                body: payload?.notification?.body
            });
        })
        .catch((err) => {
            console.log(err);
        });


    return (
        <>
        <h1>This is the notification website !!!</h1>
         <Toaster />
         </>
       
    )
}

export default Notification;