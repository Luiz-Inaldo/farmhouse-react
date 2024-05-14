// import data
import { staffMembers } from '../data/staffMembers'

// import css
import './About.css'

export const About = () => {

    return (
        <>
            <div className="banner about-bg parallax">
                <div className="max-w940 banner-info">
                    <h2>descubra-nos</h2>
                    <p>
                        quem está por trás do projeto farmhouse
                    </p>
                </div>
            </div>
            <div className="max-w940 staff-section">
                <h2>nossa <strong>equipe</strong></h2>
                <div className="staff-box">
                    {staffMembers.map(member => (
                        <div className='staff-member' key={member.id}>
                            <div className='member-img'>
                                <img src={member.img} alt="member-img" title={member.name} />
                            </div>
                            <h2 className='member-name'>{member.name}</h2>
                            <p className="member-job">{member.job}</p>
                            <p className="member-description">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
