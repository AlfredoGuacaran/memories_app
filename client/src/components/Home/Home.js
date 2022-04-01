import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import useStyles from './styles';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

export const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent='space-between'
          alignItems='stretch'
          spacing={4}
        >
          <Grid item sm={12} md={8} lg={8}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item sm={12} md={4} lg={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};
