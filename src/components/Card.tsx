import QR from './QR';
import CardTitle from './CardTitle';
import imgUrl from '../assets/images/image-qr-code.png';
import CardBody from './CardBody';

const Card = () => {
  return (
    <div id="qr-code-card" className="max-w-xs bg-white rounded-2xl drop-shadow-md self-center p-4">
      <QR imageUrl={imgUrl} />
      <CardTitle title="Improve your front-end skills by building projects" />
      <CardBody content="Scan the QR code to visit Frontend mentor and take your coding skills to the next level" />
    </div>
  );
};

export default Card;
