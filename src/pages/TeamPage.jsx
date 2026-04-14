import { teamMembers } from '../data/migrationData'

export default function TeamPage() {
  return (
    <main className="shell page-wrap">
      <p className="eyebrow">Team</p>
      <h1>Team showcase is now a React route</h1>
      <p className="page-copy">
        Team blocks are componentized and ready for profile detail routes in a later
        phase.
      </p>
      <section className="content-card-grid">
        {teamMembers.map((member) => (
          <article key={member.name} className="content-card">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <small className="meta-tag">{member.focus}</small>
          </article>
        ))}
      </section>
    </main>
  )
}
