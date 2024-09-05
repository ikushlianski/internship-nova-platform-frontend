export default async function handler(req, res) {
  if (req.method === "POST") {
    const { accepted } = req.body;

    if (!accepted) {
      return res.status(400).json({
        error: "You must read and accept Privacy Policy",
      });
    }

    const googleCallbackUrl = `${process.env.NEXT_PUBLIC_API_HOST}/auth/google/callback`;

    return res.status(200).json({ redirect: googleCallbackUrl });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
