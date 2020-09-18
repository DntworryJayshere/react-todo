import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to='/'>
        Home
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to='/completedTodos'>
        Completed Todos
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to='/deletedTodos'>
        Deleted Todos
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to='/savedTodos'>
        Saved Todos
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to='/aboutTodos'>
        About Todos App
      </Link>
    </header>
  );
}
