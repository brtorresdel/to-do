import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import useSound from 'use-sound';

import click from '../sound/switch.mp3';

function SwitchThemeMode({ onChangeAppTheme }) {

    const [sunColor, setSunColor] = useState('fill-sun stroke-sun');
    const [sunBg, setSunBg] = useState('bg-sunlight');
    const [moonColor, setMoonColor] = useState('fill-inactive stroke-inactive');
    const [moonBg, setMoonBg] = useState('bg-inactive-bg');

    const [theme, setTheme] = useState('light');

    const [clickSound] = useSound(click);

    function changeButtonTheme() {
        clickSound();
        onChangeAppTheme();
        if (theme === 'light') {
            setSunColor('fill-inactive stroke-inactive');
            setSunBg('bg-inactive-bg');
            setMoonColor('fill-moon stroke-moon');
            setMoonBg('bg-moonlight');
            setTheme('dark');
        } else {
            setSunColor('fill-sun stroke-sun');
            setSunBg('bg-sunlight');
            setMoonColor('fill-inactive stroke-inactive');
            setMoonBg('bg-inactive-bg');
            setTheme('light');
        }
    }

    return <div>
        <button 
        className='w-screen flex justify-end p-4'>
            <div 
            className={`${sunBg} flex justify-center items-center rounded-tl-lg rounded-bl-lg
            w-1/17 h-1/19 min-w-18 min-h-12 max-w-20 max-h-14`}
            onClick={changeButtonTheme}>
                <Sun 
                className={`${sunColor} drop-shadow-basic size-9`}/>
            </div>
            <div 
            className={`${moonBg} size-12 flex justify-center items-center rounded-tr-lg rounded-br-lg
            w-1/17 h-1/19 min-w-18 min-h-12 max-w-20 max-h-14 sm:w-1/10`}
            onClick={changeButtonTheme}>
                <Moon 
                className={`${moonColor} dorp-shadow-basic size-9`}/>
            </div>
        </button>
    </div>
}

export default SwitchThemeMode;