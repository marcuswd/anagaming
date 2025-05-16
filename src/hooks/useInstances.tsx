import { InstancieType } from '@/types'
import { useState } from 'react'

export function UseInstances() {
  const [instances, setInstances] = useState<InstancieType[] | undefined>()
  const [currentInstance, setCurrentInstance] = useState('')
}
