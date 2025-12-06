'use server';

export async function getApiData(url: string) {
    const response = await fetch(url)
        .then(response => response.json())
        .catch(error => console.error('error', error));
    return response;
}