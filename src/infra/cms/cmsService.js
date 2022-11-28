const TOKEN_READONLY = process.env.DATO_TOKEN_READONLY;

export async function cmsService({ query }) {
    try {
        const pageContentResponse = await fetch('https://graphql.datocms.com/', {
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

        return {
            data: pageContentResponse.data,
        }
    } catch (err) {
        throw new Error(err.message);
    }
}
