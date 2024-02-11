/**
 * MC Server result interface has version, players, description and other attributes
 * Interface for structure of returned object by server
 */
export interface MCServerResult {
    status: string
    online: boolean
    motd: string
    motd_json: object | string
    favicon: string
    error: string
    players: {
        max: number
        now: number
        sample: Array<{
            name: string
            id: string
        }>
    }
    server: {
        name: string
        protocol: number
    }
    last_updated: string
    duration: string
}

/**
 * Query all provided Ips and return an array of results
 * @param ips
 * @returns
 */
export async function queryAll(ips: string[]): Promise<Array<MCServerResult>> {
    let objs = [];
    ips.forEach(async (ip) => {
        await query(ip).then((obj) => {
            objs.push(obj);
        });
    });
    return objs;
}

/**
 * Return result object corresponding to passed in ip
 * @param ip
 * @returns
 */
export function query(ip: string): Promise<any> {
    return new Promise<any>(
        function (resolve, reject) {
            const request = new XMLHttpRequest();
            request.onload = function () {
                if (this.status === 200) {
                    let responseString = "";
                    for (let i=0; i<this.response.length; i++) {
                        responseString += this.response[i];
                    }
                    resolve(JSON.parse(responseString));
                } else {
                    reject(new Error(this.statusText));
                }
            };
            request.onerror = function () {
                reject(new Error('XMLHttpRequest Error: ' + this.statusText));
            };
            request.open('GET', "https://mcapi.us/server/status?ip=" + ip);
            request.send();
        });
}
