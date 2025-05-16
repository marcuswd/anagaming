import { NextRequest, NextResponse } from 'next/server'
import { ApiOptions } from '@/utils/api'

export async function GET(
  request: NextRequest,
  { params }: { params: { competitionKey: string } },
) {
  try {
    const { competitionKey } = params

    const response = await fetch(
      `${process.env.SPORTSBOOK_API_URL}/v0/competitions/${competitionKey}/events`,
      {
        ...ApiOptions,
      },
    )

    const data = await response.json()

    // Parse the JSON response
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
