import { Button } from "./Button";

const tabs = ['HTML', 'CSS', 'JS'];

const Tabs = ({ mode, setMode }) => {
  const changeMode = (e) => {
    setMode(e.target.textContent.toLowerCase());
  };

  return (
    <div className='tabs'>
      {tabs.map((item) => (
        <Button
          key={item}
          title={item}
          onClick={changeMode}
          // индикатор текущей вкладки
          className={item.toLowerCase() === mode ? 'current' : ''}
        />
      ))}
    </div>
  )
}

export {Tabs};