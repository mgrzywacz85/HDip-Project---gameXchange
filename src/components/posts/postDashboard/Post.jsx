import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Item, Icon, Button } from "semantic-ui-react";
import Moment from "react-moment";

const Post = ({ auth, post }) => {


  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={post.avatar} />
            <Item.Content>
              <Item.Header content={post.title} />
              <Item.Description>
                Posted by {post.name} on
                <Moment format='DD/MM/YYYY'>{post.date}</Moment>
              </Item.Description>
              <Item.Description>
                <Icon name='marker' /> {post.preferredlocation}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Item>
          <Item.Content>
            <Item.Header content={post.description} style={{ fontSize: 20 }} />
          </Item.Content>
          <Item.Image size='small' src={post.photo} style={{ marginTop: 30 }} />
        </Item>
      </Segment>
      <Segment secondary clearing>
        <Button
          color='violet'
          content='Like'
          icon='heart'
          label={{
            basic: true,
            color: "violet",
            pointing: "left",
            content: `${post.likes.length}`,
          }}
        />
        <Button
          color='violet'
          content='Comment'
          icon='heart'
          label={{
            basic: true,
            color: "violet",
            pointing: "left",
            content: `${post.comments.length}`,
          }}
        />

          {!auth.loading && post.user === auth.user._id && (
        <Button
          as={Link}
          to={`/posts/${post.id}`} //IMPORTANT = backticks = template literals - allow to use JS to specify which post to route to
          color='red'
          floated='right'
          content='Delete'
        />)}

        <Button
          as={Link}
          to={`/posts/${post.id}`} //IMPORTANT = backticks = template literals - allow to use JS to specify which post to route to
          color='violet'
          floated='right'
          content='View details'
        />
      </Segment>
    </Segment.Group>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer
});

export default connect(mapStateToProps)(Post);
