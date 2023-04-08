import QR from './QR';
import CardTitle from './CardTitle';
import imgUrl from '../assets/images/image-qr-code.png';
import CardBody from './CardBody';
import { CARD_INSTRUCTIONS, CARD_HEADING } from '../constants';

const Card = () => {
  return (
    <div id="qr-code-card" className="max-w-xs bg-white rounded-2xl shadow self-center p-4">
      <QR imageUrl={imgUrl} />
      <CardTitle title={CARD_HEADING} />
      <CardBody content={CARD_INSTRUCTIONS} />
    </div>
  );
};

export default Card;
