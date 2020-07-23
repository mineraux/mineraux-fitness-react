import React, { FunctionComponent, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import config from "../../config/config";

const Header: FunctionComponent = () => {
  let location = useLocation();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Mineraux Fitness</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
        {Object.values(config.routes).map(link => {
          return (
            <Fragment key={link.path}>
              <Link to={link.path} className={
                location.pathname === link.path
                ? 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 active'
                : 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'}
              >
                  {link.name}
              </Link>
            </Fragment>
          )
        })}
        </div>
      </div>
    </nav>
  );
};

export default Header;
