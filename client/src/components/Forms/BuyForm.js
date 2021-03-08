import React, { useState } from 'react';
import { Form, Message, Button, Grid, Segment, Label } from 'semantic-ui-react';



const BuyForm = ({...props}) => {
    
       const [value, setValue] = useState('')
       const [errorMessage, setErrorMessage] = useState('')
       const [loading, setLoading]= useState(false);
       const [web3, setWeb3] = useState(props.web3);
       const [instance, setInstance] = useState(props.instance)
       const [accounts, setAccounts] = useState(props.accounts) 

    const onSubmit = async event => {
        
        console.log(web3)
        console.log(accounts)
        console.log(instance)
        setLoading(true);
        setErrorMessage('');
        try {
            props.instance.methods.buy().send({
            from:props.accounts[0],
            value:props.web3.utils.toWei(value, 'ether')
          });
    
        } catch (err) {
          setErrorMessage( err.message );
        }
    
        setLoading( false);
        setValue('');
      }
    
        return (

            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
                        <Form onSubmit={onSubmit}  >
                            <Label >Compre Seus Tokens</Label>
                            <Form.Input
                                icon='ethereum'
                                iconPosition='left'
                                label='Preço por token 0.00005 ETH'
                                placeholder='0.000000'
                                value={value}
                                onChange={event => setValue(event.target.value )}
                            />
                            <Message error header="Oops!"  />
                            <Button content='Comprar' primary />
                        </Form>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle'>
                        <Message>
                            <Message.Header>Invista no seu futuro</Message.Header>
                            <p>Aqui você pode comprar o StudyCoin STC, e investir neste projeto
                            inovador que visa ganhos para todos
                                </p>
                            <a href="#">saiba mais</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </Segment>

        );
    }

export default BuyForm;