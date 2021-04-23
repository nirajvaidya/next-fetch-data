import { people } from "../../../data";

export default function handler(req, res) {
  res.json(people);
}
