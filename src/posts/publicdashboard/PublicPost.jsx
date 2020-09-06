import React from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import PublicPostResponder from './PublicPostResponder';

export default function PublicPost(){
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/img/user.png' />
                        <Item.Content>
                            <Item.Header content='Post title' />
                            <Item.Description>
                                Ratchet and Clank PS4
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> Date
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    <PublicPostResponder />
                    <PublicPostResponder />
                    <PublicPostResponder />
                </List>
            </Segment>
            <Segment clearing>
                <div>Offer description</div>
                <Button color='teal' floated='right' content='View'/>
            </Segment>
        </Segment.Group>
    )
}