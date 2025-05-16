import { ApiOptions } from '@/utils/api'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.SPORTSBOOK_API_URL}/v0/competitions`,
      {
        ...ApiOptions,
      },
    )

    const data = await response.json()

    return NextResponse.json(data)
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
