import QR from './QR';
import imgUrl from '../assets/images/image-qr-code.png';
import CardTitle from './CardTitle';

const Card = () => {
  return (
    <div id="qr-code-card" className="max-w-xs bg-white rounded-lg drop-shadow-md self-center">
      <QR imageUrl={imgUrl} />
      <CardTitle title="Improve your front-end skills by building projects" />
      <CardTitle title="Scan the QR code to visit Frontend mentor and take your coding skills to the next level" />
    </div>
  );
};

export default Card;
