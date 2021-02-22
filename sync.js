const contentful = require('contentful');

const client = contentful.createClient({
    space: 'uoo8xrj2ps6p',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'Ciqzrt4aWIXv_8re9024aT3ZukOYA85xrkdQIMIyVCY',
});

client
    .sync({
        initial: true,
        // type: 'Blog',
    })
    .then((response) =>
        console.log({
            entries: response.entries,
            assets: response.assets,
            nextSyncToken: response.nextSyncToken,
        })
    )
    .catch(console.error);
