const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/91f270ecae04095cde3b26b148db3d10/' + lat + ',' + long + '?exclude=minutely,hourly,flags'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (body.error) {
            callback('Unable to find location.')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out.  We have a high of ' + body.daily.data[0].temperatureHigh + ' degrees, with a low of ' + body.daily.data[0].temperatureLow +' degrees.  There is a ' + body.currently.precipProbability + '% chance of rain.');
        }
    })
}

module.exports = forecast