import { Breadcrumbs, Typography } from "@mui/material";
import _ from "lodash";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <>
      {pathnames.length === 0 ? null : (
        <Breadcrumbs sx={{ mx: 2 }}>
          <Link to="/">
            <Typography>Home</Typography>
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Link key={name} to={routeTo}>
                <Typography color="primary">
                  {_.capitalize(name)}
                </Typography>
              </Link>
            ) : (
              <Link key={name} to={routeTo}>
                <Typography>{_.capitalize(name)}</Typography>
              </Link>
            );
          })}
        </Breadcrumbs>
      )}
    </>
  );
};

export default Breadcrumb;
