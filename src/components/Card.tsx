import QR from './QR';
import CardTitle from './CardTitle';
import CardBody from './CardBody';
import imgUrl from '../assets/images/image-qr-code.png';
import { CARD_INSTRUCTIONS, CARD_HEADING } from '../constants';

const Card = () => {
  return (
    <div
      id="qr-code-card"
      role="presentation"
      className="max-w-xs bg-white rounded-2xl shadow self-center p-4">
      <QR imageUrl={imgUrl} />
      <CardTitle title={CARD_HEADING} />
      <CardBody content={CARD_INSTRUCTIONS} />
    </div>
  );
};

export default Card;
