import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter
  } from "@material-tailwind/react";
  import img  from '../resource/egusi.jpg'

const CardComponent = (props) => {
    return (
    <Card className="w-full ml-3 h-3/4 bg-indigo-50 px-3 ">
      <CardHeader shadow={false} floated={false} className="h-30">
        <img 
        src={props.image}
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-medium">
            Egusi
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography variant="small" color="gray" className="text-sm opacity-75">
         Everything you need, 
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-green-900 text-white shadow  m-3 ml-10 hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 w-1/2 h-10 flex justify-center items-center self-center"
        >Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardComponent