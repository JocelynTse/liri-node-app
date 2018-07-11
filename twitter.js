function tweets() {
    client.get('statuses/home_timeline', function (error, text, created_at) {
        if (error !== null) {
            console.error(error);
        } else {

            console.log(JSON.stringify(text));
            //console.log(JSON.stringify)
            //console.log(created_at)
        }
    })
};