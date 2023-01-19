import React from 'react';
import { API_ROUTES, APP_ROUTES } from '../utils/constants';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
export default function Layout({ children }) {
  const logOut = async () => {
    localStorage.clear();
    await axios({
      method: 'POST',
      url: API_ROUTES.SIGN_OUT
    });
    Router.push(APP_ROUTES.SIGN_IN);
  };
  const deposit = () => {
    Router.push(APP_ROUTES.DEPOSIT);
  }

  return (
    <>
      <div className="h-screen bg-gradient-to-r">
        <header className="flex shadow-lg p-4 bg-blue-900 text-white">
          <Link href={APP_ROUTES.HOME}>
            <a className="mr-5" > Home </a>
          </Link>
          <Link href={APP_ROUTES.PROFILE}>
            <a className="mr-5"> Profile </a>
          </Link>
          <Link href={APP_ROUTES.TRANSACTION}>
            <a className="mr-5"> Transaction </a>
          </Link>
          <Link href={APP_ROUTES.GAME_LIST}>
            <a className="mr-5"> Game List </a>
          </Link>
          <div className="ml-auto">
            <button className="mr-3" onClick={deposit}> Deposit </button>
            <button className="" onClick={logOut}> Logout </button>
          </div>
        </header>
        <main className="flex" style={{ minHeight: 'calc(100% - 120px)' }}>
          {children}
        </main>
      </div>
    </>
  );
}
