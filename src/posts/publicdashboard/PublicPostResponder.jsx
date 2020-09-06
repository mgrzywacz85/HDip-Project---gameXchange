import React from 'react';
import { List, Image } from 'semantic-ui-react';

export default function PublicPostResponder(){
    return(
        <List.Item>
            <Image size='mini' circular src='/img/user.png' />
        </List.Item>
    )
}