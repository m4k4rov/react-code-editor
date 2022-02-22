import { useState, useRef } from "react";
import { Controlled } from "react-codemirror2";
import { Button } from "./Button";
import { ThemeSelector } from "./ThemeSelector";

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/edit/matchbrackets';


const CodeEditor = ({ mode, value, setValue }) => {
  const [theme, setTheme] = useState('dracula');

  const fileInputRef = useRef();
  // проверка валидности файла
  const isFileValid = (file) => {
    return (mode === 'xml' && file.type === 'text/html') || file.type.includes(mode)
  };
  //метод для чтения файла как текст
  const readFile = (file) => {
    if (!isFileValid(file)) return

    const reader = new FileReader()

    reader.onloadend = () => {
      setValue(reader.result)
    }

    reader.readAsText(file)
  }
  // метод для загрузки файла
  const loadFile = (e) => {
    const file = e.target.files[0]
    readFile(file)
  }

  const changeCode = (editor, data, value) => {
    setValue(value)
  };

  return (
    <div className='code-editor'>
      <div className='code-editor-wrap'>
        <Button
          className='btn file'
          title='Load file'
          onClick={() => {
            // передаем клик скрытому инпуту
            fileInputRef.current.click()
          }}
        />
        <ThemeSelector setTheme={setTheme} />
      </div>
      <input
        type='file'
        accept='text/html, text/css, text/javascript'
        style={{ display: 'none' }}
        aria-hidden='true'
        ref={fileInputRef}
        // выполняем загрузку и чтение файла
        onChange={loadFile}
      />
      <Controlled
        value={value}
        onBeforeChange={changeCode}
        options={{
          mode,
          theme,
          lint: true,
          lineNumbers: true,
          lineWrapping: true,
          spellcheck: true,
          autoCloseTags: true,
          autoCloseBrackets: true,
          matchTags: true,
          matchBrackets: true
        }}
      />
  </div>

  )
}

export {CodeEditor};