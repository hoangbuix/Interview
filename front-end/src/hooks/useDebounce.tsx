import  { useState, useEffect, useRef } from 'react';

const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    const typingTimeoutRef = useRef<any>(null)

    useEffect(() => {
        typingTimeoutRef.current = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(typingTimeoutRef.current);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;
