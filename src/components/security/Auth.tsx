import React, { useEffect, useState } from 'react'
import {apiLink, appToken} from '../../helpers'
import { useRouter } from 'next/router'
import Spinner from '../Spinner/Spinner';
import https from "https";

// @ts-ignore
export default function Auth({ children, ...props }) {
    const [authorized, setAuthorized] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onRouteChangeStart = () => {
        setLoading(true);
        setAuthorized(false);
    };

    useEffect(() => {
        authCheck();

        router.events.on('routeChangeStart', onRouteChangeStart);
        router.events.on('routeChangeComplete', authCheck)

        return () => {
            router.events.off('routeChangeStart', onRouteChangeStart);
            router.events.off('routeChangeComplete', authCheck);
        }
    }, [])

    const authCheck = () => {
        // if (localStorage.getItem("user") !== undefined) {
             setAuthorized(true);
        //     // refresh session
        //     const httpsAgent = new https.Agent({
        //         rejectUnauthorized: false,
        //     });
        //    const result = fetch(`/api/user/currentUser`, {
        //         method: 'GET',
        //         credentials: 'include',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'asid-services-app': 'cd05f2b8-b222-4068-a78d-749fffeced76',
        //             // 'X-CSRF-Token': userCert?.userData?.csrf_token
        //         },
        //         // @ts-ignore
        //         agent: httpsAgent,
        //     }).then(response => {
        //             if (response.status !== 200) {
        //                 setAuthorized(false);
        //                 router.push('/login');
        //             } else {
        //                 setAuthorized(true);
        //             }
        //         }).finally(() => {
        //             setLoading(false);
        //         })
        //         .catch(error => { console.log(error) })

        // } else {
        //     setAuthorized(false);
        //     router.push('/login');
        // }

    }

    if (!loading) return authorized ? children : <Spinner />
    else return <Spinner/>
}