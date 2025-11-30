export const metadata = {
    title: 'Home',
}

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

async function getCollections() {
    // TEST : Loading delay
    // await new Promise((promise) => setTimeout(promise, 1000));
    const response = await fetch(apiURL, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
    return response;
}

export default async function Home() {
    const collections: string[] = await getCollections();

    return <main>
        <header>
            <h1>{metadata.title}</h1>
        </header>
        <p>Home Page</p>
        <ul>
            {collections.map((collection: string, index: number) => (
                <li key={index}>{collection}</li>
            ))}
        </ul>
    </main>
}