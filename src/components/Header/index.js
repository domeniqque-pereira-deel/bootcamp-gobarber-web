import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

const getAvatar = profile => {
  if (profile?.avatar?.url) {
    return profile.avatar.url;
  }

  return `https://avatars.dicebear.com/api/adventurer/${profile.name}.svg`;
};

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>

            <img src={getAvatar(profile)} alt={profile.name} />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
