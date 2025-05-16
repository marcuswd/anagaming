export const formatSportName = (name: string) => {
  switch (name.toUpperCase()) {
    case 'SOCCER':
      return 'Futebol'
    case 'ICE_HOCKEY':
      return 'Hóquei no gelo'
    case 'AUSTRALIAN_RULES_FOOTBALL':
      return 'Futebol Australiano'
    case 'AMERICAN_FOOTBALL':
      return 'Futebol Americano'

    case 'BASKETBALL':
      return 'Basquete'

    case 'BASEBALL':
      return 'Beisebol'

    case 'HANDBALL':
      return 'Handebol'

    case 'LACROSSE':
      return 'Lacrosse'

    default:
      return name
  }
}
