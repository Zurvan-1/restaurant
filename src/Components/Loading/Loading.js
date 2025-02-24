import React, { useEffect, useState } from 'react'
import './Loading.css'

export default function Loading() {

    const [isLoadingDone, setIsLoadingDone] = useState(false)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsLoadingDone(true)
        }, 1800)
        return () => clearTimeout(timeOut)
    }, [])

    return (
        <div className={`preload ${isLoadingDone ? 'loaded' : ''}`} data-preaload>
            <div className="circle"></div>
            <p className="text">Zurvan</p>
        </div>
    )
}


