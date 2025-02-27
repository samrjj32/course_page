import type { NextApiRequest, NextApiResponse } from 'next';
import Razorpay from 'razorpay';

interface OrderResponse {
  orderId: string;
  amount: number;
}

interface ErrorResponse {
  message: string;
}

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OrderResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const order = await razorpay.orders.create({
      amount: req.body.amount, // amount in paisa
      currency: 'INR',
      receipt: 'order_' + Date.now(),
    });

    res.status(200).json({
      orderId: order.id,
      amount: order.amount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
} 