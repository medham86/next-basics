"use client";

interface IProps {
  text: string;
 
}

const Button = ({ text }: IProps) => {
  return (
    <div>
      <button  onClick={()=>console.log('clicked')}>{text}</button>
    </div>
  );
};

export default Button;
