import React from 'react'
import { Button,Toast} from 'antd-mobile'
export default function App() {
  const test=()=>{
    Toast.show({
      content: 'Hello World',
      afterClose: () => {
        console.log('after')
      },
    })
  }
  return (
    <div>
       <Button color='primary' onClick={test}>Primary</Button>
    </div>
  )
}
