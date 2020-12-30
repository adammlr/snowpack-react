import React from 'react';

interface HeaderProps {
  show: boolean;
}

export function Header({ show }: HeaderProps) {
  return <div>{show ? 'Header' : ''}</div>;
}
