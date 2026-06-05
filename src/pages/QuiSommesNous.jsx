import Layout from '../components/Layout'
import TeamMember from '../components/TeamMember'
import AnimateOnScroll from '../components/AnimateOnScroll'
import { teamMembers } from '../data/content'

export default function QuiSommesNous() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="page-hero-inner">
          <AnimateOnScroll>
            <h1>Qui sommes-nous ?</h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="team-section page-content">
        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </section>
    </Layout>
  )
}
