import {NextApiRequest, NextApiResponse} from "next";
import {User} from "../../../dtos/User";
import {ApiResponse} from "../../../dtos/ApiResponse";
import {apiLink, appToken, getUserCookie} from "../../../helpers";
import {serialize,parse} from "cookie";
import https from "https";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse<User>>
) {
    const {userId} = req.query
    switch (req.method) {
        case 'GET':
            return getUser(req, res, userId)
        default:
            return res.status(501).end()
    }
}

async function getUser(req: NextApiRequest, res: NextApiResponse<ApiResponse<Role>>, userId: string | string[]) {
    try {
      //  console.log(`${appToken}`)
      //  console.log(req.headers.cookie)
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });

        const response = await fetch(`${apiLink}/users/` + userId, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                'asid-services-app': `${appToken}`,
                Cookie: req.headers.cookie
            },

            // @ts-ignore
            agent: httpsAgent,
        });
        const json = await response.json()
        console.log(response)
        if (response.ok) {
            return res.status(response.status).send(json)
        } else {
            return res.status(response.status).json({results:undefined})
        }
    } catch (err) {
        console.log('get user ' + userId + ' error')
        console.log(err)
        return res.status(500).end()
    }
}