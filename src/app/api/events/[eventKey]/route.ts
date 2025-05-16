import { NextResponse } from 'next/server'
import { ApiOptions } from '@/utils/api'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ eventKey: string }> },
) {
  try {
    const { eventKey } = await params

    const response = await fetch(
      `${process.env.SPORTSBOOK_API_URL}/v0/events/${eventKey}`,
      {
        ...ApiOptions,
      },
    )

    const data = await response.json()

    const { events } = data

    return NextResponse.json({ data: events, error: null })
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
