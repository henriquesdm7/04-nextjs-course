const BASE_ENDPOINT = `https://graphql.datocms.com/`;
const PREVIEW_ENDPOINT = `https://graphql.datocms.com/preview`;
const TOKEN_READONLY = process.env.DATO_TOKEN_READONLY;

const globalQuery = `
    query {
        globalFooter {
            description
        }
    }
`

export async function cmsService({ query, preview = false }) {
    const ENDPOINT = preview ? PREVIEW_ENDPOINT : BASE_ENDPOINT;

    try {
        const pageContentResponse = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN_READONLY}`
            },
            body: JSON.stringify({ query })
        })
            .then((response) => {
                return response.json();
            })
            .then((body) => {
                if (!body.errors) return body;

                throw new Error(JSON.stringify(body));
            })

        const globalContentResponse = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN_READONLY}`
            },
            body: JSON.stringify({
                query: globalQuery
            })
        })
            .then((response) => {
                return response.json();
            })
            .then((body) => {
                if (!body.errors) return body;
                throw new Error(JSON.stringify(body));
            })

        return {
            data: {
                ...pageContentResponse.data,
                globalContent: {
                    ...globalContentResponse.data
                }
            },
        }
    } catch (err) {
        throw new Error(err.message);
    }
}
