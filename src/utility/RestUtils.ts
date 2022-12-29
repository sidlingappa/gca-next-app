import type {NextApiRequest} from "next";

export class RestUtils {

  static createPostRequest(req: NextApiRequest, url: string): Request {

   return new Request(url, {
      method: 'POST',
      body: JSON.stringify(req.body),
      credentials: "include",
      headers: {
         'Content-Type': 'application/json',
         'asid-services-app': `${appToken}`,
         Cookie: req.headers.cookie
      }
    });
  }

  static createPutRequest(req: NextApiRequest, url: string): Request {
    return new Request(url, {
      method: 'PUT',
      body: JSON.stringify(req.body),
      credentials: "include",
      headers: {
           'Content-Type': 'application/json',
           'asid-services-app': `${appToken}`,
           Cookie: req.headers.cookie
        }
    });
  }

  static createGetRequest(req: NextApiRequest, url: string): Request {
    return new Request(url, {
      method: 'GET',
      credentials: "include",
      headers: {
           'Content-Type': 'application/json',
           'asid-services-app': `${appToken}`,
           Cookie: req.headers.cookie
        }
    });
  }
}
