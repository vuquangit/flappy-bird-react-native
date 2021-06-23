import React, { FC } from 'react';
import { Image } from 'react-native';
import { Body } from 'matter-js'

import Images from '@/assets/Images';

type PropsType = {
  body: Body
}

const PipeTop: FC<PropsType> = ({ body }) => {
  const width = body.bounds.max.x - body.bounds.min.x;
  const height = body.bounds.max.y - body.bounds.min.y;
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;

  return (
    <Image
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: width,
        height: height,
      }}
      resizeMode="stretch"
      source={Images.pipeTop}
    />
  );
};


export default PipeTop
