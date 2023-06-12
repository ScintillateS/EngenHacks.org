import React from 'react';
import Image from 'next/image';
import { styled, css } from '~stitches';
import { teamMembers } from './teamData';

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


const TeamMember = ({ name, role, img }) => (
  <div>
    <Image src={img} alt={name} width={200} height={200} />
    <h3>{name}</h3>
    <p>{role}</p>
  </div>
);


const Team = () => {
  return (
    <Wrapper id="Team">
      <Header align="center">Meet the Team</Header>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            img={member.img}
          />
        ))}
      </TeamGrid>
    </Wrapper>
  );
};

export default Team;
