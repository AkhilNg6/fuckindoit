import clientPromise from '@/app/lib/mongodb.js';

export async function POST(request) {
  try {
    const { vote } = await request.json();
    if (!['hell yeah', 'nah'].includes(vote)) {
      return new Response(JSON.stringify({ error: 'Invalid vote' }), { status: 400 });
    }
    const client = await clientPromise;
    const db = client.db();
    await db.collection('votes').insertOne({ vote, createdAt: new Date() });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}