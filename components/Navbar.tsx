"use client"

import { useState } from 'react';
import { Group, Flex } from '@mantine/core';
import {
  IconHome,
  IconShoppingBag,
  IconSquareRoundedPlus,
} from '@tabler/icons-react';
import { Logo } from 'components/Logo';
import classes from 'components/Navbar.module.css';
import GoogleSignInOutButton from 'components/GoogleSignInOutButton';

const data = [
  { link: '/', label: 'Home', icon: IconHome },
  { link: '/clubs', label: 'Posts', icon: IconShoppingBag },
  { link: '/post/add', label: 'Add Post', icon: IconSquareRoundedPlus },
  ];

export function Navbar() {
  const [active, setActive] = useState("");

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar} style={{
      minHeight: '100vh',
      maxHeight: '100vh',
    }}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Logo />
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <Flex justify={'center'} mb={"2vh"}>
          <GoogleSignInOutButton />
        </Flex>
      </div>
    </nav>
  );
}
