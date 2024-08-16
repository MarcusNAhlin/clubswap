import { SHA256 as sha256 } from "crypto-js";
import { prisma } from "lib/prisma";

export default async function handle(req: any, res: any) {
  if (req.method === "POST") {
    //login uer
    await loginUserHandler(req, res);
  } else {
    return res.status(405);
  }
}
async function loginUserHandler(req: any, res: any) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "invalid inputs" });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });
    if (user && user.password === sha256(password).toString()) {
      // exclude password from json response
      return res.status(200).json(exclude(user, ["password"]));
    } else {
      return res.status(401).json({ message: "invalid credentials" });
    }
  } catch (e) {
    throw new Error(String(e));
  }
}
// Function to exclude user password returned from prisma
function exclude(user: any, keys: any) {
  for (let key of keys) {
    delete user[key];
  }
  return user;
}
