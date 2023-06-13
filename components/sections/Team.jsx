import React from 'react';
import { styled, css } from '~stitches';
import teamData from './teamData';

const Wrapper = styled('section', {
  minHeight: '100vh',
  width: '100%',
  textAlign: 'center',
  scrollMarginTop: '12vh',
});

const TeamGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2.5rem',
  maxWidth: '1142px',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.25)',
  backdropFilter: 'blur(20px)',
  margin: '0 auto',
  borderRadius: '10px',
  padding: '50px',
});

const TeamMemberContainer = styled('div', {
  textAlign: 'center',
  marginBottom: '2rem',
});

const TeamMemberImage = styled('div', {
  position: 'relative',
  cursor: 'pointer',
  marginLeft: 'auto',
  marginRight: 'auto',
  transition: '0.2s all',
  '& img': {
    boxShadow: '0px 8px 24px 2px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
  },
  '&:hover': {
    transform: 'scale(1.05)',
    transition: '0.2s all',
  },
});

const LearnMoreLink = styled('a', {
  fontSize: '22px',
  fontWeight: 'bolder',
  fontFamily: '$filsonPro',
  padding: '10px 20px',
  textDecoration: 'none',
  cursor: 'pointer',
  border: '3.5px solid $blue',
  borderRadius: '14px',
  transition: 'border-color 0.2s ease-out, color 0.2s ease-out',
  color: '$slate',
  marginTop: '10px',
  '& img': {
    height: '18px',
  },
  '&:hover': {
    color: '$blue',
    textDecoration: 'none',
    transition: 'color 0.2s ease-out, text-decoration 0.2s ease-out',
  },
});

const TeamMember = ({ name, role, img, highSchoolYear, experience, link }) => {
  return (
    <TeamMemberContainer>
      <TeamMemberImage>
        <img src={img} alt={name} width={200} height={200} />
      </TeamMemberImage>
      <h3>{name}</h3>
      <p>{role}</p>
      <LearnMoreLink href={link} target="_blank" rel="noopener noreferrer">
        {link}
      </LearnMoreLink>
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
            link={member.link}
          />
        ))}
      </TeamGrid>
    </Wrapper>
  );
};

export default Team;
