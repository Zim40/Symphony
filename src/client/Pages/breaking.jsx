import { useState, useEffect } from "react";

export default function Breaking() {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/top-stories");
    
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
    
                const data = await response.json();
                const topStories = data.data.data;
                setData(topStories);
                
                console.log(data.data.data);
            } catch (error) {
                console.error(`Error: ${error.message}`);
            }
        };
        
        fetchData();
    }, []);
    

    return (
        <section id="breaking-main">
            
        </section>
    )
}