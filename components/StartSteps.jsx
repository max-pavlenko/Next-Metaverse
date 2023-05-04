import styles from '../styles';

const StartSteps = ({stepNumber, feature}) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} min-w-[60px] h-[60px] rounded-[24px] bg-[#323f5d]`}>
        <p className='text-white font-bold text-[20px]'>0{stepNumber}</p>
    </div>
      <p className='flex grow ml-7 text-lg text-[#b0b0b0] '>{feature}</p>
  </div>
);

export default StartSteps;
