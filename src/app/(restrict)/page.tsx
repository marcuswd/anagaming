'use client'
import LayoutContainer from '@/components/Container'
export default function DashboardPage() {
  return (
    <>
      <section>
        <LayoutContainer className="grid grid-cols-1 items-start">
          <div>
            <div className="list-matchs mt-5"></div>
          </div>
        </LayoutContainer>
      </section>
    </>
  )
}
