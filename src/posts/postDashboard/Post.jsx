import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import PostResponder from './PostResponder';


export default function Post({post, selectPost, deletePost}){
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={post.userPhotoURL} />
                        <Item.Content>
                            <Item.Header content={post.title} />
                            <Item.Description>
                                {post.date}                   
                            </Item.Description>
                            <Item.Description>
                                Posted by {post.postedBy}                
                            </Item.Description>
                            <Item.Description>
                                <Icon name='marker' /> {post.preferredlocation}                    
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
            <div>{post.description}</div>
            </Segment>
            <Segment secondary clearing>
                <List horizontal>
                    {post.responders.map(responder => (
                        <PostResponder key={responder.id} responder={responder}/>
                    ))}
                </List>
                <Button 
                onClick={() => deletePost(post.id)} 
                color='grey' 
                floated='right' 
                content='Remove'/>
                <Button 
                as={Link} to={`/posts/${post.id}`} //backticks = template literals - allow to use JS to specify which post to route to
                color='blue' 
                floated='right' 
                content='View'/>
            </Segment>
        </Segment.Group>
    )
}