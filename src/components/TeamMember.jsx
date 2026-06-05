import AnimateOnScroll from './AnimateOnScroll'

export default function TeamMember({ member }) {
  const paragraphs = member.bio.split('\n').filter(Boolean)

  return (
    <AnimateOnScroll animation={member.animation} className="team-member-col">
      <div className="team-member">
        <img src={member.image} alt={member.name} />
        <h4>{member.name}</h4>
        <div className="position">{member.role}</div>
        <div className="description">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  )
}
