import { NextResponse } from 'next/server';

/**
 * Fetches recent Instagram posts via Instagram Graph API.
 * Requires INSTAGRAM_ACCESS_TOKEN in .env (long-lived User Access Token with instagram_basic).
 * Get token: Meta for Developers > Your App > Instagram Graph API.
 */
export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json({ posts: [] });
  }

  try {
    const url = new URL('https://graph.instagram.com/me/media');
    url.searchParams.set('fields', 'id,caption,media_url,thumbnail_url,permalink,media_type');
    url.searchParams.set('limit', '8');
    url.searchParams.set('access_token', token);

    const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.error) {
      console.warn('Instagram API error:', data.error.message);
      return NextResponse.json({ posts: [] });
    }

    const posts = (data.data || []).map((p) => ({
      id: p.id,
      caption: p.caption ? p.caption.slice(0, 120) + (p.caption.length > 120 ? '…' : '') : '',
      mediaUrl: p.media_url,
      thumbnailUrl: p.thumbnail_url || p.media_url,
      permalink: p.permalink,
      mediaType: p.media_type || 'IMAGE',
    }));

    return NextResponse.json({ posts });
  } catch (e) {
    console.warn('Instagram feed fetch failed:', e.message);
    return NextResponse.json({ posts: [] });
  }
}
