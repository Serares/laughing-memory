import React from "react";
import Button from '@material-ui/core/Button';

export interface INavButton extends Object {
  label: string;
  color: "inherit" | "default" | "primary" | "secondary" | undefined;
  path: string
};

export interface INavButtons extends Array<INavButton> {
  [index: number]: INavButton
};

export interface IAdminNavbarLinksProps {
  isAuth: boolean;
  handleNavigation(arg1: string): void;
};

const AdminNavbarLinks = (props: IAdminNavbarLinksProps) => {
  // TODO think of a better implementation

  let loginButtons: INavButtons = [
    {
      label: "Logare",
      color: "inherit",
      path: "/"
    },
    {
      label: "Inregistrare",
      color: "inherit",
      path: "/signup"
    }
  ];

  let mainButtons: INavButtons = [
    {
      label: "Delogare",
      color: "inherit",
      path: "/logout"
    }
  ];

  const renderButtons = () => {
    let links = (
      <>
        {}
      </>
    );

    if (props.isAuth) {
      links = (
        <>
          {mainButtons.map((item, index) => {
            return (<Button
              color={item["color"]}
              onClick={() => { props.handleNavigation(item["path"]) }}
              key={index}
            >
              {item["label"]}
            </Button>)
          })}
        </>
      );
    } else {
      links = (
        <>
          {loginButtons.map((item, index) => {
            return (<Button
              color={item["color"]}
              onClick={() => { props.handleNavigation(item["path"]) }}
              key={index}
            >
              {item["label"]}
            </Button>)
          })}
        </>
      );
    }

    return links;
  };

  return (
    <>
      {renderButtons()}
    </>
  );
}

export default AdminNavbarLinks;
