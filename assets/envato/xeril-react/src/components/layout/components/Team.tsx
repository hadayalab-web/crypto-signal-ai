import userimg1 from '@/assets/images/users/img-1.jpg'
import userimg2 from '@/assets/images/users/img-2.jpg'
import user3 from '@/assets/images/users/img-3.jpg'
import user4 from '@/assets/images/users/img-4.jpg'
import { Col, Container, Image, Row } from 'react-bootstrap'

type TeamMember = {
  name: string
  role: string
  description: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Juliana Waddell',
    role: 'Founder & CEO',
    description: 'Juliana leads the company with over 10 years of experience in tech innovation and business development.',
    image: userimg1,
  },
  {
    name: 'Tyler Raymer',
    role: 'Lead Developer',
    description: 'Tyler specializes in full-stack development and drives product scalability and performance.',
    image: userimg2,
  },
  {
    name: 'Chris Lewis',
    role: 'UI/UX Designer',
    description: 'Chris designs beautiful, user-centered interfaces with a focus on simplicity and accessibility.',
    image: user3,
  },
  {
    name: 'Sophia Turner',
    role: 'Project Manager',
    description: 'Sophia ensures smooth project delivery and coordinates between development and design teams.',
    image: user4,
  },
]

const Team = () => {
  return (
    <>
      <section className="section" id="team">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="header-title text-center">
                <p className="text-uppercase text-muted mb-2">Minds</p>
                <h2 className="text-uppercase">Our Teams</h2>
                <div className="title-border mt-3" />
                <p className="title-desc text-muted mt-3">
                  Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec
                  sollicitudin.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 pt-2">
            {teamMembers.map((member, idx) => (
              <Col lg={3} key={idx}>
                <div className="team-box text-center mt-4">
                  <div className="team-img">
                    <Image src={member.image} height={130} width={130} className="rounded-circle" alt={member.name} />
                  </div>
                  <div className="team-content bg-white mt-4 p-4 rounded">
                    <h5 className="f-18 text-primary">{member.name}</h5>
                    <p>{member.role}</p>
                    <p className="text-muted mb-0">{member.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Team
