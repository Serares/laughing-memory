
/**
 * used to GET data
 * @param url 
 */
export function getData<T>(url: string): Promise<T> {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json() as Promise<T>;
        })
};

// export function postData(url: string, data: {}): Promise<T> {

// };
