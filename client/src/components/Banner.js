import React, { Component } from 'react';
import { Image, Grid } from 'semantic-ui-react';

class Banner extends Component {



    render() {
        return (
            <div className="banner-area">
                <Grid>
                    <Grid.Column width={4}>
                        <Image src='https://res.cloudinary.com/dye38whh3/image/upload/v1614431904/StudyCoin/ljdh1rq1qm0cdoeheknv.jpg' rounded />
                    </Grid.Column>

                    <Grid.Column width={9}>

                        <img style={{ width: '100%' }} src="https://res.cloudinary.com/dye38whh3/image/upload/v1614605534/StudyCoin/cjhgpnllsnae1isnkhhe.png" className="ui tiny rounded image" />

                        <div className="banner-style" style={{ width: '100%' }}>
                            <p> StudyCoin  é uma criptomoeda do tipo ERC20, que trabalha na rede do Ethereum é o primeiro projeto da Calegari Systens,
                            uma empresa voltada para tecnologia de ativos digitais, somos uma empresa seria que visa ganhos para todos. <a>Conheça mais no nosso site.</a>
                            </p>

                        </div>
                    </Grid.Column>

                    <Grid.Column width={3}>
                        <p>Faça seu investimento, os tokens são limitados. Garanta os seus!</p>
                        <Image src="https://res.cloudinary.com/dye38whh3/image/upload/v1614605016/StudyCoin/lcraogxsig4pgs5qpmha.jpg" />
                        <p>Seja parte do nosso projeto!</p>
                        <Image src="https://res.cloudinary.com/dye38whh3/image/upload/v1614609521/StudyCoin/nffko79uvy3chdx3xdji.png" />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Banner;