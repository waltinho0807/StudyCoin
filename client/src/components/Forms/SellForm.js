import React, { useState } from 'react';
import { Form, Message, Button, Grid, Segment, Label } from 'semantic-ui-react';



const SellForm = ({ ...props }) => {

    const [value, setValue] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false);
    const [web3, setWeb3] = useState(props.web3);
    const [instance, setInstance] = useState(props.instance);
    const [accounts, setAccounts] = useState(props.accounts);

    const sellSubmit = async () => {
        setLoading(true);
        setErrorMessage('');
        try {
            instance.methods.addList(value ).send({
                from: accounts[0],
            });
           

        } catch (err) {
            setErrorMessage(err.message);
        }

        setLoading(false);
        setValue('');
    }

return (

    <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
                <Form onSubmit={sellSubmit}>
                    <Label>Venda Seus Tokens</Label>
                    <Form.Input
                        icon='ethereum'
                        iconPosition='left'
                        label='Venda aqui seus tokens por 0.00006'
                        placeholder='0.000000'
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                    <Button content='Vender' primary />
                </Form>
            </Grid.Column>

            <Grid.Column verticalAlign='middle'>
                <Message>
                    <Message.Header>Venda seus tokens</Message.Header>
                    <p>Aqui você vende o StudyCoin STC com 20% de valorização
                    em cima do ETH, seu endereço e tokens serão listados
                    para compensação.
                                </p>
                    <a href="/sobre">saiba mais</a>
                </Message>
            </Grid.Column>
        </Grid>
    </Segment>

);

}

export default SellForm;