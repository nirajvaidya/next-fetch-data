// import { NextApiRequest, NextApiResponse } from "next";

// export default function hello(req: NextApiRequest, res: NextApiResponse) {
//   console.log(req);
//   res.json({ status: "ok" });
// }

export default function Hello(req, res) {
  console.log(req.body);
  res.status(200).json({ name: "Next.js" });
  return <div>asdnhfas</div>;
}
