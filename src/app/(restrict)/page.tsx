'use client'
import LayoutContainer from '@/components/Container'
export default function DashboardPage() {
  return (
    <>
      <section>
        <LayoutContainer className="grid grid-cols-1 items-start">
          <div>
            {/* <h2 className="uppercase text-gray-600 flex gap-3 items-center">
              <figure style={{ width: '24px' }}>
                <Image
                  src={`/images/${currentSport.sport}.png`}
                  width={410}
                  height={510}
                  alt={currentSport.newName || currentSport.sport}
                />
              </figure>
              {currentSport.newName}
            </h2> */}

            <div className="list-matchs mt-5">
              {/* {Object.entries(eventsByCompetition).map(
                ([competitionKey, events]) => (
                  <div key={competitionKey}>
                  <header className="grid grid-cols-[calc(55%+60px)_1fr] py-6 bg-gray-100 px-3 items-center">
                    <h3 className="text-sm font-semibold py-2 px-3 bg-gray-50">
                          {listCompetitionsBySport?.find(
                            (comp) => comp.key === competitionKey,
                          )?.name || ''}
                        </h3>
                  </header>
                    
                    {events.map((item) => (
                      <EventList item={item} key={item.key} />
                    ))}
                  </div>
                ),
              )} */}
            </div>
          </div>
        </LayoutContainer>
      </section>
    </>
  )
}
