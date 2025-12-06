'use server';

export async function getApiData<T>(url: string): Promise<T> {
    const response = await fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('error', error);
            throw error;
        });
    return response;
}