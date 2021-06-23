import React, { FC } from 'react';
import { View, Image } from 'react-native';
import { Body } from 'matter-js';

import Images from '../assets/Images';

type PropsType = {
  body: Body;
};

const Pipe: FC<PropsType> = ({ body }) => {
  const width = body.bounds.max.x - body.bounds.min.x;
  const height = body.bounds.max.y - body.bounds.min.y;
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;

  const pipeRatio = 160 / width;
  const pipeHeight = 33 * pipeRatio;
  const pipeIterations = Math.ceil(height / pipeHeight);

  return (
    <View
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: width,
        height: height,
        overflow: 'hidden',
        flexDirection: 'column',
      }}>
      {Array.apply(null, Array(pipeIterations)).map((el, idx) => {
        return (
          <Image
            style={{ width: width, height: pipeHeight }}
            key={idx}
            resizeMode="stretch"
            source={Images.pipeCore}
          />
        );
      })}
    </View>
  );
};

export default Pipe;
