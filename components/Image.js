import { getStrapiMedia } from '../../lib/media';
import NextImage from 'next/image';

const Image = ({ image }) => {
  const { alternativeText, width, height } = image.data.attributes;

  const thumbnail = {
    width: image.data.attributes.formats.thumbnail.width,
    height: image.data.attributes.formats.thumbnail.height
  }

  const large = {
    width: image.data.attributes.formats.large.width,
    height: image.data.attributes.formats.large.height
  }

  const medium = {
    width: image.data.attributes.formats.medium.width,
    height: image.data.attributes.formats.medium.height
  }

  const small = {
    width: image.data.attributes.formats.small.width,
    height: image.data.attributes.formats.small.height
  }

  return (
    <NextImage
      layout='responsive'
      width={large.width}
      height={large.height}
      objectFit='contain'
      src={getStrapiMedia(image)}
      alt={alternativeText || ''}
    />
  );
};

export default Image;