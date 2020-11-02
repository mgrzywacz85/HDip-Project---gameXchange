import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Item, Icon, Button } from "semantic-ui-react";
import Moment from "react-moment";
import { clickLike, deletePost } from "../../../app/reduxStore/actions/PostActions";

const Post = ({ auth: { loading, user }, post, clickLike, deletePost }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={post.avatar} />
            <Item.Content>
              <Item.Header content={post.title} />
              <Item.Description>
                Posted by {post.name} on{" "}
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
        {user._id !== null ? (
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
        ) : (
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
        )}

        <Button
          color='violet'
          content='Comments'
          icon='comment'
          label={{
            basic: true,
            color: "violet",
            pointing: "left",
            content: "2",
          }}
        />

        {!loading && post.user === user._id && (
          <Button
            onClick={() => deletePost(post._id)}
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
      </Segment>
    </Segment.Group>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  clickLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps, { clickLike, deletePost })(Post);
