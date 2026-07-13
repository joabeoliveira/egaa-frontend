import { NextResponse } from 'next/server';
import { dbMock } from '@/lib/db-mock';

export async function POST(request: Request) {
  try {
    const data = await request.json().catch(() => ({}));
    const result = dbMock.uploadArquivo('historico', data.conteudo || '');
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Erro no processamento da carga histórica' }, { status: 500 });
  }
}
