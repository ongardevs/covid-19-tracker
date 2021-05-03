import React from "react";
import "./Footer.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import EmailIcon from "@material-ui/icons/Email";

export const Footer = () => {
  const preventDefault = (event) => event.preventDefault();
  return (
    <Grid className="footer-bottom-container" container justify="center">
      <Grid style={{ textAlign: "center" }} item md={2} sm={2} xs={12}></Grid>
      <Grid style={{ textAlign: "center" }} item md={8} sm={8} xs={12}>
        <Typography>
          <Tooltip title="Follow me on GitHub" placement="left">
            <Button
              href="https://github.com/jabyqlab"
              target="_blank"
              justIcon
              link
              style={{ color: "#ffffff" }}
            >
              <i className={"fab fa-github"} />
            </Button>
          </Tooltip>
          <Tooltip
            id="instagram-twitter"
            title="Follow me on twitter"
            placement="left"
          >
            <Button
              href="https://twitter.com/ongar_dev"
              target="_blank"
              color="transparent"
              style={{ color: "#ffffff" }}
            >
              <i className={"fab fa-twitter"} />
            </Button>
          </Tooltip>
        </Typography>
        <Typography
          style={{ color: "#999999" }}
          className="footer-item"
          variant="caption"
          gutterBottom
        >
          &copy; {1900 + new Date().getYear()} COVID-19 Tracker , Ongar
          Developer
          <EmailIcon
            style={{ width: 18, height: 14, position: "relative", top: 3 }}
          />{" "}
          contact.jabyq@gmail.com
        </Typography>
      </Grid>
      <Grid style={{ textAlign: "center" }} item md={2} sm={2} xs={12}></Grid>
    </Grid>
  );
};
