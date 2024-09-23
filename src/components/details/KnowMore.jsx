/* eslint-disable react/prop-types */

const KnowMore = ({ car }) => {

    const upperCasesManufacturer= car.manufacturer ? car.manufacturer.toUpperCase():'unknonw'
    const upperCasesModel= car.model ? car.model.toUpperCase( ) : 'unknown'

    const carColor = car && car.Color && car.Color.hex ? car.Color.hex : 'unknown';



    const style = {
      color: carColor,
      fontWeight: 800,
      fontSize:'25px',
      opacity:0.8,
      textShadow:'0.5px  0.5px  0.5px gray  '
    
    };


  return (
    <div className="flex flex-col gap-4 justify-center mt-5">
      <h1 style={style} >{upperCasesManufacturer}  {upperCasesModel}</h1>
      <img src={car ? car.img3:'unknown'} className="w-54  rounded-lg " />
      <p className="text-left text-xs mt-4">{car ? car.Desc: 'unknown'}</p>
    </div>
  );
};

export default KnowMore;
