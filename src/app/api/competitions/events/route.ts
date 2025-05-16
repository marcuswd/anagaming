import { ApiOptions } from '@/utils/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const eventKeysParam = searchParams.get('eventKeys')

    if (!eventKeysParam) {
      return NextResponse.json(
        { error: 'Parâmetro eventKeys não fornecido' },
        { status: 400 },
      )
    }

    let eventKeys: string[]
    try {
      eventKeys = JSON.parse(decodeURIComponent(eventKeysParam))

      if (!Array.isArray(eventKeys)) {
        throw new Error('eventKeys deve ser um array')
      }
    } catch (error) {
      return NextResponse.json(
        {
          error:
            'Formato inválido para eventKeys. Deve ser um array JSON válido.',
        },
        { status: 400 },
      )
    }

    const baseUrl = `${process.env.SPORTSBOOK_API_URL}/v0/events/`
    const url = new URL(baseUrl)

    eventKeys.forEach((key) => {
      url.searchParams.append('eventKeys', key)
    })

    const response = await fetch(url.toString(), {
      ...ApiOptions,
    })

    const { events } = await response.json()

    return NextResponse.json({ events })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 },
    )
  }
}
