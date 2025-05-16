import { NextResponse } from 'next/server'
import { ApiOptions } from '@/utils/api'

export async function GET(
  request: Request,
  { params }: { params: { marketKey: string } },
) {
  try {
    const { marketKey } = await params

    const response = await fetch(
      `${process.env.SPORTSBOOK_API_URL}/v0/markets/${marketKey}/outcomes/last`,
      {
        ...ApiOptions,
      },
    )

    const data = await response.json()

    const { outcomes } = data

    return NextResponse.json({ outcomes, error: null })
  } catch (err) {
    return NextResponse.json(
      {
        error:
          err instanceof Error
            ? `Erro na requisição ${err.message}.`
            : `Ocorreu um erro desconhecido na requisição.`,
      },
      { status: 500 },
    )
  }
}
