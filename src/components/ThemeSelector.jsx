import 'codemirror/theme/dracula.css';
import 'codemirror/theme/gruvbox-dark.css';
import 'codemirror/theme/paraiso-light.css';

const themes = ['dracula', 'gruvbox-dark', 'paraiso-light'];

const ThemeSelector = ({ setTheme }) => {
  const selectTheme = (e) => {
    setTheme(e.target.value);
  }
  return (
    <div className='theme-selector'>
      <label htmlFor='theme'>Theme: </label>
      <select id='theme' name='theme' onChange={selectTheme}>
        {themes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  )
}

export {ThemeSelector};