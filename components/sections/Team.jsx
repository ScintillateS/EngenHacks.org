import React from 'react';
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
  boxSizing: 'border-box',
  boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.25)',
  backdropFilter: 'blur(20px)',
  margin: '0 auto',
  borderRadius: '10px',
  padding: '50px',
}));

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

const LearnMoreButton = styled('a', {
  animation: 'pulse 1s infinite',
  fontSize: '22px',
  fontWeight: 'bolder',
  fontFamily: '"NTR"',
  padding: '10px 20px',
  textDecoration: 'none !important',
  cursor: 'pointer',
  border: '3.50px solid var(--blue)',
  borderRadius: '14px',
  transition: 'border-color 0.2s ease-out, color 0.2s ease-out',
  color: 'var(--slate)',
  marginTop: '10px',
  '& img': {
    height: '18px',
  },
  '&:hover': {
    color: 'var(--blue) !important',
    textDecoration: 'none !important',
    transition: 'color 0.2s ease-out, text-decoration 0.2s ease-out',
  },
});

const TeamMember = ({ name, role, img, highSchoolYear, experience, link }) => {
  return (
    <TeamMemberContainer>
      <TeamMemberImage>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image src={img} alt={name} width={200} height={200} />
        </a>
      </TeamMemberImage>
      <h3>
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          {name}
        </a>
      </h3>
      <p>{role}</p>
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
