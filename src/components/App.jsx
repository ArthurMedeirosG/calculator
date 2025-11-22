import Display from "./Display.jsx";
import Box from "./Box.jsx";
import Symbol from "./Symbol.jsx";
import Button from "./Button.jsx";
import { useState } from "react";

const App = () => {

  const [value, setValue] = useState(0);  


  return (
   <>
      
      <Box>
        <Display>
          <Symbol value={value} />
        </Display>
        <Box
         display='grid'
         columns='grid-cols-4'
         gap='gap-2'
         padding='py-3'
         setValue={setValue}
        >
          <Button 
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            type='('
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            type=')'
            setValue={setValue}
          />  
          <Button 
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            type='%'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            type='AC'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-900'
            hover='hover:bg-gray-400'
            type='7'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-900'
            hover='hover:bg-gray-400'
            type='8'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-900'
            hover='hover:bg-gray-400'
            type='9'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            type='/'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-900'
            hover='hover:bg-gray-400'
            type='4'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-900'
            hover='hover:bg-gray-400'
            type='5'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-900'
            hover='hover:bg-gray-400'
            type='6'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            type='X'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-900'
            hover='hover:bg-gray-400'
            type='1'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-900'
            hover='hover:bg-gray-400'
            type='2'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-900'
            hover='hover:bg-gray-400'
            type='3'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            type='-'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-900'
            hover='hover:bg-gray-400'
            type='.'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-900'
            hover='hover:bg-gray-400'
            type='0'
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-blue-800'
            hover='hover:bg-blue-400'
            type='='
            setValue={setValue}
          />
          <Button 
            backgroundColor='bg-gray-700'
            hover='hover:bg-gray-600'
            type='+'
            setValue={setValue}
          />
        </Box>
      </Box>

   </>
  )
};

export default App;