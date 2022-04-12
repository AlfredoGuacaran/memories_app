import React, { useState } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import { useDispatch } from 'react-redux';
import { getPostsBySearch } from '../../actions/posts';
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
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);

  const searchPost = () => {
    if (search.trim() || tags) {
      //dispatch searching
      dispatch(getPostsBySearch({ search: 'none', tags: tags.join(',') }));
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate('/');
    }
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };
  const handleAddTag = (tag) => setTags([...tags, tag]);
  const handleDeleteTag = (tagDelete) => setTags(tags.filter((tag) => tag !== tagDelete));

  return (
    <Grow in>
      <Container maxWidth='xl'>
        <Grid className={classes.gridContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
          <Grid item xs={12} sm={12} md={8}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={8} md={4}>
            <AppBar className={classes.appBarSearch} position='static' color='inherit'>
              <TextField
                name='search'
                variant='outlined'
                label='Search Memories'
                fullWidth
                value={search}
                onKeyPress={handleKeyPress}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ChipInput style={{ margin: '10px 0' }} value={tags} label='Search Tags' variant='outlined' onAdd={handleAddTag} onDelete={handleDeleteTag} />
              <Button onClick={searchPost} className={classes.searchButton} color='primary' variant='contained'>
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {!searchQuery && !tags.length ? (
              <Paper elevation={6} className={classes.pagination}>
                <Pagination page={page} />
              </Paper>
            ) : (
              ''
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};
