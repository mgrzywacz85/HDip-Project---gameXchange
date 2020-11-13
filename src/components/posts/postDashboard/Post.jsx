import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Item, Icon, Button } from "semantic-ui-react";
import Moment from "react-moment";
import {
  clickLike,
  deletePost,
} from "../../../app/reduxStore/actions/PostActions";

const Post = ({ auth: { loading, user }, post, clickLike, deletePost }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={post.avatar} />
            <Item.Content>
              <Item.Header content={post.title} />
              <Item.Description>Category: {post.category}</Item.Description>
              <Item.Description>
                Posted by {post.name} on{" "}
                <Moment format='DD/MM/YYYY'>{post.date}</Moment>
              </Item.Description>
              <Item.Description>
                Meet-up location: <Icon name='marker' />
                {post.preferredlocation}
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
          onClick={() => clickLike(post._id)}
          color='violet'
          content='Likes'
          icon='heart'
          label={{
            basic: true,
            color: "violet",
            pointing: "left",
            content: `${post.likes.length}`,
          }}
        />

        <Button
          as={Link}
          to={`/posts/${post._id}`}
          color='purple'
          content='Comments'
          icon='comment'
          label={{
            basic: true,
            color: "purple",
            pointing: "left",
            content: `${post.comments.length}`,
          }}
        />

        {!loading && post.user === user._id && !post.isAccepted && !post.isCompleted && (
          <Button
            onClick={() => {if(window.confirm('Are you sure you want to delete this post?')){deletePost(post._id)}}}
            color='red'
            floated='right'
            content='Delete'
          />
        )}



        <Button
          as={Link}
          to={`/posts/${post._id}`} //IMPORTANT = backticks = template literals - allow to use JS to specify which post to route to
          color='violet'
          floated='right'
          content='View details'
        />

{!loading && post.isAccepted && !post.isCompleted && (
          <Button
            color='yellow'
            floated='right'
            content='Xchange Pending'
          />
        )}


{!loading && post.isCompleted && (
          <Button
            color='green'
            floated='right'
            content='Xchange Successful'
          />
        )}
      </Segment>
    </Segment.Group>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  clickLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps, { clickLike, deletePost })(Post);
