"use client"
import {useActionState,useEffect,useRef} from 'react';

export default function LoadMore(){
    const observerRef=useRef<HTMLDivElement>(null);
    // const [state, action] = useActionState
    useEffect(()=>{
        // observer logic
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                // Load more events
                
            }
        },{
            rootMargin: '100px',
        });
        if (observerRef.current) {
            observer.observe(observerRef.current);
        }
        return () => {
            if (observerRef.current) {
                observer.disconnect();
            }
        };
    },[])
    return(
        <>
        <div ref={observerRef}></div>
        </>
    )
}