import { Button } from "./Button";

const CodeExecutor = ({ srcDoc, runCode }) => {

  return (
    <div className='code-executor'>
      <Button className='btn run' title='Run code' onClick={runCode} />
      <iframe
        srcDoc={srcDoc}
        title='output'
        sandbox='allow-scripts'
      />
    </div>
  )
}


export {CodeExecutor};