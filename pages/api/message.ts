// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from '@/utils/database'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method === "POST"){
        try {
            const collection = client.db("portfolio").collection("messages");
            collection.insertOne(req.body);
            res.status(200).json({success:true, message: "Message sent successfully" });
        } catch (error) {
            res.status(500).json({success:false, message: "Message not sent" });
        }
    }
    if(req.method === "GET"){
        try {
            const collection = client.db("portfolio").collection("messages");
            const messages = await collection.find({}).toArray();
            res.status(200).json({success:true, message: "Message fetched successfully", data: messages });
        } catch (error) {
            res.status(500).json({success:false, message: "Message not sent" });
        }
    }
}
