import { NextRequest, NextResponse } from 'next/server';
import { artworks, orders, sellers } from '@/mock/data';

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  return NextResponse.json({
    seller: sellers.find((seller) => seller.id === id),
    artworks: artworks.filter((artwork) => artwork.sellerId === id),
    orders: orders.filter((order) => order.sellerId === id),
    isolation: 'Only records matching authenticated sellerId are returned',
  });
}
