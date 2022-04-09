import React, { useState, useEffect } from 'react';import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import useStyles from './styles';
import Pagination from '../Pagination';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container maxWidth='xl'>
        <Grid className={classes.gridContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
          <Grid item xs={12} sm={12} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={8} md={3}>
            <AppBar className={classes.appBarSearch} position='static' color='inherit'>
              <TextField name='search' variant='outlined' label='Search Memories' fullWidth value='TEST' onChange={() => {}} />
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};
