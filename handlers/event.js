const fs = require("fs")
const allevents = new Array();
module.exports = async (client) => {
    try {
        const load_dir = (dir) => {
            const event_file = fs.readdirSync(`./events/${dir}`).filter((file) => file.endsWith(".js"));
            for (const file of event_file) {
                const event = require(`../events/${dir}/${file}`)
                let eventName = file.split(".")[0]
                allevents.push(eventName)
                client.on(eventName, event.bind(null, client));
            }
        }
        await ["client", "guild"].forEach(dir => load_dir(dir))
        for (let i = 0; i < allevents.length; i++) {
            console.log(`[LOGS] Load Event > ${allevents[i]}`)
        }
    } catch (e) {
        console.log(e)
    }
}