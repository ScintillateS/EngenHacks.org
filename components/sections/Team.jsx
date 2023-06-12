import React, { useState } from 'react';
import Image from 'next/image';
import { styled, css } from '~stitches';
import teamData from './teamData';

import { Header } from '../atoms';

const Wrapper = styled('section', {
  minHeight: '100vh',
  width: '100%',
  scrollMarginTop: '12vh',
});

const TeamGrid = styled('div', css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2.5rem',
  maxWidth: '1142px',
  background: 'linear-gradient(101.99deg, rgba(249, 249, 249, 0.5) 5.49%, rgba(249, 249, 249, 0.3) 100%)',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.25)',
  backdropFilter: 'blur(20px)',
  margin: '0 auto',
  borderRadius: '10px',
  padding: '50px',
}));

const TeamMemberContainer = styled('div', {
  position: 'relative',
});

const TeamMemberImage = styled('div', {
  position: 'relative',
  cursor: 'pointer',
});

const Popup = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#fff',
  boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.25)',
  borderRadius: '10px',
  padding: '20px',
  zIndex: '9999',
});

const TeamMember = ({ name, role, img, highSchoolYear, experience }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <TeamMemberContainer>
      <TeamMemberImage onClick={togglePopup}>
        <Image src={img} alt={name} width={200} height={200} />
      </TeamMemberImage>
      <h3>{name}</h3>
      <p>{role}</p>
      {showPopup && (
        <Popup>
          <h4>High School Year: {highSchoolYear}</h4>
          <p>Experience: {experience}</p>
          {/* Additional information about the team member */}
        </Popup>
      )}
    </TeamMemberContainer>
  );
};

const Team = () => {
  return (
    <div>
      <h2>Our Team</h2>
      <div className="team-members">
        {teamData.map((member) => (
          <div key={member.id} className="member">
            <Image src={member.image} alt={member.name} width={150} height={150} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;