import { Sun, Moon } from "lucide-react";
import { useCallback, useContext, useState } from "react";
import { ThemeContext, type ThemeContextType } from "../context/Theme";
import useSound from "use-sound";
import switchSound from '../assets/sounds/switch.mp3';

interface css {
    bg: string,
    bg_shadow: string,
    color: string,
    fill: string,
}

export default function ThemeSwitch() {

    const [playSwitchSound] = useSound(switchSound);

    const {theme, changeTheme}: ThemeContextType = useContext(ThemeContext); 

    const [sunCss, setSunCss] = useState<css>({
        bg: 'bg-sun-bg', 
        bg_shadow: "", 
        color: 'stroke-sun-svg', 
        fill: 'fill-sun-svg'
    });

    const [moonCss, setMoonCss] = useState<css>({
        bg: 'bg-theme-inactive-bg', 
        bg_shadow: "inset-shadow-black-500/50",  
        color: 'stroke-theme-inactive-svg', 
        fill: 'fill-theme-inactive-svg'
    });

    const ToggleTheme = useCallback(() => {
        changeTheme();
        playSwitchSound();
        switch(theme) {
            case 'dark':
                setSunCss({
                    bg: 'bg-sun-bg', 
                    bg_shadow: "",
                    color: 'stroke-sun-svg', 
                    fill: 'fill-sun-svg'
                });
                setMoonCss({
                    bg: 'bg-theme-inactive-bg', 
                    bg_shadow: "inset-shadow-black-500/50",
                    color: 'stroke-theme-inactive-svg', 
                    fill: 'fill-theme-inactive-svg'
                });
                return;
            case 'light':
                setSunCss({
                    bg: 'bg-theme-inactive-bg', 
                    bg_shadow: "inset-shadow-black-500/50",
                    color: 'stroke-theme-inactive-svg', 
                    fill: 'fill-theme-inactive-svg'
                });
                setMoonCss({
                    bg: 'bg-moon-bg', 
                    bg_shadow: "",
                    color: 'stroke-moon-svg', 
                    fill: 'fill-moon-svg'
                });
                return;
            default:
                return;
        }
    }, [theme, changeTheme]);

    return (
        <div>
            <button
            onClick={ToggleTheme}
            className={`${sunCss.bg} ${sunCss.bg_shadow} h-11 w-13 content-center justify-items-center rounded-l-lg `}>
                <Sun className={`${sunCss.fill} ${sunCss.color} h-10 w-8`}/>
            </button>
            <button
            onClick={ToggleTheme}
            className={`${moonCss.bg} ${moonCss.bg_shadow} h-11 w-13 content-center justify-items-center rounded-r-lg`}>
                <Moon className={`${moonCss.fill} ${moonCss.color} h-10 w-8`}/>
            </button>
        </div>
    )
}