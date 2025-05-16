export const formatEventDateTime = (startTime: string) => {
  const datetime = new Date(startTime)

  if (isNaN(datetime.getTime())) {
    return {
      date: 'Data Inválida',
      time: 'Hora Inválida',
    }
  }

  const date = Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
  }).format(datetime)

  const time = Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(datetime)

  return {
    date,
    time,
  }
}
