import React from 'react';
import Image from 'next/image';
import { styled, css } from '~stitches';
import guestData from './guestData';

import { Header } from '../atoms';

const Wrapper = styled('section', {
  minHeight: '100vh',
  width: '100%',
  textAlign: 'center',
  scrollMarginTop: '12vh',
});

const GuestGrid = styled('div', css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2.5rem',
  background: 'linear-gradient(101.99deg, rgba(249, 249, 249, 0.5) 5.49%, rgba(249, 249, 249, 0.3) 100%)',
  maxWidth: '800px',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.25)',
  backdropFilter: 'blur(20px)',
  margin: '0 auto',
  borderRadius: '10px',
  padding: '50px',
}));

const GuestMemberContainer = styled('div', {
  textAlign: 'center',
  marginBottom: '2rem',
});

const GuestMemberImage = styled('div', {
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

const GuestMember = ({ name, role, img, highSchoolYear, experience, link }) => {
  return (
    <GuestMemberContainer>
      <GuestMemberImage>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image src={img} alt={name} width={200} height={200} />
        </a>
      </GuestMemberImage>
      <h3 style={{ color: 'white' }}>
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          {name}
        </a>
      </h3>
      <p>{role}</p>
    </GuestMemberContainer>
  );
};



const Guest = () => {
  return (
    <Wrapper>
      <h2>Our Guest</h2>
      <GuestGrid>
        {guestData.map((member) => (
          <GuestMember
            key={member.id}
            name={member.name}
            role={member.role}
            img={member.image}
            highSchoolYear={member.highSchoolYear}
            experience={member.experience}
            link={member.link}
          />
        ))}
      </GuestGrid>
    </Wrapper>
  );
};

export default Guest;
