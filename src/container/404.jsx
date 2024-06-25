import React, { useState, useEffect } from 'react';
// import { Spin } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import Img from '../static/img/pages/404.svg'

function NotFound() {
  const [state, setState] = useState({
    isLoading: true,
  });
  useEffect(() => {
    setTimeout(() => {
      setState({ isLoading: false });
    }, 1000);
  }, []);
  return (
    <main className="min-h-[715px] lg:min-h-[580px]">
        <div className="flex justify-center items-center flex-col min-h-screen pb-36 px-[15px] text-center">
          <img className="mx-auto mb-20" src={Img} alt="404" />
          <h3
            className="text-light-extra dark:text-white60 mb-5 text-6xl ssm:text-5xl xs:text-4xl font-semibold"
            as="h3"
          >
            404
          </h3>
          <p className="text-body dark:text-white60 mb-6 text-lg xs:text-base font-medium">
            Sorry! the page you are looking for does not exist.
          </p>
          <NavLink to="/">
            <Link size="default" type="primary" to="/" className="h-11">
              Return Home
            </Link>
          </NavLink>
        </div>
    </main>
  );
}

export default NotFound;
