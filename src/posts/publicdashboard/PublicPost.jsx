import React from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import PublicPostResponder from './PublicPostResponder';


export default function PublicPost({event}){
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.userPhotoURL} />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>
                                {event.date}                   
                            </Item.Description>
                            <Item.Description>
                                Posted by {event.postedBy}                
                            </Item.Description>
                            <Item.Description>
                                <Icon name='marker' /> {event.location}                    
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
            <div>{event.description}</div>
            </Segment>
            <Segment secondary clearing>
                <List horizontal>
                    {event.responders.map(responder => (
                        <PublicPostResponder key={responder.id} responder={responder}/>
                    ))}
                </List>
                <Button color='blue' floated='right' content='View'/>
            </Segment>
        </Segment.Group>
    )
}