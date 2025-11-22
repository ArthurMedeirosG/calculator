import Symbol from "./Symbol.jsx";


const Button = ({backgroundColor, type, hover, setValue}) => {

    const style = `
        button
        ${backgroundColor}
        ${hover}
    `;

    function calculate() {
          if (type === 'AC'){
                setValue('0')
                return;
            }


            if(type === '='){
                setValue((value)=>{
                    return String(eval(value));
                })
            }

        setValue((value)=>{

          if (value === '0'){
            return type;
          }
           

            return value + type;
        });
    }

  return <button className={style}
  onClick={calculate}
  >{type}</button>;
};

export default Button;