'use client';

import { useEffect, useState } from "react";

const apiHeaders = {
    'apikey': '5F5XB722a8HlXkQQqstx7m335eG1VNgp'
}

const apiURL = 'https://api.apilayer.com/app_store/collections';
const apiMethod = 'GET';
const apiRedirect = 'follow';

interface requestOptionProps {
    method: string;
    redirect: RequestRedirect;
    headers: {
        [key: string]: string;
    };
}

const requestOptions: requestOptionProps = {
    method: apiMethod,
    redirect: apiRedirect as RequestRedirect,
    headers: apiHeaders
};

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState<string[]>();
    const getCollections = async () => {
        const response = await fetch(apiURL, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
        setCollections(response);
        setLoading(false);
    }
    useEffect(() => {
        getCollections();
    }, []);

    console.log(collections);

    return <main>
        <header>
            <h1>Home</h1>
        </header>
        <p>Home Page</p>
        <ul>
            {loading ? (
                <li>Loading...</li>
            ) : (
                collections?.map((collection: string, index: number) => (
                    <li key={index}>{collection}</li>
                ))
            )}
        </ul>
    </main>
}