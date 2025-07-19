import React from 'react';
import { G, Image, Mask, Path, Svg } from 'react-native-svg';

const HomeBlob = ({ imageUrl }) => {
  const blobPath =
    'M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z';

  return (
    <Svg width="200" height="187" viewBox="0 0 200 187">
      <Mask id="mask0">
        <Path d={blobPath} fill="white" />
      </Mask>
      <G mask="url(#mask0)">
        <Path d={blobPath} fill="#6E61CA" />
        <Image
          x="-79"
          y="-26"
          width="350" // Adjust size as needed
          height="350"
          href={imageUrl}
          preserveAspectRatio="xMidYMid slice"
        />
      </G>
    </Svg>
  );
};

export default HomeBlob;