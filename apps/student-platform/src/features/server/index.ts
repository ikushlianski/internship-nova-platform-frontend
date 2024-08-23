import { redirect } from 'next/navigation';

export async function POST(request: Response) {
    const { accepted } = await request.json();

    if (!accepted) {
        return new Response(JSON.stringify({ error: 'You must read and accept Privacy Policy' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    const googleCallbackUrl = `${process.env.NEXT_PUBLIC_API_HOST}/auth/google/callback`;

    return new Response(JSON.stringify({ redirect: googleCallbackUrl }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
