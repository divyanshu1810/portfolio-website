// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "@/utils/database";
import type { NextApiRequest, NextApiResponse } from "next";
const accountSid = process.env.NEXT_PUBLIC_ACCOUNT_SID;
const authToken = process.env.NEXT_PUBLIC_AUTH_TOKEN;
const twilio = require("twilio")(accountSid, authToken);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const collection = client.db("portfolio").collection("messages");
      collection.insertOne(req.body);
      await twilio.messages.create({
        body: `Name: ${req.body.name} \nEmail: ${req.body.email} \nMessage: ${req.body.message}`,
        from: process.env.NEXT_PUBLIC_FROM,
        to: process.env.NEXT_PUBLIC_TO,
      });
      res
        .status(200)
        .json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Message not sent" });
    }
  }
  if (req.method === "GET") {
    try {
      const collection = client.db("portfolio").collection("messages");
      const messages = await collection.find({}).toArray();
      res.status(200).json({
        success: true,
        message: "Message fetched successfully",
        data: messages,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Message not sent" });
    }
  }
}
