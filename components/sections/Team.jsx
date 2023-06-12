import React, { useState } from 'react';
import Image from 'next/image';
import { styled, css } from '~stitches';
import teamData from './teamData';

import { Header } from '../atoms';

const Wrapper = styled('section', {
  minHeight: '100vh',
  width: '100%',
  textAlign: 'center',
  scrollMarginTop: '12vh',
});

const TeamGrid = styled('div', css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2.5rem',
  maxWidth: '1142px',
  margin: '0 auto',
  padding: '50px',
}));

const TeamMemberContainer = styled('div', {
  textAlign: 'center',
  marginBottom: '2rem',
});

const RoundedSquare = styled('div', {
  position: 'relative',
  width: '200px',
  height: '200px',
  borderRadius: '20px',
  background: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
});

const TeamMemberImage = styled(RoundedSquare, {
  cursor: 'pointer',
});

const CircularImage = styled(Image, {
  borderRadius: '50%',
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
        <CircularImage src={img} alt={name} width={180} height={180} objectFit="cover" />
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
    <Wrapper>
      <h2>Our Team</h2>
      <TeamGrid>
        {teamData.map((member) => (
          <TeamMember
            key={member.id}
            name={member.name}
            role={member.role}
            img={member.image}
            highSchoolYear={member.highSchoolYear}
            experience={member.experience}
          />
        ))}
      </TeamGrid>
    </Wrapper>
  );
};

export default Team;