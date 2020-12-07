import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from 'react-simple-card';



export default function ProductionsCard () {
    return (
        <>
        <Card className="carte">
        <CardHeader>Charpentier</CardHeader>
        <ImageHeader imageSrc="/charpentier.png" alt="site charpentier"/>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
    </Card>
<style jsx>{`
    .carte {
        width: 15%;
    }
    img {
        width: 100;
        height: 100;
    }

`}

</style>
</>
    )
}