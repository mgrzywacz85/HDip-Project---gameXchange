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
                                {event.postedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {event.date}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.responders.map(responder => (
                        <PublicPostResponder key={responder.id} responder={responder}/>
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button color='blue' floated='right' content='View'/>
            </Segment>
        </Segment.Group>
    )
}