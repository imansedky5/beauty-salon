import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import useStyles from './style';

const ServiceCardForHomePage = ({ imageSrc, serviceName }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={imageSrc} title="service" />
      <Link className={classes.service_name} to="/services">
        {serviceName}
      </Link>
    </Card>
  );
};

const { string } = PropTypes;
ServiceCardForHomePage.propTypes = {
  imageSrc: string,
  serviceName: string,
};
ServiceCardForHomePage.defaultProps = {
  imageSrc:
    'data:image/jpeg;base64,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',
  serviceName: 'Skin Care',
};

export default ServiceCardForHomePage;