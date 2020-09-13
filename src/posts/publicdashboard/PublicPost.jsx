import React from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import PublicPostResponder from './PublicPostResponder';


export default function PublicPost({post, selectPost}){
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
                        <PublicPostResponder key={responder.id} responder={responder}/>
                    ))}
                </List>
                <Button 
                onClick={() => selectPost(post)} 
                color='blue' 
                floated='right' 
                content='View'/>
            </Segment>
        </Segment.Group>
    )
}