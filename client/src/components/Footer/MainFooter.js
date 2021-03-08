import React from 'react'
import { Grid, Image, Item, Icon } from 'semantic-ui-react'

const MainFooter = () => (
    <div className="main-footer">
        <Grid>
            <Grid.Column width={4}>
                <div className="logo-footer">
                    <Image src='https://res.cloudinary.com/dye38whh3/image/upload/v1614431904/StudyCoin/ljdh1rq1qm0cdoeheknv.jpg' size='small' circular />
                </div>
            </Grid.Column>
            <Grid.Column width={9}>
                <Item.Group>

                    <Item>

                        <Item.Content>
                            <Item.Header><p style={{ color: 'white' }}>Conheça mais sobre nossos projetos acesse nossas redes sociais</p></Item.Header>

                            <Item.Content verticalAlign='middle'>
                            <a href="#">Conheça nosso site</a>
                            </Item.Content> 

                        </Item.Content>

                        <Item.Content>
                            <Item.Header><p style={{ color: 'white' }}>Contato</p></Item.Header>

                            <Item.Content >
                            calegaricorp@gmail.com
                            </Item.Content>

                        </Item.Content>
                        
                    </Item>
                </Item.Group>

            </Grid.Column>
            <Grid.Column width={3}>
                <Item.Group relaxed>
                    <Item>
                        <a href="#"><Icon disabled name='facebook official' size="large" /></a>
                        
                    </Item>

                    <Item>
                    <a href="#"><Icon disabled name='twitter' size="large" /></a>
 
                    </Item>

                    <Item>
                    <a href="#"> <Icon disabled name='youtube' size="large" /></a>
    
                    </Item>
                </Item.Group>
            </Grid.Column>
        </Grid>
    </div>
)

export default MainFooter