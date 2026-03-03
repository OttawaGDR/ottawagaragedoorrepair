import { NextResponse } from 'next/server';

/**
 * Proxies Instagram image URLs so they load even when the CDN blocks direct browser requests.
 * Usage: /api/instagram/image?url=<encoded_media_url>
 */
export async function GET(request) {
  const url = request.nextUrl.searchParams.get('url');
  if (!url) {
    return new NextResponse('Missing url', { status: 400 });
  }

  let mediaUrl;
  try {
    mediaUrl = decodeURIComponent(url);
    if (!mediaUrl.startsWith('https://')) throw new Error('Invalid URL');
  } catch {
    return new NextResponse('Invalid url', { status: 400 });
  }

  try {
    const res = await fetch(mediaUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; OttawaGDR/1.0)' },
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`Upstream ${res.status}`);
    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const buffer = await res.arrayBuffer();
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (e) {
    console.warn('Instagram image proxy failed:', e.message);
    return new NextResponse('Image unavailable', { status: 502 });
  }
}
