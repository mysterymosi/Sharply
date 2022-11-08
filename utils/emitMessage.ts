import { Svix } from "svix";
import { v4 as uuidv4 } from "uuid";

const auth_token = process?.env?.NEXT_PUBLIC_SVIX_API_KEY
const svix = new Svix(auth_token ? auth_token : "");

const listApplications = async () => {
  return await svix.application.list()
}

export const emitMessageToSvix = async (eventType: string, payload: any) => {
  try {
    const data = await svix.message.create((await listApplications()).data[0].id, {
      eventType,
      eventId: uuidv4(),
      payload
    })
    return data;
  } catch (e) {
    console.log(e);
  }
}