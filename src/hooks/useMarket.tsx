import { Market } from '@/types'
import { useState } from 'react'

export function useMarket() {
  const [currentMarket, setCurrentMarket] = useState('')
  const [listMarkets, setListMarkets] = useState<Market[] | null>()
}
