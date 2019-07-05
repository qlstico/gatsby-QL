import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import StarIcon from '@material-ui/icons/Star'
import InfoIcon from '@material-ui/icons/Info'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={3} justify="center">
      <Grid item xs={2}>
        <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </Grid>
      <Grid item xs={8}>
        <h1>qlStico</h1>
        <h5>
          Electron App focussed on creating, exploring, and editing Postgres
          Databases with GraphQL. Checkout our integrated windows for running
          raw mutations/queries, and for visualizing your GraphQL graph and
          window
        </h5>
      </Grid>
    </Grid>
    <Divider />
    <List component="nav" aria-label="Main mailbox folders">
      <ListItem>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Features" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Info" />
      </ListItem>
    </List>
  </Layout>
)

export default IndexPage
