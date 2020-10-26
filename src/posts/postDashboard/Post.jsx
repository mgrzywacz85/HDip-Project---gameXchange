import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Item, Icon, Button } from "semantic-ui-react";
import { deletePost } from "../postRedux/PostActions";

export default function Post({ post }) {
  const dispatch = useDispatch();

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={post.userPhotoURL} />
            <Item.Content>
              <Item.Header content={post.title} />
              <Item.Description>{post.date}</Item.Description>
              <Item.Description>Posted by {post.postedBy}</Item.Description>
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
            <Item.Header content={post.description} style={{fontSize: 20}} />
          </Item.Content>
          <Item.Image size='small' src={post.photo} style={{ marginTop: 30 }} />
      </Item>
      </Segment>
      <Segment secondary clearing>
        <Button
          onClick={() => dispatch(deletePost(post))}
          floated='right'
          content='Delete'
        />
        <Button
          as={Link}
          to={`/posts/${post.id}`} //IMPORTANT = backticks = template literals - allow to use JS to specify which post to route to
          color='violet'
          floated='left'
          content='View details'
        />
      </Segment>
    </Segment.Group>
  );
}
