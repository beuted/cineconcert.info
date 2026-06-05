import Layout from '../components/Layout'
import HeroSlider from '../components/HeroSlider'
import FlipBox from '../components/FlipBox'
import TeamMember from '../components/TeamMember'
import { IMAGES, teamMembers } from '../data/content'

export default function Home() {
  return (
    <Layout transparentHeader>
      <HeroSlider />

      <section className="flip-boxes-row">
        <FlipBox
          title="PARIS QUI DORT"
          subtitle="Mise en musique du célèbre film de René Clair"
          image={IMAGES.parisQuiDort}
          overlayColor="rgba(197, 219, 28, 0.52)"
          backColor="rgba(197, 219, 28, 0.85)"
          link="/paris-qui-dort"
        />
        <FlipBox
          title="SEPT ANS DE MALHEUR"
          subtitle="film de Max Linder"
          image={IMAGES.septAns}
          overlayColor="rgba(83, 123, 224, 0.52)"
          backColor="rgba(112, 121, 191, 0.85)"
          link="/sept-ans-de-malheur"
        />
      </section>

      <section className="team-section">
        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </section>
    </Layout>
  )
}
