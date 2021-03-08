import React, { Component } from 'react';
import { Image, Grid } from 'semantic-ui-react';

class Banner extends Component {



    render() {
        return (
            <Image.Group size='small'>
                <Image src="https://res.cloudinary.com/dye38whh3/image/upload/v1614435351/StudyCoin/xpgj52o5wdv0jdxrkegg.jpg "/>
                <Image src="https://res.cloudinary.com/dye38whh3/image/upload/v1614435317/StudyCoin/agbizxjv0u0n2n6nfe3d.jpg " />
                <Image src="https://res.cloudinary.com/dye38whh3/image/upload/v1614435558/StudyCoin/wfu4sv39etdv3aeurk7a.png " />
                <Image src="https://res.cloudinary.com/dye38whh3/image/upload/v1614435308/StudyCoin/zbg1bxobepx5x1opso3s.jpg" />
                <Image src="https://res.cloudinary.com/dye38whh3/image/upload/v1614435637/StudyCoin/asuamlxdwqvdqi2ownfj.png " />
            </Image.Group>
        );
    }
}

export default Banner;